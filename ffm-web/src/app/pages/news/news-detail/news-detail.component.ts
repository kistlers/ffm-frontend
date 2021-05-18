import {Component, OnInit} from "@angular/core";
import {NewsService} from "../service/news.service";
import {ActivatedRoute} from "@angular/router";
import {News} from "../News";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
    selector: "app-news-detail",
    templateUrl: "./news-detail.component.html",
    styleUrls: ["./news-detail.component.css"]
})
export class NewsDetailComponent implements OnInit {

    newsId: number;
    news: News;

    constructor(private route: ActivatedRoute, private domSanitizer: DomSanitizer, private newsService: NewsService) { }

    ngOnInit(): void {
        this.newsId = Number(this.route.snapshot.paramMap.get("id"));
        this.newsService.getNewsById(this.newsId).subscribe(news => this.news = news);
    }

    public getBase64Image(news: News): SafeUrl {
        return this.domSanitizer.bypassSecurityTrustUrl(news.image.data);
    }

    public hasImage(news: News): boolean {
        return news.image?.data?.replace(/data:image\/png;base64,/, "").length > 0;
    }
}
