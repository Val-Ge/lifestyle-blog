import React from "react";
import './App.css';


function App() {
  // Dummy data for blog posts
  const dummyPosts = [
    { id: 1, title: 'First Blog Post' },
    { id: 2, title: 'Second Blog Post' },
    { id: 3, title: 'Third Blog Post' },
    // Add more dummy posts as needed
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {dummyPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
