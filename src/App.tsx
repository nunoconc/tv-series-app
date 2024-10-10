import React from 'react';
import List from './components/list';
import { useQuery } from '@apollo/client';
import { LIST_EPISODES, LIST_EPISODES_SEARCH } from './graphQL/queries';
import { Episode } from './types/episode';
import Header from './components/header';

function App() {
    const [search, setSearch] = React.useState('');

    const { data, error, loading} = useQuery<{listEpisodes: Episode[]}>(
        search ? LIST_EPISODES_SEARCH : LIST_EPISODES,{
        variables: {
            search,
        },
    });

    const renderList = () => {
        if(loading) {
            return <div>Loading...</div>;
        }
        else if(error) {
            return <div>Error...</div>;
        } else {
            return <List episodes={data?.listEpisodes || []} />;
        }
    };

    return (
        <div>
            <Header callback={setSearch}/>
            {renderList()}
        </div>
    );
}

export default App;
