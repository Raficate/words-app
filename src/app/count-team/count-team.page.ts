import { Component, OnInit } from '@angular/core';
import { Game } from '../interfaces/game';
import { GameService} from '../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CountdownComponent} from 'ngx-countdown';

@Component({
  selector: 'app-count-team',
  templateUrl: './count-team.page.html',
  styleUrls: ['./count-team.page.scss'],
})
export class CountTeamPage implements OnInit {

  gameKey: string;
  actualGame: Game;
  palabra1: string;
  palabra2: string;
  palabra3: string;
  palabra4: string;
  palabra5: string;
  team = localStorage.getItem('team');

  constructor(private gameService: GameService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.gameKey = localStorage.getItem('gameKey')!;
    this.getGamePrueba(this.gameKey);
  }

  getGamePrueba(key: string){
    this.gameService.get(key).valueChanges().subscribe(data => {
      // this.actualGame = data as Game;
      localStorage.setItem('actualGame', JSON.stringify(data))
      this.actualGame = JSON.parse(localStorage.getItem('actualGame')!) as Game;
      this.palabra1 = this.actualGame.actualWords[0];
      this.palabra2 = this.actualGame.actualWords[1];
      this.palabra3 = this.actualGame.actualWords[2];
      this.palabra4 = this.actualGame.actualWords[3];
      this.palabra5 = this.actualGame.actualWords[4];
      // localStorage.setItem('actualGame', JSON.stringify(this.actualGame))
      // console.log(this.actualGame)
    })
  }

  subtractAWord() {
    this.actualGame.remainingWords = this.actualGame.remainingWords -1
    this.gameService.update(this.gameKey, { remainingWords: this.actualGame.remainingWords})
        .catch(err => console.log(err));
    if(this.actualGame.remainingWords <= 0){
      this.finishRound();
    }
  }

  updateGameState(key: string,status: string): void {
    this.gameService.update(key, { state: status })
    .then(() => {
      this.actualGame.state = status;
      localStorage.setItem('actualGame', JSON.stringify(this.actualGame))
    })
    .catch(err => console.log(err));
  }

  finishRound() {
    if(this.actualGame.totalRounds == this.actualGame.round){
        /// Mandar a una pagina de resultados (hay que crearla)
    } else {
      this.actualGame.round = this.actualGame.round + 1;
      if(this.team=='red'){
        this.updateGameState(this.gameKey!, 'redRound');
        this.router.navigate(['/title-screen']);
  
      } else {
        this.updateGameState(this.gameKey!, 'blueRound');
        this.router.navigate(['/title-screen']);
      }
    }
    
  }

}
