import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sponsor} from "../Sponsor";

@Injectable({
    providedIn: "root"
})
export class SponsorService {
    baseUrl: string = environment.backend.baseURL;

    constructor(private http: HttpClient) { }

    getAllSponsors(): Observable<Sponsor[]> {
        return this.http.get<Sponsor[]>(this.baseUrl + "/v1/sponsors");
    }
}
