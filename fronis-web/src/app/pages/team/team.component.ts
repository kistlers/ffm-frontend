import { Component, OnInit } from "@angular/core";
import { Player, PlayerPosition, TeamService } from "./service/team.service";
import { groupBy } from "lodash-es";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  playersGoal: PlayerGroup;
  playersField: PlayerGroup;
  playersStaff: PlayerGroup;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getAllPlayers().subscribe((players => {
      const groupedPlayers = groupBy(players, "position");

      this.playersGoal = {position: PlayerPosition.GOAL, players: groupedPlayers.GOAL};
      this.playersField = {position: PlayerPosition.FIELD, players: groupedPlayers.FIELD};
      this.playersStaff = {position: PlayerPosition.STAFF, players: groupedPlayers.STAFF};
    }));
  }

  playerPosition2String(position: PlayerPosition): string {
    switch (position) {
      case PlayerPosition.FIELD:
        return "Feldspieler";
      case PlayerPosition.GOAL:
        return "Torhüter";
      case PlayerPosition.STAFF:
        return "Staff";
    }
  }
}

export type PlayerGroup = { position: PlayerPosition, players: Player[] };
