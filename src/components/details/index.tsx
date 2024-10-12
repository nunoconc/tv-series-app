import React, { useEffect, useState } from 'react';
import { Episode } from '../../types/episode';
import IconButton from '../iconButton';
import Popup from '../popup';
import { useAppContext } from '../../context/appContext';

interface IDetails {
    episode?: Episode;
}

function IDetails({ episode }: IDetails) {
    const [imageUrl, setImageUrl] = useState<string>();
    const context = useAppContext();

    useEffect(() => {
        if(episode?.imdbId) {
            context.omdbServiceInstance?.getImage(episode?.imdbId).then(setImageUrl);
        }

    }, [episode?.imdbId]);

    if(!episode) {
        return (
            <div className="w-11/12 bg-white shadow-md rounded-lg overflow-hidden mt-10 mx-auto">
                <h1 className="text-2xl text-center p-6">No episode found</h1>
            </div>
        );
    }
    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-4">
                    <img
                        className="h-full w-full object-cover rounded-lg shadow-md"
                        alt={'Movie Poster'}
                        src={imageUrl || '../favicon-512x512.png'}
                    />
                </div>
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
                    <div className="flex justify-start space-x-4">
                        <Popup type={'form'} episode={episode}>
                            <IconButton icon={'update'} />
                        </Popup>
                        <Popup type={'confirmation'} episode={episode}>
                            <IconButton icon={'remove'} />
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IDetails;
