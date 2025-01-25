import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CRTOverlay from './components/CRTOverlay';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/index.css';
import './styles/cyberpunk.css';
import {PostProvider} from "./contexts/PostContext";

function App() {
    return (
       <PostProvider>
        <div className="cyber-container">
            <Navbar />
            <main className="pt-20"> {/* Increased padding for navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <CRTOverlay />
        </div>
       </PostProvider>
    );
}

export default App;