import { CreatePost, Feed } from '../components/CentralFeed';

const Dashboard = () => {
    return (
        <div className="dashboard-grid">
            <LeftSidebar />

            <main className="central-feed">
                <CreatePost />
                <Feed />
            </main>

            <RightSidebar />
        </div>
    );
};