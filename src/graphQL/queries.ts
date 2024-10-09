import { gql } from '@apollo/client';

export const LIST_EPISODES = gql`
    query ListEpisodes {
        listEpisodes {
            id
            series
            title
            imdbId
        }
    }
`;

export const LIST_EPISODES_SEARCH = gql`
    query ListEpisodes($search: String!) {
        listEpisodes(search: $search) {
            id
            series
            title
            imdbId
        }
    }
`;

export const GET_EPISODE_BY_ID = gql`
    query GetEpisodeById($id: String!) {
        getEpisodeById(episodeId: $id) {
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
