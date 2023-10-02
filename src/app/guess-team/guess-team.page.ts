import { Component, OnInit } from '@angular/core';
import { Game } from '../interfaces/game';
import { GameService} from '../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CountdownComponent} from 'ngx-countdown';


@Component({
  selector: 'app-guess-team',
  templateUrl: './guess-team.page.html',
  styleUrls: ['./guess-team.page.scss'],
})
export class GuessTeamPage implements OnInit {

  actualGame = JSON.parse(localStorage.getItem('actualGame')!) as Game;
  palabra1 = this.actualGame.actualWords[0];
  palabra2 = this.actualGame.actualWords[1];
  palabra3 = this.actualGame.actualWords[2];
  palabra4 = this.actualGame.actualWords[3];
  palabra5 = this.actualGame.actualWords[4];
  points = 0;
  gameKey = localStorage.getItem('gameKey');
  team = localStorage.getItem('team');


  constructor(private gameService: GameService, private route: ActivatedRoute, private router:Router) { }


  ngOnInit() {
    
  }

  timesUp(event: any) { 
    if (event.action == "done"){
      this.finishRound();
    }
  }
  finishRound() {
    if(this.actualGame.totalRounds == this.actualGame.round){
        /// Mandar a una pagina de resultados (hay que crearla)
    } else {
      this.actualGame.round = this.actualGame.round + 1;
      if(this.team=='blue'){
        this.updateGameState(this.gameKey!, 'redRound');
        this.updateGameBluePoints(this.gameKey!, this.points)
        this.router.navigate(['/teams-view/'+this.actualGame.gameId]);
  
      } else {
        this.updateGameState(this.gameKey!, 'blueRound');
        this.updateGameRedPoints(this.gameKey!, this.points)
        this.router.navigate(['/teams-view/'+this.actualGame.gameId]);
      }
    }
    
  }

  handleEvent(event: any) {
    if (event.action == "done"){
      this.finishRound();
    }
    if (event.action = 'start'){
      console.log('hola');
      // const box = document.getElementById('wrong1') as HTMLButtonElement;
      // if(box){
      //   box.disabled = false;
      // }
      (document.getElementById('wrong1') as HTMLButtonElement).disabled = false;
      (document.getElementById('wrong2') as HTMLButtonElement).disabled = false;
      (document.getElementById('wrong3') as HTMLButtonElement).disabled = false;
      (document.getElementById('wrong4') as HTMLButtonElement).disabled = false;
      (document.getElementById('wrong5') as HTMLButtonElement).disabled = false;
      (document.getElementById('correct1') as HTMLButtonElement).disabled = false;
      (document.getElementById('correct2') as HTMLButtonElement).disabled = false;
      (document.getElementById('correct3') as HTMLButtonElement).disabled = false;
      (document.getElementById('correct4') as HTMLButtonElement).disabled = false;
      (document.getElementById('correct5') as HTMLButtonElement).disabled = false;
    }
  }

  addPoint(){
    this.points = this.points + 1
    if(this.points == 5){
      this.finishRound();
    } 
    console.log(this.points)
  }

  win1(){
    const box = document.getElementById('card1');
    if(box){
      box.style.backgroundColor = 'green';
    }
    this.addPoint();
    (document.getElementById('wrong1') as HTMLButtonElement).disabled = true;
    (document.getElementById('correct1') as HTMLButtonElement).disabled = true;
  }

  win2(){
    const box = document.getElementById('card2');
    if(box){
      box.style.backgroundColor = 'green';
    }
    this.addPoint();
    (document.getElementById('wrong2') as HTMLButtonElement).disabled = true;
    (document.getElementById('correct2') as HTMLButtonElement).disabled = true;
  }

  win3(){
    const box = document.getElementById('card3');
    if(box){
      box.style.backgroundColor = 'green';
    }
    this.addPoint();
    (document.getElementById('wrong3') as HTMLButtonElement).disabled = true;
    (document.getElementById('correct3') as HTMLButtonElement).disabled = true;
  }

  win4(){
    const box = document.getElementById('card4');
    if(box){
      box.style.backgroundColor = 'green';
    }
    this.addPoint();
    (document.getElementById('wrong4') as HTMLButtonElement).disabled = true;
    (document.getElementById('correct4') as HTMLButtonElement).disabled = true;
  }

  win5(){
    const box = document.getElementById('card5');
    if(box){
      box.style.backgroundColor = 'green';
    }
    this.addPoint();
    (document.getElementById('wrong5') as HTMLButtonElement).disabled = true;
    (document.getElementById('correct5') as HTMLButtonElement).disabled = true;
  }

  updateGameState(key: string,status: string): void {
    this.gameService.update(key, { state: status })
    .then(() => {
      this.actualGame.state = status;
      localStorage.setItem('actualGame', JSON.stringify(this.actualGame))
    })
    .catch(err => console.log(err));
  }

  updateGameBluePoints(key: string ,points: number): void {
    this.gameService.update(key, { round: this.actualGame.round })
      .catch(err => console.log(err));
    this.gameService.update(key, { bluePoints: points })
    .then(() => {
      this.actualGame.bluePoints = this.actualGame.bluePoints + this.points;
      localStorage.setItem('actualGame', JSON.stringify(this.actualGame))
      this.points = 0
    })
    .catch(err => console.log(err));
  }

  updateGameRedPoints(key: string ,points: number): void {
    this.gameService.update(key, { round: this.actualGame.round })
    .catch(err => console.log(err));
    this.gameService.update(key, { redPoints: points })
    .then(() => {
      this.actualGame.redPoints = this.actualGame.redPoints + this.points;
      localStorage.setItem('actualGame', JSON.stringify(this.actualGame))
      this.points = 0
    })
    .catch(err => console.log(err));

  }

}
