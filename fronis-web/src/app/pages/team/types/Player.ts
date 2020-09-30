export type Player = {
    firstName: string,
    lastName: string,
    playerNumber: string,
    position: PlayerPosition,
    yearOfBirth: string,
    image: string
};

export type PlayerImageContainer = {
    data: string
};

export type PlayerPosition = "STAFF" | "GOAL" | "FIELD";
