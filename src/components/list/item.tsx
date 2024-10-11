import React from 'react';
import { Episode } from '../../types/episode';
import { useNavigate } from 'react-router-dom';
import IconButton from '../iconButton';
import Popup from '../popup';

interface IItem {
    episode: Episode;
}

function Item({ episode }: IItem) {
    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate(`/details/${episode.id}`);
    };

    return (
        <tr className="table-row">
            <th className="py-3 px-6 text-left flex items-center">
                <div
                    className="h-20 w-10 bg-blackv cursor-pointer"
                    onClick={navigateToDetails}
                >
                    <img
                        className="h-full w-full mx-1/2"
                        src={'../favicon-192x192.png'}
                        alt={'?'}
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
