import { Component, HostListener, Input, OnInit } from "@angular/core";
import { Player, PlayerImageContainer } from "../types/Player";

@Component({
  selector: "app-player-row",
  templateUrl: "./player-row.component.html",
  styleUrls: ["./player-row.component.css"]
})
export class PlayerRowComponent implements OnInit {

  @Input() player: Player;
  base64Image: string;

  collapsed = false;

  constructor() { }

  ngOnInit(): void {
    const playerImageContainer: PlayerImageContainer = JSON.parse(this.player.image);
    this.base64Image = playerImageContainer.data;
  }

  @HostListener("click", ["$event"]) onRowClick(): void {
    this.collapsed = !this.collapsed;
  }
}
