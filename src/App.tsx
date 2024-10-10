import React from 'react';
import './App.css';
import List from './components/list';

function App() {
    return (
        <div>
            <header className="App-header"> TV Series App</header>
            <List episodes={[]} />
        </div>
    );
}

export default App;
