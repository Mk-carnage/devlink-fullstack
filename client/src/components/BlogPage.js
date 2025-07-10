import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogPage.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: '' });

  useEffect(() => {
    console.log("Fetching blogs...");

    axios.get('http://localhost:5000/api/blogs')
      .then(res => {
        console.log("API Response:", res.data);
        setBlogs(res.data);
      })
      .catch(err => console.error("API Error:", err));
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      ...newPost,
      image: newPost.image || `https://picsum.photos/seed/${Date.now()}/600/300`
    };
    setBlogs([newBlog, ...blogs]);
    setNewPost({ title: '', content: '', image: '' });
  };

  return (
    <div className="blog-container">
      <h1>DevLink Feed</h1>
      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={newPost.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Write your blog content..."
          value={newPost.content}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={newPost.image}
          onChange={handleChange}
        />
        <button type="submit">Post</button>
      </form>

      {blogs.map(blog => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image || `https://picsum.photos/seed/${blog.id}/600/300`} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
