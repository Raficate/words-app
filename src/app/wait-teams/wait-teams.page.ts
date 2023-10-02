import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService} from '../services/game.service';
import { Game } from '../interfaces/game';
import { map } from 'rxjs/operators'
import { doc, onSnapshot } from "firebase/firestore";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-wait-teams',
  templateUrl: './wait-teams.page.html',
  styleUrls: ['./wait-teams.page.scss'],
})
export class WaitTeamsPage implements OnInit {

  games?: Game[]; 
  gameKey: string = '' ;
  actualGame: Game;
  documentId: string;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.documentId = this.route.snapshot.params['id'];
    this.retrieveGames();
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
        if(this.games[i].gameId == this.documentId && this.games[i].state == 'teamsReady'){
          this.router.navigate(['/teams-view/' + this.documentId])
        }
      }   
    });
  }

};

