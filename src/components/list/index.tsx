import React from 'react';
import { Episode } from '../../types/episode';

interface IList {
    episodes: Episode[];
}

function List({ episodes }: IList) {
    console.log(episodes);

    return (
        <table className="table-auto w-full border-collapse">
            <thead>
                <tr className="table-row">
                    <th className="table-cell">Title</th>
                    <th className="table-cell">Series</th>
                    <th className="table-cell">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-row">
                    <td className="table-cell">test</td>
                    <td className="table-cell">test</td>
                    <td className="table-cell">test</td>
                </tr>
            </tbody>
        </table>
    );
}

export default List;
