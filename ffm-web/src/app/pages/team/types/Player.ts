export type Player = {
    firstName: string,
    lastName: string,
    playerNumber: string,
    position: PlayerPosition,
    yearOfBirth: string,
    image: PlayerImageContainer
};

export type PlayerImageContainer = {
    data: string
};

export type PlayerPosition = "STAFF" | "GOAL" | "FIELD";
