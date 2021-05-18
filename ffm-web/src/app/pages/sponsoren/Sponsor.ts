export type Sponsor = {
    name: string;
    url: string;
    ordering: number;
    image: SponsorImageContainer;
};

export type SponsorImageContainer = {
    data: string;
};
