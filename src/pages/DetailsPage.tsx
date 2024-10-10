import React from 'react';
import Details from '../components/details';
import { useParams } from 'react-router-dom';
import { Episode } from '../types/episode';
import Header from '../components/header';
import { useQuery } from '@apollo/client';
import { GET_EPISODE_BY_ID } from '../graphQL/queries';

function DetailsPage() {
    const id = useParams().id;

    const { data, error} = useQuery<{ getEpisodeById: Episode }>(
        GET_EPISODE_BY_ID,
        {
            variables: {
                id,
            },
        }
    );

    if (error) {
        throw error.cause;
    }

    if (data) {
        return (
            <>
                <Header />
                {data ? (
                    <Details episode={data.getEpisodeById} />
                ) : (
                    <p>loading..</p>
                )}
            </>
        );
    }
}

export default DetailsPage;
