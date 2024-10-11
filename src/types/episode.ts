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


export const EpisodeForm: {
    id: keyof Episode;
    label: string;
    type: 'string' | 'number';
}[] = [
    {
        id: 'title',
        label: 'Title',
        type: 'string',
    },
    {
        id: 'series',
        label: 'Series',
        type: 'string',
    },
    {
        id: 'description',
        label: 'Description',
        type: 'string',
    },
    {
        id: 'seasonNumber',
        label: 'Season',
        type: 'number',
    },
    {
        id: 'episodeNumber',
        label: 'Episode',
        type: 'number',
    },
    {
        id: 'releaseDate',
        label: 'Release Date',
        type: 'string',
    },
    {
        id: 'imdbId',
        label: 'IMDB ID',
        type: 'string',
    },
];
