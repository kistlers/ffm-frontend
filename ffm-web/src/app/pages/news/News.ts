import {ImageContainer} from "../../shared/types/Common";

export type News = {
    title: string;
    text: string;
    publishTimestamp: number;
    image: ImageContainer;
};
