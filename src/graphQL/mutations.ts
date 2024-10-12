import { gql } from '@apollo/client';

// This file contains the GraphQL mutations used in the application.
export const CREATE_EPISODE = gql`
    mutation CreateEpisode($episode: EpisodeInput!) {
        createEpisode(episode: $episode) {
            id
            series
            title
            description
            seasonNumber
            episodeNumber
            releaseDate
            imdbId
        }
    }
`;

export const UPDATE_EPISODE = gql`
    mutation UpdateEpisode($episode: UpdateEpisodeInput!) {
        updateEpisode(episode: $episode) {
            id
            series
            title
            description
            seasonNumber
            episodeNumber
            releaseDate
            imdbId
        }
    }
`;

export const DELETE_EPISODE = gql`
    mutation DeleteEpisode($id: String!) {
        deleteEpisode(episodeId: $id)
    }
`;
