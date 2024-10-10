import React from 'react';
import { Episode } from '../../types/episode';

interface IItem {
    episode: Episode;
}

function Item({ episode }: IItem) {
    return (
        <>
            <p>{episode.title}</p>
            <p>{episode.series}</p>
        </>
    );
}

export default Item;
