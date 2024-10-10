import React from 'react';
import { deleteSVG, editSVG } from '../icons/svg';


interface IMenu {
    // eslint-disable-next-line no-unused-vars
    callback: (action: string) => void;
}
function Menu({callback}: IMenu) {

    return (
        <div className="flex justify-center space-x-10">
            <button
                onClick={()=> callback('edit')}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-400 shadow-md"
            >
                {editSVG()}
            </button>
            <button
                onClick={()=> callback('delete')}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-400 shadow-md"
            >
                {deleteSVG()}
            </button>
        </div>
    );
}

export default Menu;
