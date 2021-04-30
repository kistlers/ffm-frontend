import {ImageContainer} from "../../shared/types/Common";

export type Player = {
    firstName: string;
    lastName: string;
    playerNumber: string;
    position: PlayerPosition;
    yearOfBirth: string;
    image: ImageContainer;
};

export type PlayerPosition = "STAFF" | "GOAL" | "FIELD";
