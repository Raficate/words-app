import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService} from '../services/game.service';
import { Game } from '../interfaces/game';
import { delay, map } from 'rxjs/operators'

@Component({
  selector: 'app-join-session',
  templateUrl: './join-session.page.html',
  styleUrls: ['./join-session.page.scss'],
})
export class JoinSessionPage implements OnInit {

  games?: Game[]; 
  gameKey: string = '' ;
  game: Game;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.retrieveGames();
    localStorage.setItem('team', 'red');
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
      console.log(this.games)
    });
  }

  findSession(){
    if(this.games){
      for (let i = 0; i<this.games.length; i++ ) {
        const key = this.games[i].key;
        if(this.games[i].gameId == this.gameKey && key){
          if(this.games[i].state == 'blueRound'){
            // this.updateGameState(key, 'blueRound');
            // this.games[i].state = 'blueRound';
            // localStorage.setItem('actualGame', JSON.stringify(this.games[i]))
            this.router.navigate(['/teams-view/'+this.gameKey])
          }else {
            this.updateGameState(key, 'waitingTeams');
            this.games[i].state = 'waitingTeams';
            localStorage.setItem('actualGame', JSON.stringify(this.games[i]))
            this.router.navigate(['/wait-teams/'+this.gameKey])
          }
          
          break;
        }
    }  
    }

    
  }

  updateGameState(key: string ,status: string): void {
      this.gameService.update(key, { state: status })
      .then(() => {
        this.game.state = status;
        localStorage.setItem('actualGame', JSON.stringify(this.game))
      })
      .catch(err => console.log(err));

  }


  



}
