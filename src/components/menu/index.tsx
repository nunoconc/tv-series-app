import React from 'react';

interface IDropdown {
    options: {
        label: string;
        action: () => void;
    }[];
}

function Menu({ options }: IDropdown) {

    return (
        <div className="relative flex justify-center space-x-10">
            {options.map((option, index) =>(
                <button
                    className={"bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-1 rounded"}
                    key={index}
                    onClick={option.action}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}

export default Menu;
