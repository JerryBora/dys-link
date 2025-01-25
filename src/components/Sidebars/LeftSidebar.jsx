import React from 'react';
import '../../styles/cyberpunk.css';

const LeftSidebar = () => {
    return (
        <div className="leftSidebar">
            <div className="leftSidebar__profile">
                <img src="profile.jpg" alt="Profile" className="leftSidebar__profilePic" />
                <div className="leftSidebar__profileInfo">
                    <h2 className="leftSidebar__profileName">Your Name</h2>
                    <p className="leftSidebar__profileStatus">Status: Data in transit...</p>
                </div>
            </div>

            <div className="leftSidebar__nav">
                <div className="leftSidebar__navItem">
                    <span className="leftSidebar__navIcon">🏠</span>
                    <span className="leftSidebar__navText">Home</span>
                </div>
                <div className="leftSidebar__navItem">
                    <span className="leftSidebar__navIcon">🔗</span>
                    <span className="leftSidebar__navText">Network</span>
                </div>
                <div className="leftSidebar__navItem">
                    <span className="leftSidebar__navIcon">📩</span>
                    <span className="leftSidebar__navText">Messages</span>
                </div>
                <div className="leftSidebar__navItem">
                    <span className="leftSidebar__navIcon">💼</span>
                    <span className="leftSidebar__navText">Jobs</span>
                </div>
                <div className="leftSidebar__navItem">
                    <span className="leftSidebar__navIcon">⚙️</span>
                    <span className="leftSidebar__navText">Settings</span>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
