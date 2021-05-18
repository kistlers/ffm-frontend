import {Component, Input, OnInit} from "@angular/core";
import {Player} from "../Player";

@Component({
    selector: "app-players-table",
    templateUrl: "./players-table.component.html",
    styleUrls: ["./players-table.component.css"]
})
export class PlayersTableComponent implements OnInit {
    @Input() position: string;
    @Input() players: Player[];

    constructor() { }

    ngOnInit(): void {}
}
