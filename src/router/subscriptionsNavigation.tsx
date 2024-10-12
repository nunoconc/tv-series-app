import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useSubscription } from '@apollo/client';
import { ON_CREATE_EPISODE, ON_DELETE_EPISODE, ON_UPDATE_EPISODE } from '../graphQL/subscriptions';

import 'react-toastify/dist/ReactToastify.css';

// This component is responsible for handling the subscriptions of the application to the GraphQL API.
// Also notifies the user when an episode is created, updated or removed.
function SubscriptionsNavigation() {
    const { data: create } = useSubscription(ON_CREATE_EPISODE);
    const { data: update } = useSubscription(ON_UPDATE_EPISODE);
    const { data: remove } = useSubscription(ON_DELETE_EPISODE);


    const notify = (id: string, type: 'create' | 'update' | 'remove') => {
        toast(`Episode ${type}: ${id}`, {
            type: 'info',
            onClick: () => {
                if(type !== 'remove') {
                    return (window.location.href = `/details/${id}`);
                }
            },
        });
    };

    useEffect(() => {
        const id = create?.onCreateEpisode?.id;
        if (id) {
            notify(id, 'create');
        }
    }, [create]);

    useEffect(() => {
        const id = update?.onUpdateEpisode?.id;
        if (id) {
            notify(id, 'update');
        }
    }, [update]);

    useEffect(() => {
        const id = remove?.onDeleteEpisode?.id;
        if (id) {
            notify(id, 'remove');
        }
    }, [remove]);

    return <ToastContainer />;
}

export default SubscriptionsNavigation;
