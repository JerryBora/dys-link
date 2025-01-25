import React from 'react';
import { usePostContext } from '../../contexts/PostContext';

const CreatePost = () => {
    const { createPost } = usePostContext();
    const [content, setContent] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            createPost({
                content,
                timestamp: new Date().toISOString(),
                likes: 0,
                comments: []
            });
            setContent('');
        }
    };

    return (
        <div className="central-feed__create">
            <form onSubmit={handleSubmit}>
        <textarea
            className="cyber-input--lg"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Broadcast neural update..."
        />
                <div className="central-feed__actions">
                    <button type="submit" className="cyber-button--primary">
                        Deploy to Collective
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;