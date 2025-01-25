import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CRTOverlay from './components/CRTOverlay';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
    return (
        <div className="cyber-container">
            <Navbar />
            <main className="pt-20"> {/* Adjusted for fixed navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <CRTOverlay />
        </div>
    );
}