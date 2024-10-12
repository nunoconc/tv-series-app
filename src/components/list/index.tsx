import React from 'react';
import { Episode } from '../../types/episode';
import Item from './item';

// This component is responsible for rendering the list of episodes.

interface IList {
    episodes: Episode[];
}

function List({ episodes }: IList) {

    if(!episodes.length) {
        return (
            <div className="w-11/12 bg-white shadow-md rounded-lg overflow-hidden mt-10 mx-auto">
                <h1 className="text-2xl text-center p-6">No episodes found</h1>
            </div>
        );
    }

    return (
        <table className="w-11/12 bg-white shadow-md rounded-lg overflow-hidden mt-10 mx-auto">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="py-3 px-6 text-left font-semibold">
                        Title
                    </th>
                    <th className="py-3 px-6 text-left font-semibold">Series</th>
                    <th className="py-3 px-6 text-left font-semibold w-10">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {episodes.map((episode) => (
                    <Item key={episode.id} episode={episode}/>
                ))}
            </tbody>
        </table>
    );
}

export default List;
