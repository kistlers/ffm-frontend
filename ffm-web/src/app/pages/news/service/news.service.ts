import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {News} from "../News";

@Injectable({
    providedIn: "root"
})
export class NewsService {
    baseUrl: string = environment.backend.baseURL;

    constructor(private http: HttpClient) { }

    getAllNews(): Observable<News[]> {
        return this.http.get<News[]>(this.baseUrl + "/v1/news");
    }
}
