import { Component, OnInit } from "@angular/core";
import { TeamService } from "./service/team.service";
import { groupBy } from "lodash-es";
import { Player, PlayerPosition } from "./types/Player";

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
        this.teamService.getAllPlayers().subscribe(players => {
            const groupedPlayers = groupBy(players, "position");

            this.playersGoal = {position: "GOAL", players: groupedPlayers.GOAL};
            this.playersField = {position: "FIELD", players: groupedPlayers.FIELD};
            this.playersStaff = {position: "STAFF", players: groupedPlayers.STAFF};
        });
    }
}

export type PlayerGroup = { position: PlayerPosition, players: Player[] };
