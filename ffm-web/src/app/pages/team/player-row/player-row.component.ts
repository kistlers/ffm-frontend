import {Component, HostListener, Input, OnInit} from "@angular/core";
import {Player} from "../Player";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: "app-player-row",
    templateUrl: "./player-row.component.html",
    styleUrls: ["./player-row.component.css"],
    animations: [
        trigger("rotate180", [
            state("default", style({transform: "rotate(0)"})),
            state("open", style({
                transform: "rotate(180deg)"
            })),
            transition("open => default", animate("250ms ease-out")),
            transition("default => open", animate("250ms ease-in"))
        ]),
        trigger("expandRow", [
            state("default", style({height: 0})),
            state("open", style({
                height: "*",
                background: "#ffffff",
                padding: ".75rem",
                "border-bottom": "1px solid #cccccc"
            })),
            transition("open => default", animate("250ms ease-out")),
            transition("default => open", animate("250ms ease-in"))
        ])
    ]
})
export class PlayerRowComponent implements OnInit {

    @Input() player: Player;

    expanded = false;
    state: "default" | "open" = "default";

    constructor(private domSanitizer: DomSanitizer) { }

    @HostListener("click", ["$event"]) onRowClick(): void {
        this.state = (this.state === "default" ? "open" : "default"
        );
        this.expanded = !this.expanded;
    }

    ngOnInit(): void {
    }

    getBase64Image(): SafeUrl {
        return this.domSanitizer.bypassSecurityTrustUrl(this.player.image.data);
    }

    public hasImage(): boolean {
        return this.player.image?.data?.replace(/data:image\/png;base64,/, "").length > 0;
    }
}
