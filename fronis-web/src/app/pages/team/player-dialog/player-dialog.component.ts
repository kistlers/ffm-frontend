import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Player } from "../types/Player";

@Component({
    selector: "app-player-dialog",
    templateUrl: "./player-dialog.component.html",
    styleUrls: ["./player-dialog.component.css"]
})
export class PlayerDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<PlayerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: PlayerDialogData) { }

    ngOnInit(): void {
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}

export interface PlayerDialogData {
    player: Player;
}
