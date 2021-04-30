import {Component, OnInit} from "@angular/core";
import {NewsService} from "./service/news.service";
import {News} from "./News";

@Component({
    selector: "app-news",
    templateUrl: "./news.component.html",
    styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {

    news: News[];

    constructor(private newsService: NewsService) { }

    ngOnInit(): void {
        this.newsService.getAllNews().subscribe(sponsors => {
            this.news = sponsors;
        });
    }
}
