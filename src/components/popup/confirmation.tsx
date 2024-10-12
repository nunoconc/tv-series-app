import React from 'react';
import IconButton from '../iconButton';
import { useMutation } from '@apollo/client';
import { DELETE_EPISODE } from '../../graphQL/mutations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../loading';

// This component is responsible for rendering the confirmation popup used to delete an episode.

interface IDelete {
    id: string;
    onCancel: () => void;
}

function Confirmation({ id, onCancel }: IDelete) {
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();
    const [deleteEpisode] = useMutation(DELETE_EPISODE);

    const handleDeleteMutation = () => {
        setLoading(true);
        deleteEpisode({
            variables: {
                id,
            },
        })
            .then(async () => {
                navigate('/list');
            })
            .catch((error) => {
                toast('Something went wrong: Please try again!', {
                    type: 'error',
                });
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
                onCancel();
            });
    };

    return (
        <div className="w-full h-full p-6 space-y-4 bg-white">
            <label className="block text-lg font-bold mb-10">
                Please confirm if you want to remove this episode?
            </label>
            <div className="flex justify-between">
                <IconButton icon={'cancel'} onClick={onCancel} />
                <IconButton icon={'confirm'} onClick={handleDeleteMutation} />
            </div>
            {loading && <Loading />}
        </div>
    );
}

export default Confirmation;
