import {Component, OnInit} from "@angular/core";
import {Sponsor} from "./Sponsor";
import {SponsorService} from "./service/sponsor.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
    selector: "app-sponsoren",
    templateUrl: "./sponsoren.component.html",
    styleUrls: ["./sponsoren.component.css"]
})
export class SponsorenComponent implements OnInit {

    sponsors: Sponsor[];

    constructor(private sponsorService: SponsorService, private domSanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.sponsorService.getAllSponsors().subscribe(sponsors => {
            this.sponsors = sponsors;
        });
    }

    getBase64Image(sponsor: Sponsor): SafeUrl {
        return this.domSanitizer.bypassSecurityTrustUrl(sponsor.image.data);
    }

    public hasImage(sponsor: Sponsor): boolean {
        return sponsor.image?.data?.replace(/data:image\/png;base64,/, "").length > 0;
    }
}
