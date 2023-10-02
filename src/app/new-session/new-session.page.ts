import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService} from '../services/game.service';
import { Game } from '../interfaces/game';
import { delay, map } from 'rxjs/operators'
import data from '../../assets/words.json';


@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.page.html',
  styleUrls: ['./new-session.page.scss'],
})
export class NewSessionPage implements OnInit {

  players: string[] = [];
  playerName: string = '';
  redTeam: string[] = [];
  blueTeam: string[] = [];
  documentId: string;
  games?: Game[]; 
  key: string;
  actualGame: Game;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.documentId = this.route.snapshot.params['id'];
    localStorage.setItem('team', 'blue')
    this.retrieveGames();
  }


  addPlayer(){
    if(this.playerName==''){
      (document.getElementById('alert-label') as HTMLButtonElement).textContent = "Escribe un nombre para el siguiente jugador"

    }else{
      this.players.push(this.playerName);
      (document.getElementById('alert-label') as HTMLButtonElement).textContent = ""
      console.log(this.players);
      this.playerName = '';
      if(this.players.length == 4){
        (document.getElementById('go-play-btn') as HTMLButtonElement).disabled = false;
      }
      if(this.players.length == 10){
        (document.getElementById('player-add-btn') as HTMLButtonElement).disabled = true;
        (document.getElementById('alert-label') as HTMLButtonElement).textContent = "Límite de jugadores alcanzado. ¡A jugar!"
      }
    }
    
    return this.players
  }

  createTeams(){
    let blue = false;
    let len = this.players.length
    while(this.players.length){
      var index = Math.floor( Math.random()*this.players.length );
      if(blue){
        this.blueTeam.push(this.players[index]);
        blue=false;
      } else {
        this.redTeam.push(this.players[index]);
        blue=true;
      }
      this.players.splice( index, 1 ); // Remove the item from the array
    }
  }

  goPlay(){
    
    this.createTeams();
    this.addTeamsToGame(this.key, this.blueTeam, this.redTeam);
    localStorage.setItem('gameKey', this.key)
    localStorage.setItem('actualGame', JSON.stringify(this.actualGame))
    this.router.navigate(['/teams-view/'+this.documentId]);

  }


  addTeamsToGame(key: string, blueTeam: string[], redTeam: string[]){
    this.gameService.update(key, { blueTeam: blueTeam })
      .catch(err => console.log(err));
    this.gameService.update(key, { redTeam: redTeam })
      .catch(err => console.log(err));
    if(this.actualGame.state == 'waitingTeams'){
      this.gameService.update(key, { state: 'blueRound' })
      .catch(err => console.log(err));
    } else {
      this.gameService.update(key, { state: 'teamsReady' })
      .catch(err => console.log(err));
    }
      this.gameService.update(key, { totalRounds: redTeam.length + blueTeam.length })
      .catch(err => console.log(err));
  }

  retrieveGames(): void {
    this.gameService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.games = data as Game[];
      for (let i = 0; i<this.games.length; i++ ) {
        if(this.games[i].gameId == this.documentId && this.games[i].key){
          this.key = this.games[i].key as string;
        }
      }   
    });
  }

  getGamePrueba(key: string){
    this.gameService.get(key).valueChanges().subscribe(data => {
      this.actualGame = data as Game;
      localStorage.setItem('actualGame', JSON.stringify(this.actualGame))
    })
  }


}
