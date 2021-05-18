import {ImageContainer} from "../../shared/types/Common";

export type News = {
    id: number;
    title: string;
    text: string;
    publishTimestamp: number;
    image: ImageContainer;
};
