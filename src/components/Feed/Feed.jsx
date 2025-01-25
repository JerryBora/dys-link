// src/components/Feed.jsx
import Post from '../Post';
export default function Feed() {
    return (
        <div className="feed cyber-feed">
            {/* Create Post */}
            <div className="cyber-post-create neon-glow mb-6">
                <div className="flex gap-4">
                    <div className="cyber-avatar-small"></div>
                    <input
                        type="text"
                        placeholder="BROADCAST NEURAL UPDATE..."
                        className="cyber-input"
                    />
                </div>
            </div>

            {/* Posts */}
            <Post author="CircuitBreaker" role="Neural Engineer" content="Deployed phase 3 cortical firmware update!" />
        </div>
    );
}