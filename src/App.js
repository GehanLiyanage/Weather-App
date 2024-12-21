import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Weather from './components/Weather';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Weather />
            <Footer />
        </div>
    );
};

export default App;
