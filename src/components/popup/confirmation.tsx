import React from 'react';
import IconButton from '../iconButton';
import { useMutation } from '@apollo/client';
import { DELETE_EPISODE } from '../../graphQL/mutations';
import { useNavigate } from 'react-router-dom';

interface IDelete {
    id: string
    onCancel: () => void;
}

function Confirmation({ id, onCancel }: IDelete) {
    const navigate = useNavigate();
    const [deleteEpisode] = useMutation(DELETE_EPISODE);

    const handleDeleteMutation = () => {
        deleteEpisode({
            variables: {
                id,
            },
        }).then(() => {
            navigate('/');
        })
        .catch((error) => {
            alert('Something went wrong, please try again');
            console.log(error);
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
        </div>
    );
}

export default Confirmation;
