import React from 'react';
import PostCard from '../PostCard';
import { usePostContext } from '../../contexts/PostContext';

const Feed = () => {
    const { posts } = usePostContext();

    return (
        <div className="central-feed__container">
            {posts.map((post, index) => (
                <PostCard
                    key={`post-${post.timestamp}-${index}`}
                    {...post}
                />
            ))}
        </div>
    );
};

export default Feed;