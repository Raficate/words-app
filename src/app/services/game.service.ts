import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private dbPath = '/games';

  gamesRef: AngularFireList<Game>;
  // gameRef: AngularFireObject<Game>;

  constructor(private db: AngularFireDatabase) {
    this.gamesRef = db.list(this.dbPath);
    // this.gameRef = db.object(this.dbPath)
   }

   getAll(): AngularFireList<Game> {
    return this.gamesRef;
  }

  get(gameKey: string): AngularFireObject<Game> {
    const gameRef = this.db.object(this.dbPath+'/'+gameKey) as AngularFireObject<Game>;
    return gameRef
  }

  // get(key: string): Promise<void> {
  //   const games = this.getAll();
  //   games.find 
  //   return this.gamesRef.update(key, value);
  // }

  create(Game: Game): any {
    return this.gamesRef.push(Game);
  }

  update(key: string, value: any): Promise<void> {
    return this.gamesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.gamesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.gamesRef.remove();
  }
}
