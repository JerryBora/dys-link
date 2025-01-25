// src/components/Post.jsx
export default function Post({ author, role, content }) {
    return (
        <div className="cyber-post neon-glow p-6 mb-6">
            {/* Post Header */}
            <div className="flex items-center gap-4 mb-4">
                <div className="cyber-avatar-small glitch-overlay"></div>
                <div>
                    <h3 className="text-neon-pink cyber-font">{author}</h3>
                    <p className="text-neon-blue text-sm">{role}</p>
                </div>
            </div>

            {/* Content */}
            <p className="text-neon-cyan mb-6">{content}</p>

            {/* Actions */}
            <div className="flex justify-between text-neon-blue">
                <button className="hover:text-neon-pink">▲ Neural Uplink</button>
                <button className="hover:text-neon-pink">Encrypted Comment</button>
                <button className="hover:text-neon-pink">Neural Forward</button>
            </div>
        </div>
    );
}