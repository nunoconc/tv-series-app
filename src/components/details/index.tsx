import React from 'react';
import { Episode } from '../../types/episode';

interface IDetails {
    episode: Episode;
}

function IDetails({ episode }: IDetails) {
    return (
        <div className="container flex flex-col text-center">
            <h2 className="text-4xl font-bold">{episode.title}</h2>
            <h3 className="text-3xl">{episode.series}</h3>
            <p>{episode.description}</p>
            <p>{episode.seasonNumber}</p>
            <p>{episode.episodeNumber}</p>
            <p>{episode.releaseDate}</p>
            <p>{episode.imdbId}</p>
        </div>
    );
}

export default IDetails;
