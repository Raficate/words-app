import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../interfaces/game';
import data from '../../assets/words.json';

@Component({
  selector: 'app-teams-view-alt',
  templateUrl: './teams-view-alt.page.html',
  styleUrls: ['./teams-view-alt.page.scss'],
})
export class TeamsViewAltPage implements OnInit {

  gameKey: string;
  game: Game;

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
    this.gameService.update(this.gameKey, { palabras: palabras })
      .catch(err => console.log(err));
  }

  logGame(){
    this.router.navigate(['/guess-team/'+this.game.gameId]);
  }

}
