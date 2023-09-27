import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService} from '../services/game.service'
import { Game } from '../interfaces/game'
import { map } from 'rxjs/operators'
import { initializeApp } from '@angular/fire/app';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.page.html',
  styleUrls: ['./title-screen.page.scss'],
})
export class TitleScreenPage implements OnInit {

  
  game: Game;
  constructor(private gameService: GameService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }
  

  createSession(){
    let key =  Math.random().toString(36).substring(2,8);
    const game: Game = {
      gameId: key,
      state: 'waitingForOpponent',
      round: 0,
      bluePoints: 0,
      redPoints: 0,
      totalRounds: 0,
      blueTeam: [],
      redTeam: []
    }

    this.gameService.create(game).then(() => {
      console.log('Game created succesfully with id: ' + game.gameId)
    })
    this.router.navigate(['/new-session/'+key]);
  }

  joinSession(){
    this.router.navigate(['/join-session']);

  }

}
