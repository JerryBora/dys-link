import React from 'react';
import '../../styles/cyberpunk.css';

const RightSidebar = () => {
    return (
        <div className="rightSidebar">
            <div className="rightSidebar__section">
                <h3 className="rightSidebar__title">Who's Viewed Your Profile</h3>
                <div className="rightSidebar__content">Profile views: 15</div>
            </div>

            <div className="rightSidebar__section">
                <h3 className="rightSidebar__title">Suggestions</h3>
                <div className="rightSidebar__content">
                    <p>John Doe - Web Developer</p>
                    <p>Jane Smith - Cybersecurity Expert</p>
                </div>
            </div>

            <div className="rightSidebar__section">
                <h3 className="rightSidebar__title">Sponsored</h3>
                <div className="rightSidebar__content">AI-driven software: Invest now</div>
            </div>
        </div>
    );
};

export default RightSidebar;
