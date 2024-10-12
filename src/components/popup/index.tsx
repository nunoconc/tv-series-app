import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import { Episode } from '../../types/episode';
import Form from './form';
import Confirmation from './confirmation';

// This component is responsible for rendering a popup with a form or a confirmation dialog.

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
    type: 'confirmation' | 'form';
}

function Popup({ episode, children, type }: IPopup) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const renderPopup = () => {
        if (type === 'confirmation' && episode) {
            return (
                <Confirmation
                    id={episode?.id}
                    onCancel={() => setIsOpen(false)}
                />
            );
        }

        if (type === 'form') {
            return <Form episode={episode} onCancel={() => setIsOpen(false)} />;
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
                {renderPopup()}
            </Modal>
        </div>
    );
}

export default Popup;
