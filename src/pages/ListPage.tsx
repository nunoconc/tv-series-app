import React from 'react';
import List from '../components/list';
import { useQuery } from '@apollo/client';
import { LIST_EPISODES, LIST_EPISODES_SEARCH } from '../graphQL/queries';
import { Episode } from '../types/episode';
import Header from '../components/header';
import Loading from '../components/loading';
import Error from '../components/error';

function ListPage() {
    const [search, setSearch] = React.useState('');

    const { data, error, loading } = useQuery<{ listEpisodes: Episode[] }>(
        search ? LIST_EPISODES_SEARCH : LIST_EPISODES,
        {
            variables: {
                search,
            },
        }
    );

    const renderList = () => {
        if (error) {
            console.log(error.cause);
            return <Error message={error.message} />;
        }

        if (loading) {
            return <Loading/>;
        }

        return <List episodes={data?.listEpisodes || []} />;
    };

    return (
        <>
            <Header callback={setSearch}/>
            {renderList()}
        </>
    );
}

export default ListPage;
