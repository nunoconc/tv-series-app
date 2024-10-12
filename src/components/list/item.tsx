import React, { useEffect, useState } from 'react';
import { Episode } from '../../types/episode';
import { useNavigate } from 'react-router-dom';
import IconButton from '../iconButton';
import { useAppContext } from '../../context/appContext';

// This component is responsible for rendering a row in the list of episodes.

interface IItem {
    episode: Episode;
}

function Item({ episode }: IItem) {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState<string>();
    const context = useAppContext();

    useEffect(() => {
        if(episode?.imdbId) {
            context.omdbServiceInstance?.getImage(episode?.imdbId).then(setImageUrl);
        }

    }, [episode?.imdbId]);

    const navigateToDetails = () => {
        navigate(`/details/${episode.id}`);
    };

    return (
        <tr className="table-row">
            <th className="py-3 px-6 text-left flex flex-col sm:flex-row items-center">
                <div
                    className="h-10 w-10  sm:h-20 sm:w-20 aspect-square cursor-pointer mx-1/2"
                    onClick={navigateToDetails}
                >
                    <img
                        className="h-full w-full rounded"
                        alt={'TV'}
                        src={imageUrl || '../favicon-192x192.png'}
                    />
                </div>
                <span className="sm:px-6 text-left">{episode.title}</span>
            </th>
            <th className="px-6 items-center text-left">{episode.series}</th>
            <th className="px-6 items-center">
                <div className="flex justify-start">
                    <div className="flex justify-center space-x-10">
                        <IconButton icon={'info'} onClick={navigateToDetails} />
                    </div>
                </div>
            </th>
        </tr>
    );
}

export default Item;
