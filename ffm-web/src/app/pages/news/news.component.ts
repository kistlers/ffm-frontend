import {Component, OnInit} from "@angular/core";
import {NewsService} from "./service/news.service";
import {News} from "./News";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
    selector: "app-news",
    templateUrl: "./news.component.html",
    styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {

    newsList: News[];

    constructor(private newsService: NewsService, private domSanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.newsService.getAllNews().subscribe(newsList => this.newsList = newsList);
    }

    public getBase64Image(news: News): SafeUrl {
        return this.domSanitizer.bypassSecurityTrustUrl(news.image.data);
    }

    public hasImage(news: News): boolean {
        return news.image?.data?.replace(/data:image\/png;base64,/, "").length > 0;
    }
}
