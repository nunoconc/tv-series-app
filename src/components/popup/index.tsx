import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import { Episode } from '../../types/episode';
import { deleteSVG, saveSVG } from '../icons/svg';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '90%',
        maxHeight: '90%',
        overflow: 'auto',
        padding: '20px',
        minWidth: '50%',
    },
};

Modal.setAppElement('#root');

interface IPopup {
    children: ReactNode;
    episode?: Episode;
}

function Popup({ episode, children }: IPopup) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (episode) {
            console.log(episode);
        } else {
            /*
            const formData = new FormData(event.target as HTMLFormElement);

            episode = {
                id: '',
                title: formData.get('title') as string,
                series: formData.get('series') as string,
                description: formData.get('description') as string,
                seasonNumber: parseInt(formData.get('seasonNumber') as string),
                episodeNumber: parseInt(
                    formData.get('episodeNumber') as string
                ),
                releaseDate: formData.get('releaseDate') as string,
                imdbId: formData.get('imdbId') as string,
            };

            console.log(episode);

            */
        }
    };

    return (
        <div>
            <button
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                {children}
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {
                    setIsOpen(false);
                }}
                style={customStyles}
            >
                <form className="w-full h-full p-6 space-y-6 bg-white">
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className="rounded-md bg-gray-200 hover:bg-gray-400 shadow-md p-2"
                        >
                            {deleteSVG()}
                        </button>
                    </div>
                    <div>
                        <label
                            className="block text-4xl font-bold mb-2 text-gray-800"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            required
                            value={episode?.title}
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-2xl text-gray-600 mb-2"
                            htmlFor="series"
                        >
                            Series
                        </label>
                        <input
                            id="series"
                            type="text"
                            required
                            value={episode?.series}
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-lg mb-2"
                            htmlFor="description"
                        >
                            <strong>Description:</strong>
                        </label>
                        <input
                            id="description"
                            type="text"
                            required
                            value={episode?.description}
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-lg mb-2"
                            htmlFor="seasonNumber"
                        >
                            <strong>Season:</strong>
                        </label>
                        <input
                            id="seasonNumber"
                            type="number"
                            min={1}
                            value={episode?.seasonNumber}
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-lg mb-2"
                            htmlFor="episodeNumber"
                        >
                            <strong>Episode:</strong>
                        </label>
                        <input
                            id="episodeNumber"
                            type="number"
                            min={1}
                            value={episode?.episodeNumber}
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-lg mb-2"
                            htmlFor="releaseDate"
                        >
                            <strong>Release Date:</strong>
                        </label>
                        <input
                            id="releaseDate"
                            type="text"
                            required
                            value={episode?.releaseDate}
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-lg mb-2" htmlFor="imdbId">
                            <strong>IMDB ID:</strong>
                        </label>
                        <input
                            id="imdbId"
                            type="text"
                            required
                            value={episode?.imdbId}
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="p-2 rounded-md bg-gray-200 hover:bg-gray-400 shadow-md"
                        >
                            {saveSVG()}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default Popup;
