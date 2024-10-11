import svg from './svg';
import React from 'react';

interface IICon {
    icon: 'remove' | 'create' | 'close' | 'update' | 'confirm' | 'cancel' | 'info';
    size?: 'small' | 'medium';
    submit?: boolean;
    onClick?: () => void;
}

function IconButton({ icon, size = 'small', submit, onClick }: IICon) {
    const className = `${size === 'medium' ? 'py-2 px-4' : 'p-2'} rounded-md bg-gray-200 hover:bg-gray-400 shadow-md`;
    const buttonType = submit ? 'submit' : 'button';

    const renderSVG = () => {
        return Object.entries(svg)
            .find(([key]) => key === icon)
            ?.pop() || '???';
    };

    if (!onClick && !submit) {
        return <div className={className}>{renderSVG()}</div>;
    }

    return (
        <button type={buttonType} className={className} onClick={onClick}>
            {renderSVG()}
        </button>
    );
}

export default IconButton;
