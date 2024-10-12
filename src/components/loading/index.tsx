import React from 'react';

// This component is responsible for rendering a loading spinner.

function Loading() {
    return (
        <div className="flex items-center justify-center fixed inset-0 z-50">
            <div
                className="spinner-border animate-spin inline-block w-9 h-9 border-4 rounded-full bg-slate-900"
                role="status"
            >
                <span className="visually-hidden text-white">-</span>
            </div>
        </div>
    );
}

export default Loading;
