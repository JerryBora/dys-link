import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePostContext must be used within a PostProvider');
    }
    return context;
};

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const createPost = (newPost) => {
        setPosts(prev => [newPost, ...prev]);
    };

    return (
        <PostContext.Provider value={{ posts, createPost }}>
            {children}
        </PostContext.Provider>
    );
};