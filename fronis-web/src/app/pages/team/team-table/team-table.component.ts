import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Player } from "../types/Player";

@Component({
    selector: "app-team-table",
    templateUrl: "./team-table.component.html",
    styleUrls: ["./team-table.component.css"],
})
export class TeamTableComponent implements OnInit {
    @Input() position: string;
    @Input() players: Player[];

    constructor(public matDialog: MatDialog) { }

    ngOnInit(): void {}
}
