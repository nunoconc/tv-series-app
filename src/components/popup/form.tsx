import React, { useState } from 'react';
import { Episode, EpisodeForm } from '../../types/episode';
import IconButton from '../iconButton';
import { useMutation } from '@apollo/client';
import { CREATE_EPISODE, UPDATE_EPISODE } from '../../graphQL/mutations';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import Loading from '../loading';
import { wait } from '@apollo/client/testing';
import lodash from 'lodash';
import { toast } from 'react-toastify';

interface IForm {
    episode?: Episode;
    onCancel: () => void;
}

function Form({ episode, onCancel }: IForm) {
    const [formEpisode, setFormEpisode] = useState(episode);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const context = useAppContext();

    const handleOmdb = async () => {
        const imdbId = (
            document.getElementById('input_imdbId') as HTMLInputElement
        ).value;
        if (imdbId) {
            // improve user experience felling
            setLoading(true);
            await wait(500);
            context.omdbServiceInstance
                ?.getEpisode(imdbId)
                .then((ep) => setFormEpisode(lodash.mergeWith(formEpisode, ep)))
                .finally(() => setLoading(false));
        }
    };

    const [createOrUpdate] = useMutation(
        episode ? UPDATE_EPISODE : CREATE_EPISODE
    );

    const handleSubmit = async (event: React.FormEvent) => {
        setLoading(true);

        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        const newEpisode = EpisodeForm.reduce(
            (acc, form) => {
                if (form.type === 'number') {
                    acc = {
                        ...acc,
                        [form.key]: parseInt(formData.get(form.key) as string),
                    };
                } else {
                    acc = {
                        ...acc,
                        [form.key]: formData.get(form.key) as string,
                    };
                }
                return acc;
            },
            {
                id: episode?.id || Date.now().toString(36),
            } as Episode
        );

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
                toast('Something went wrong: Please try again!', {
                    type: 'error',
                });
                console.log(error.message);
            })
            .finally(() => setLoading(false));
    };

    return (
        <form className="w-full h-full p-6 space-y-3" onSubmit={handleSubmit}>
            <label className="block text-lg font-bold">
                Please insert all the episodes information bellow:
            </label>
            {EpisodeForm.map((form) => (
                <div key={loading ? `loading${form.key}` : form.key}>
                    <label className="block text-lg mb-2" htmlFor={form.key}>
                        <strong>{form.label}:</strong>
                    </label>
                    <input
                        id={`input_${form.key}`}
                        name={form.key}
                        type={form.type}
                        required
                        defaultValue={formEpisode?.[form.key]}
                        onChange={() =>
                            setFormEpisode({
                                ...formEpisode,
                                [form.key]: (
                                    document.getElementById(
                                        `input_${form.key}`
                                    ) as HTMLInputElement
                                ).value,
                            } as Episode)
                        }
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
