import React from 'react';
import { Episode } from '../../types/episode';
import Item from './item';

interface IList {
    episodes: Episode[];
}

function List({ episodes }: IList) {
    return (
        <table className="w-11/12 bg-white shadow-md rounded-lg overflow-hidden mt-10 mx-auto">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="py-3 px-6 text-left font-semibold">
                        Title
                    </th>
                    <th className="py-3 px-6 text-left font-semibold">Series</th>
                    <th className="py-3 px-6 text-left font-semibold w-10 text-center">
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
