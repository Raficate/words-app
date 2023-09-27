import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService} from '../services/game.service';


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

  constructor(private gameService: GameService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.documentId = this.route.snapshot.params['id'];
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
    this.addTeamsToGame(this.documentId, this.blueTeam, this.redTeam);

  }

  addTeamsToGame(key: string, blueTeam: string[], redTeam: string[]){
    this.gameService.update(key, { blueTeam: blueTeam })
      .catch(err => console.log(err));
    this.gameService.update(key, { redTeam: redTeam })
      .catch(err => console.log(err));
  }


}
