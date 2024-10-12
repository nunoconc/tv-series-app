import React from 'react';

// This component is responsible for rendering an error message.

interface IError {
    message?: string;
}

function Error({ message }: IError) {
    return (
        <div className="flex items-center justify-center h-screen bg-red-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
                <p className="text-xl text-red-500 mt-4">
                    Something went wrong. Please try again later.
                </p>
                <span className="block mt-4">{message}</span>
            </div>
        </div>
    );
}

export default Error;
