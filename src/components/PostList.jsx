import React from 'react';
import { usePosts } from '../hooks/usePosts';

const PostList = () => {
    const { posts, loading, error} = usePosts();

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};



export default PostList;
