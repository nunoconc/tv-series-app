import React from 'react';
import { Episode } from '../../types/episode';
import Menu from '../menu';
import { useNavigate } from 'react-router-dom';

interface IItem {
    episode: Episode;
}

function Item({ episode }: IItem) {
    const navigate = useNavigate();

    const handleMenuClick = (action: string) => {
        if (action === 'edit') {
            console.log('Edit');
        } else {
            console.log('Delete');
        }
    };

    return (
        <tr className="table-row">
            <th className="py-3 px-6 text-left flex items-center">
                <div
                    className="h-20 w-10 bg-blackv cursor-pointer"
                    onClick={() => navigate(`/details/${episode.id}`)}
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
                <Menu callback={handleMenuClick} />
            </th>
        </tr>
    );
}

export default Item;
