// src/components/Feed.jsx
import Post from '../Post';

export default function Feed() {
    return (
        <div className="feed cyber-feed bg-cyber-black p-6">
            {/* Create Post Section */}
            <div className="cyber-post-create neon-glow mb-6 p-4 border-2 border-neon-blue rounded-lg">
                <div className="flex gap-4 mb-4">
                    <div className="cyber-avatar-small border-2 border-neon-pink w-14 h-14 rounded-full"></div>
                    <input
                        type="text"
                        placeholder="BROADCAST NEURAL UPDATE..."
                        className="cyber-input w-full bg-transparent border-b-2 border-neon-blue focus:outline-none text-neon-cyan placeholder-neon-pink/50"
                    />
                </div>
            </div>

            {/* Posts Feed */}
            <div className="posts-list">
                <Post
                    author="CircuitBreaker"
                    role="Neural Engineer"
                    content="Deployed phase 3 cortical firmware update!"
                    timestamp="2 hours ago"
                    likes={120}
                    comments={45}
                />
                {/* Add more posts below */}
            </div>
        </div>
    );
}
