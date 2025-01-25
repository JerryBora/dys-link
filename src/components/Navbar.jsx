import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-dark-bg border-b-2 border-neon-pink cyber-glitch">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="glitch-text text-2xl font-bold">
                    DYS-LINK
                </Link>
                <Link
                    to="/login"
                    className="holographic-button px-4 py-2 rounded-lg hover:animate-pulse"
                >
                    SIGN IN
                </Link>
            </div>
        </nav>
    );
}