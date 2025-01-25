import ProfileHeader from '../components/ProfileHeader';
import Feed from '../components/Feed';
import NetworkSidebar from '../components/NetworkSidebar';
import NewsSidebar from '../components/NewsSidebar';
import CreatePost from '../components/CreatePost';

export default function Home() {
    return (
        <div className="scanlines min-h-screen">
            <ProfileHeader />

            <main className="container mx-auto px-4 py-8 grid grid-cols-12 gap-6">
                {/* Left Column - Network */}
                <div className="col-span-3">
                    <NetworkSidebar />
                </div>

                {/* Center Column - Feed */}
                <div className="col-span-6 space-y-6">
                    <CreatePost />
                    <Feed />
                </div>

                {/* Right Column - News */}
                <div className="col-span-3">
                    <NewsSidebar />
                </div>
            </main>
        </div>
    );
}