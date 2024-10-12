import { ID } from 'graphql-ws';

// Episode type (used to define the episode object)
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

// OmdbEpisode type (used to parse the OMDB API response)
export type OmdbEpisode = {
    Series: string;
    Title: string;
    Plot: string;
    Season: number;
    Episode: number;
    Released: string;
    imdbID: string;
};

// EpisodeForm type (used to generate the form fields)
export const EpisodeForm: {
    key: keyof Episode;
    label: string;
    type: 'string' | 'number';
}[] = [
    {
        key: 'title',
        label: 'Title',
        type: 'string',
    },
    {
        key: 'series',
        label: 'Series',
        type: 'string',
    },
    {
        key: 'description',
        label: 'Description',
        type: 'string',
    },
    {
        key: 'seasonNumber',
        label: 'Season',
        type: 'number',
    },
    {
        key: 'episodeNumber',
        label: 'Episode',
        type: 'number',
    },
    {
        key: 'releaseDate',
        label: 'Release Date',
        type: 'string',
    },
    {
        key: 'imdbId',
        label: 'IMDB ID',
        type: 'string',
    },
];
