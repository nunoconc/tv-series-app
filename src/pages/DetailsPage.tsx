import React from 'react';
import Details from '../components/details';
import { useParams } from 'react-router-dom';
import { Episode } from '../types/episode';
import Header from '../components/header';
import { useQuery } from '@apollo/client';
import { GET_EPISODE_BY_ID } from '../graphQL/queries';
import Loading from '../components/loading';
import Error from '../components/error';

// This component is responsible for rendering the details of an episode.
// Used in the route '/details/:id'.
function DetailsPage() {
    const id = useParams().id;

    const { data, error, loading } = useQuery<{ getEpisodeById: Episode }>(
        GET_EPISODE_BY_ID,
        {
            variables: {
                id,
            },
        }
    );

    const renderDetails = () => {
        if (error) {
            console.log(error.cause);
            return <Error message={error.message} />;
        }

        if (loading) {
            return <Loading />;
        }

        return <Details episode={data?.getEpisodeById} />;
    };

    return (
        <>
            <Header />
            {renderDetails()}
        </>
    );
}

export default DetailsPage;
