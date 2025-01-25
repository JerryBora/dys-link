import React from "react";
import { FiSearch, FiHome, FiUser, FiBriefcase, FiMessageCircle, FiBell } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-black text-neon-green flex items-center justify-between px-4 py-2 shadow-lg">
            {/* Logo Section */}
            <div className="flex items-center">
                <FaRobot className="text-neon-pink text-2xl mr-2" />
                <span className="font-bold text-xl">DYS-LINK</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-neon-dark rounded-lg px-3 py-1 w-1/2">
                <FiSearch className="text-neon-green mr-2" />
                <input
                    type="text"
                    placeholder="Search the dystopia..."
                    className="bg-transparent border-none focus:outline-none text-neon-green w-full"
                />
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-4 md:space-x-6 text-neon-green">
                <FiHome className="text-xl hover:text-neon-pink cursor-pointer" title="Home" />
                <FiUser className="text-xl hover:text-neon-pink cursor-pointer" title="Network" />
                <FiBriefcase className="text-xl hover:text-neon-pink cursor-pointer" title="Jobs" />
                <FiMessageCircle className="text-xl hover:text-neon-pink cursor-pointer" title="Messages" />
                <FiBell className="text-xl hover:text-neon-pink cursor-pointer" title="Notifications" />
            </div>
        </div>
    );
};

export default Navbar;
