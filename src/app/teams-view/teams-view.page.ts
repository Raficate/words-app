import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../interfaces/game';
import data from '../../assets/words.json';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.page.html',
  styleUrls: ['./teams-view.page.scss'],
})
export class TeamsViewPage implements OnInit {

  gameKey: string;
  game: Game;
  team = localStorage.getItem('team')

  constructor(private gameService: GameService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.gameKey = localStorage.getItem('gameKey')!;
    let palabra1 = data.words[this.getRandomInt(data.words.length)]
    let palabra2 = data.words[this.getRandomInt(data.words.length)]
    let palabra3 = data.words[this.getRandomInt(data.words.length)]
    let palabra4 = data.words[this.getRandomInt(data.words.length)]
    let palabra5 = data.words[this.getRandomInt(data.words.length)]
    let palabras = [palabra1, palabra2, palabra3, palabra4, palabra5]
    this.updateWords(palabras)
    this.getGamePrueba(this.gameKey);
    

  }


  getGamePrueba(key: string){
     this.gameService.get(key).valueChanges().subscribe(data => {
      this.game = data as Game;
      localStorage.setItem('actualGame', JSON.stringify(data))
    })
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  updateWords(palabras: string[]){
    this.gameService.update(this.gameKey, { actualWords: palabras })
      .catch(err => console.log(err));
    this.gameService.update(this.gameKey, { remainingWords: 25 })
      .catch(err => console.log(err));
  }

  logGame(){
    if((this.team == 'blue' && this.game.state == 'blueRound') || (this.team == 'red' && this.game.state == 'redRound')){
      console.log(this.team)
      console.log(this.game.state)
      this.router.navigate(['/guess-team/'+this.game.gameId]);
    } else {
      console.log(this.team)
      console.log(this.game.state)
      this.router.navigate(['/count-team/'+this.game.gameId]);
    }
    
  }
}
