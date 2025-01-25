export default function PostCard({ post }) {
    return (
        <div className="cyber-post bg-dark-bg border-2 border-neon-blue p-6 rounded-lg hover:shadow-neon mb-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="cyber-avatar-small border-2 border-neon-pink w-12 h-12 rounded-full"></div>
                <div>
                    <h3 className="cyber-font text-neon-blue">{post.user}</h3>
                    <p className="text-sm text-neon-pink/80">{post.role}</p>
                </div>
            </div>

            <p className="text-neon-blue mb-6">{post.content}</p>

            <div className="flex justify-between text-neon-pink/60 text-sm">
                <button className="hover:text-neon-blue transition-colors">
                    ▲ {post.likes} NEURAL UPLINKS
                </button>
                <span>{post.comments} ENCRYPTED COMMENTS</span>
                <span>{post.shares} NEURAL FORWARDS</span>
            </div>
        </div>
    );
}