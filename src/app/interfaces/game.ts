export interface Game {
    key?: string | null;
    gameId: string,
    state: string,
    round: number,
    bluePoints: number,
    redPoints: number,
    totalRounds: number,
    blueTeam: string[],
    redTeam: string[],
    actualWords: string[],
    remainingWords: number
}