import { Episode } from '../types/episode';
import { GET_EPISODE_BY_ID, LIST_EPISODES } from '../graphQL/queries';
import graphQLService from './graphQLService';
import {
    CREATE_EPISODE,
    DELETE_EPISODE,
    UPDATE_EPISODE,
} from '../graphQL/mutations';

// Here we are testing the GraphQL service by listing, creating, updating and deleting an episode.
describe('GraphQLService - Test', () => {
    const client = graphQLService.init();

    test('Should list episodes and get the first id', async () => {
        const episode = (
            await client.query<{ listEpisodes: [Episode] }>({
                query: LIST_EPISODES,
            })
        ).data.listEpisodes[0];
        const title = (
            await client.query<{ getEpisodeById: Episode }>({
                query: GET_EPISODE_BY_ID,
                variables: { id: episode.id },
            })
        ).data.getEpisodeById.title;

        expect(title).toBe(episode.title);
    });

    test('Should create, udpate and delete episode', async () => {
        const replaceTitle = 'The second title -The Dundler Mifflin Infinity';

        const episode: Episode = {
            id: Date.now().toString(36),
            series: 'The Office',
            title: 'The Dundler Mifflin Infinity',
            description:
                'Michael Scott tries to impress a potential investor, but his antics backfire.',
            seasonNumber: 2,
            episodeNumber: 14,
            releaseDate: '2006-02-22',
            imdbId: 'tt0386676',
        };

        const createdEpisode = await client.mutate<{ createEpisode: Episode }>({
            mutation: CREATE_EPISODE,
            variables: { episode },
        });

        expect(createdEpisode.data?.createEpisode.title).toBe(episode.title);

        const updatedEpisode = await client.mutate<{ updateEpisode: Episode }>({
            mutation: UPDATE_EPISODE,
            variables: {
                episode: {
                    ...episode,
                    title: replaceTitle,
                },
            },
        });

        expect(updatedEpisode.data?.updateEpisode.title).toBe(replaceTitle);

        const deletedEpisode = await client.mutate<{ deleteEpisode: string }>({
            mutation: DELETE_EPISODE,
            variables: { id: episode.id },
        });

        expect(deletedEpisode?.data?.deleteEpisode).toBe(episode.id);

        const searchedEpisode = await client.query<{ getEpisodeById: Episode }>(
            {
                query: GET_EPISODE_BY_ID,
                variables: { id: episode.id },
            }
        );

        expect(searchedEpisode.data.getEpisodeById).toBeNull();
    });
});
