// src/App.jsx

import React, { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import usePost from './hooks/usePost';

const App = () => {
  // State to hold fetched posts and created posts
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [createdPosts, setCreatedPosts] = useState([]);

  // Fetching posts using useFetch hook
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  // Using usePost hook to create new post
  const { postData, loading: postLoading, error: postError, responseData } = usePost('https://jsonplaceholder.typicode.com/posts');

  const handlePost = () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    postData(newPost);
  };

  useEffect(() => {
    // Update fetched posts state with fetched data
    if (data) {
      setFetchedPosts(data); // Initialize fetched posts with fetched data
    }
  }, [data]);

  useEffect(() => {
    // If a new post is created, add it to the created posts state
    if (responseData) {
      setCreatedPosts((prevPosts) => [...prevPosts, responseData]); // Add new post to created posts
      console.log('Post created:', responseData); // Log the created post
    }
  }, [responseData]);

  return (
    <div>
      <h1>Custom Hooks Example</h1>

      <h2>Fetched Posts</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {fetchedPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p> {/* Make sure to match the correct property */}
        </div>
      ))}

      <h2>Created Posts</h2>
      {createdPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      <h2>Create a New Post</h2>
      <button onClick={handlePost} disabled={postLoading}>
        {postLoading ? 'Posting...' : 'Create Post'}
      </button>
      {postError && <p>Error: {postError.message}</p>}
    </div>
  );
};

export default App;
