import React from 'react';
import { deleteSVG, editSVG } from '../icons/svg';
import Popup from '../popup';
import { Episode } from '../../types/episode';


interface IMenu {
    episode?: Episode;
    // eslint-disable-next-line no-unused-vars
    callback: (action: string) => void;
}
function Menu({callback, episode}: IMenu) {

    return (
        <div className="flex justify-center space-x-10">
            <Popup episode={episode}>
                <button
                    onClick={() => callback('edit')}
                    className="p-2 rounded-md bg-gray-200 hover:bg-gray-400 shadow-md"
                >
                    {editSVG()}
                </button>
            </Popup>
            <button
                onClick={() => callback('delete')}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-400 shadow-md"
            >
                {deleteSVG()}
            </button>
        </div>
    );
}

export default Menu;
