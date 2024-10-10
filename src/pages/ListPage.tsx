import React from 'react';
import List from '../components/list';
import { useQuery } from '@apollo/client';
import { LIST_EPISODES, LIST_EPISODES_SEARCH } from '../graphQL/queries';
import { Episode } from '../types/episode';
import Header from '../components/header';

function ListPage() {
    const [search, setSearch] = React.useState('');

    const { data, error } = useQuery<{ listEpisodes: Episode[] }>(
        search ? LIST_EPISODES_SEARCH : LIST_EPISODES,
        {
            variables: {
                search,
            },
        }
    );

    if (error) {
        throw error;
    }

    return (
        <>
            <Header callback={setSearch} />
            {data ? <List episodes={data.listEpisodes} /> : <p>loading..</p>}
        </>
    );
}

export default ListPage;
