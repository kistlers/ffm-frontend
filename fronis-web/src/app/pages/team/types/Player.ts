export type Player = {
    firstName: string,
    lastName: string,
    playerNumber: string,
    position: PlayerPosition,
    yearOfBirth: string
};

export type PlayerPosition = "STAFF" | "GOAL" | "FIELD";
