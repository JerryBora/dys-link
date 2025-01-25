// src/components/CreatePost.jsx
export default function CreatePost() {
    return (
        <div className="cyber-post-create mb-6 border-2 border-neon-blue rounded-lg p-6 neon-glow">
            <div className="flex items-center gap-4 mb-4">
                <div className="cyber-avatar-small border-2 border-neon-pink w-14 h-14 rounded-full"></div>
                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="SHARE NEURAL UPDATE..."
                        className="w-full bg-transparent border-b-2 border-neon-blue focus:outline-none text-neon-blue placeholder-neon-pink/50 cyber-font"
                    />
                    <div className="absolute inset-0 glitch-overlay opacity-0 hover:opacity-30 transition-opacity"></div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <button className="holographic-button px-4 py-2 text-sm transition-colors">
                        <span className="text-neon-blue">📡</span> LIVE FEED
                    </button>
                    <button className="holographic-button px-4 py-2 text-sm transition-colors">
                        <span className="text-neon-pink">🔗</span> ATTACH N-LINK
                    </button>
                </div>
                <button className="cyber-button px-8 py-3 text-neon-blue hover:text-neon-pink transition-colors">
                    BROADCAST
                </button>
            </div>
        </div>
    );
}
