import React, { useMemo } from 'react';
import { Episode } from '../../types/episode';
import Menu from '../menu';

interface IItem {
    episode: Episode;
}

function Item({ episode }: IItem) {
    const MemoizedDropdown = useMemo(() => {
        return (
            <Menu
                options={[
                    {
                        label: 'Edit',
                        action: () => console.log('Edit'),
                    },
                    {
                        label: 'Delete',
                        action: () => console.log('Delete'),
                    },
                ]}
            />
        );
    }, []);

    return (
        <tr className="table-row">
            <th className="py-3 px-6 text-left flex items-center">
                <div className="h-20 w-10 bg-black">
                    <img
                        className="h-full w-full mx-1/2"
                        src={'./favicon-192x192.png'}
                        alt={'?'}
                    />
                </div>
                <span className="px-6 text-left">{episode.series}</span>
            </th>
            <th className="px-6 items-center text-left">{episode.title}</th>
            <th className="px-6 items-center">{MemoizedDropdown}</th>
        </tr>
    );
}

export default Item;
