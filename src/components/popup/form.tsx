import React from 'react';
import { Episode, EpisodeForm } from '../../types/episode';
import IconButton from '../iconButton';
import { useMutation } from '@apollo/client';
import { CREATE_EPISODE, UPDATE_EPISODE } from '../../graphQL/mutations';
import { useNavigate } from 'react-router-dom';

interface IForm {
    episode?: Episode;
    onCancel: () => void;
}

function Form({ episode, onCancel }: IForm) {
    const navigate = useNavigate();
    const [createOrUpdate] = useMutation(
        episode ? UPDATE_EPISODE : CREATE_EPISODE
    );

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        const newEpisode = {
            id: episode?.id || Date.now().toString(36),
            title: formData.get('title') as string,
            series: formData.get('series') as string,
            description: formData.get('description') as string,
            seasonNumber: parseInt(formData.get('seasonNumber') as string),
            episodeNumber: parseInt(formData.get('episodeNumber') as string),
            releaseDate: formData.get('releaseDate') as string,
            imdbId: formData.get('imdbId') as string,
        };

        createOrUpdate({
            variables: {
                episode: newEpisode,
            },
        })
            .then(() => {
                navigate(`/details/${newEpisode.id}`);
                onCancel();
            })
            .catch((error) => {
                alert('Something went wrong, please try again');
                console.log(error);
            });
    };

    return (
        <form
            className="w-full h-full p-6 space-y-6 bg-white"
            onSubmit={handleSubmit}
        >
            <label className="block text-lg font-bold mb-4">
                Please insert all the episodes information bellow:
            </label>
            {EpisodeForm.map((form) => (
                <div key={form.id}>
                    <label className="block text-lg mb-2" htmlFor={form.id}>
                        <strong>{form.label}:</strong>
                    </label>
                    <input
                        id={form.id}
                        name={form.id}
                        type={form.type}
                        required
                        defaultValue={episode?.[form.id]}
                        className="w-full p-3 border rounded"
                    />
                </div>
            ))}
            <div className="flex justify-between pt-10">
                <IconButton icon={'cancel'} onClick={onCancel} />
                <IconButton icon={'confirm'} submit />
            </div>
        </form>
    );
}

export default Form;
