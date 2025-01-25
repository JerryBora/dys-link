import ProfileHeader from '../components/ProfileHeader';
import Feed from '../components/CentralFeed/Feed';
import LeftSidebar from '../components/Sidebars/LeftSidebar';
import RightSidebar from '../components/Sidebars/RightSidebar';
import CreatePost from '../components/CentralFeed/CreatePost';
import Navbar from '../components/Navbar';
import CRTOverlay from '../components/CRTOverlay';

export default function Home() {
    return (
        <div className="cyber-container relative min-h-screen bg-cyber-black">
            {/* Navbar */}
            <Navbar />

            {/* Main Content Grid */}
            <main className="grid grid-cols-12 gap-6 pt-20 px-4 h-screen overflow-hidden">
                {/* Left Sidebar - Connections */}
                <div className="col-span-2 neon-border-l h-full overflow-y-auto">
                    <LeftSidebar />
                </div>

                {/* Central Feed Section */}
                <div className="col-span-7 flex flex-col gap-6 h-[calc(100vh-5rem)] overflow-y-auto cyber-scrollbar">
                    {/* Create Post Component */}
                    <div className="cyber-panel-glitch">
                        <CreatePost />
                    </div>

                    {/* Main Feed */}
                    <Feed />
                </div>

                {/* Right Sidebar - News/Network */}
                <div className="col-span-3 neon-border-r h-full overflow-y-auto">
                    <RightSidebar />
                </div>
            </main>

            {/* Cyberpunk Visual Effects */}
            <CRTOverlay />
        </div>
    );
}