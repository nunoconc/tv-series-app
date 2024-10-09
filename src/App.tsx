import React, { useEffect } from 'react';
import './App.css';
import { useMutation, useSubscription } from '@apollo/client';
import {
    CREATE_EPISODE,
    DELETE_EPISODE,
    UPDATE_EPISODE,
} from './graphQL/mutations';
import {
    ON_CREATE_EPISODE,
    ON_DELETE_EPISODE,
    ON_UPDATE_EPISODE,
} from './graphQL/subscriptions';
import { Episode } from './types/episode';

const episode = {
    id: 'test',
    series: 'test',
    title: 'test',
    description: 'test',
    seasonNumber: 123,
    episodeNumber: 123,
    releaseDate: 'test',
    imdbId: 'test',
};

function App() {
    const [createEpisode] = useMutation(CREATE_EPISODE, {
        variables: {
            episode,
        },
    });

    const [updateEpisode] = useMutation(UPDATE_EPISODE, {
        variables: {
            episode,
        },
    });

    const [deleteEpisode] = useMutation(DELETE_EPISODE, {
        variables: {
            id: episode.id,
        },
    });

    const { loading, data, error } = useSubscription<{
        onCreateEpisode: Episode;
    }>(ON_CREATE_EPISODE);

    useSubscription<{
        onCreateEpisode: Episode;
    }>(ON_UPDATE_EPISODE);

    useSubscription<{
        onCreateEpisode: Episode;
    }>(ON_DELETE_EPISODE);

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>TV Series App</h1>
                <button onClick={() => createEpisode()}>Click to create</button>
                <button onClick={() => updateEpisode()}>Click to update</button>
                <button onClick={() => deleteEpisode()}>Click to delete</button>
            </header>
            <body>
                {loading && <p>...loading</p>}
                {data && (
                    <div>
                        <h2>The title </h2>
                        <h3>{data.onCreateEpisode.title}</h3>
                    </div>
                )}
                {error && <p>{error.cause?.message}</p>}
            </body>
        </div>
    );
}

export default App;
