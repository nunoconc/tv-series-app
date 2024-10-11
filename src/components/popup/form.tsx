import React, { useState } from 'react';
import { Episode, EpisodeForm } from '../../types/episode';
import IconButton from '../iconButton';
import { useMutation } from '@apollo/client';
import { CREATE_EPISODE, UPDATE_EPISODE } from '../../graphQL/mutations';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import Loading from '../loading';

interface IForm {
    episode?: Episode;
    onCancel: () => void;
}

function Form({ episode, onCancel }: IForm) {
    const [formEpisode, setFormEpisode] = useState(episode);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const context = useAppContext();

    const handleOmdb = () => {
        const imdbId = (
            document.getElementById('input_imdbId') as HTMLInputElement
        ).value;
        if (imdbId) {
            setLoading(true);
            context.omdbServiceInstance
                ?.getEpisode(imdbId)
                .then(setFormEpisode)
                .finally(() => setLoading(false));
        }
    };

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
            className="w-full h-full p-6 space-y-3"
            onSubmit={handleSubmit}
        >
            <label className="block text-lg font-bold">
                Please insert all the episodes information bellow:
            </label>
            {EpisodeForm.map((form) => (
                <div key={form.id}>
                    <label className="block text-lg mb-2" htmlFor={form.id}>
                        <strong>{form.label}:</strong>
                    </label>
                    <input
                        id={`input_${form.id}`}
                        name={form.id}
                        type={form.type}
                        required
                        defaultValue={formEpisode?.[form.id]}
                        className="w-full p-3 border rounded"
                    />
                </div>
            ))}
            {loading ? (
                <Loading />
            ) : (
                <div className="flex justify-between pt-1">
                    <IconButton icon={'cancel'} onClick={onCancel} />
                    <IconButton icon={'download'} onClick={handleOmdb} />
                    <IconButton icon={'confirm'} submit />
                </div>
            )}
        </form>
    );
}

export default Form;
