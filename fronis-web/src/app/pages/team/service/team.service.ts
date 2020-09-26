import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TeamService {
  baseUrl: string = environment.backend.baseURL;

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl + "/v1/players");
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(this.baseUrl + "/v1/players/" + id);
  }
}

export enum PlayerPosition {
  STAFF,
  GOAL,
  FIELD
}

export type Player = {
  firstName: string,
  lastName: string,
  playerNumber: string,
  position: PlayerPosition,
  yearOfBirth: string
};
