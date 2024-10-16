import React from 'react';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';
import Popup from '../popup';
import IconButton from '../iconButton';

// This component is responsible for rendering the header of the application.

interface IHeader {
    // eslint-disable-next-line no-unused-vars
    callback?: (search: string) => void;
}
function Header({ callback }: IHeader) {
    const navigate = useNavigate();
    const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        callback?.(e.target.value);
    }, 300);

    return (
        <header className="App-header flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
            <h1
                className="text-2xl font-bold text-white"
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
            >
                TV Series App
            </h1>
            {callback && (
                <input
                    className="text-lg p-2 border border-gray-300 rounded text-black w-1/3"
                    placeholder="Search Tab"
                    onChange={handleSearch}
                />
            )}
            <Popup type={'form'}>
                <IconButton icon={'create'} size={'medium'} />
            </Popup>

        </header>
    );
}

export default Header;
