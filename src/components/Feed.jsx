import PostCard from './PostCard';

const posts = [
    {
        id: 1,
        user: 'CircuitBreaker',
        role: 'Neural Interface Designer',
        content: 'Just deployed phase 3 of the cortical implant firmware update!',
        likes: '1.2k',
        comments: '384',
        shares: '206'
    },
    // Add more posts
];

export default function Feed() {
    return (
        <div className="cyber-feed mt-6 space-y-6">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}