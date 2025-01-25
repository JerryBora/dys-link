import React from "react";
import { FiSearch, FiBell, FiMessageSquare, FiUser } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import { FaRobot } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-black text-neon-green flex justify-between items-center px-4 py-2 border-b border-neon-pink">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <FaRobot size={20} className="text-neon-pink" />
                <h1 className="text-lg font-bold tracking-wide text-neon-green">DYS-LINK</h1>
            </div>

            {/* Search Bar */}
            <div className="relative w-1/4">
                <input
                    type="text"
                    placeholder="Search the dystopia..."
                    className="w-full bg-black border border-neon-pink rounded-sm px-3 py-1 text-sm text-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green placeholder-neon-blue"
                />
                <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-neon-pink" size={16} />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-neon-green hover:text-neon-pink text-sm">
                    <MdHome size={18} />
                    <span>Home</span>
                </button>
                <button className="flex items-center space-x-1 text-neon-green hover:text-neon-pink text-sm">
                    <FiMessageSquare size={18} />
                    <span>Messages</span>
                </button>
                <button className="flex items-center space-x-1 text-neon-green hover:text-neon-pink text-sm">
                    <FiBell size={18} />
                    <span>Alerts</span>
                </button>
                <button className="flex items-center space-x-1 text-neon-green hover:text-neon-pink text-sm">
                    <FiUser size={18} />
                    <span>Profile</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
