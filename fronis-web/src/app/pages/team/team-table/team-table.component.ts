import { Component, Input, OnInit } from "@angular/core";
import { Player } from "../service/team.service";

@Component({
  selector: "app-team-table",
  templateUrl: "./team-table.component.html",
  styleUrls: ["./team-table.component.css"],
})
export class TeamTableComponent implements OnInit {
  @Input() position: string;
  @Input() players: Player[];

  constructor() { }

  ngOnInit(): void {}
}
