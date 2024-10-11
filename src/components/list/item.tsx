import React, { useEffect, useState } from 'react';
import { Episode } from '../../types/episode';
import { useNavigate } from 'react-router-dom';
import IconButton from '../iconButton';
import { useAppContext } from '../../context/appContext';

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
            <th className="py-3 px-6 text-left flex items-center">
                <div
                    className="h-20 w-20 bg-blackv cursor-pointer"
                    onClick={navigateToDetails}
                >
                    <img
                        className="h-full w-full mx-1/2"
                        alt={'TV'}
                        src={imageUrl || '../favicon-192x192.png'}
                    />
                </div>
                <span className="px-6 text-left">{episode.title}</span>
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
