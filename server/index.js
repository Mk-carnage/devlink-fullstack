const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const blogs = [
  {
    id: 1,
    title: "How I Built My Portfolio with React",
    content: "This is a blog about using React.js to build personal websites."
  },
  {
    id: 2,
    title: "Tips for Hosting on Vercel and Render",
    content: "An easy guide to deploying full-stack apps."
  }
];

app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
