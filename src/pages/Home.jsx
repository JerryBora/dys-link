import ProfileHeader from '../components/ProfileHeader';
import Feed from '../components/Feed/Feed';
import LeftSidebar from '../components/Sidebars/LeftSidebar';
import RightSidebar from '../components/Sidebars/RightSidebar';
import NetworkSidebar from '../components/NetworkSidebar';
import NewsSidebar from '../components/NewsSidebar';
import CreatePost from '../components/Feed/CreatePost';
import Navbar from '../components/Navbar';
import CRTOverlay from '../components/CRTOverlay';
export default function Home() {
    return (
        <div className="cyber-container relative min-h-screen">
            <Navbar />

            <main className="grid grid-cols-12 gap-6 pt-20 px-4">
                {/* Left Sidebar - Connections */}
                <div className="col-span-2 neon-border-l">
                    <LeftSidebar />
                </div>

                {/* Main Feed */}
                <div className="col-span-7">
                    <Feed />
                </div>

                {/* Right Sidebar - News */}
                <div className="col-span-3 neon-border-r">
                    <RightSidebar />
                </div>
            </main>

            <CRTOverlay />
        </div>
    );
}
