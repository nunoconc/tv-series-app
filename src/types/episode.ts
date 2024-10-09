import { ID } from 'graphql-ws';

export type Episode = {
    id: ID;
    series: string;
    title: string;
    description: string;
    seasonNumber: number;
    episodeNumber: number;
    releaseDate: string;
    imdbId: string;
};
