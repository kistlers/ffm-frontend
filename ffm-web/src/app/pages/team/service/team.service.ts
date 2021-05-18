import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../Player";

@Injectable({
    providedIn: "root"
})
export class TeamService {
    baseUrl: string = environment.backend.baseURL;

    constructor(private http: HttpClient) { }

    getAllPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(`${this.baseUrl}/v1/players`);
    }
}
