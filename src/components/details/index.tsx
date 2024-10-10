import React from 'react';
import { Episode } from '../../types/episode';
import Menu from '../menu';

interface IDetails {
    episode: Episode;
}

function IDetails({ episode }: IDetails) {
    const handleMenuClick = (action: string) => {
        if (action === 'edit') {
            console.log('Edit');
        } else {
            console.log('Delete');
        }
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-4">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">
                        {episode.title}
                    </h2>
                    <h3 className="text-2xl text-gray-600 mb-4">
                        {episode.series}
                    </h3>
                    <p className="text-lg mb-4">
                        <strong>Description:</strong> {episode.description}
                    </p>
                    <p className="text-lg mb-4">
                        <strong>Season:</strong> {episode.seasonNumber}
                    </p>
                    <p className="text-lg mb-4">
                        <strong>Episode:</strong> {episode.episodeNumber}
                    </p>
                    <p className="text-lg mb-4">
                        <strong>Release Date:</strong> {episode.releaseDate}
                    </p>
                    <p className="text-lg mb-4">
                        <strong>IMDB ID:</strong> {episode.imdbId}
                    </p>
                    <div className="flex justify-start">
                        <Menu callback={handleMenuClick} episode={episode} />
                    </div>
                </div>
                <div className="md:w-1/2 p-4">
                    <img
                        className="h-full w-full object-cover rounded-lg shadow-md"
                        src={'../favicon-192x192.png'}
                        alt={'Movie Poster'}
                    />
                </div>
            </div>
        </div>
    );
}

export default IDetails;
