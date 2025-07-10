DevLink – Full-Stack Blog Feed App

DevLink is a modern full-stack blog application that allows users to view developer-style blog posts and add their own posts using a simple form. It features a clean, responsive layout with a two-column grid for blog cards and dynamically generated images.



 🔧 Tech Stack

- **Frontend:** React.js (with functional components & hooks)
- **Backend:** Node.js + Express
- **Styling:** Custom CSS (responsive with grid layout)
- **API Integration:** Axios for REST API calls
- **Image Placeholder:** [Picsum Photos](https://picsum.photos)



✨ Features Implemented

- ✅ Two-column blog layout using **CSS Grid**
- ✅ Fixed-size **blog cards** with consistent image dimensions (`500px` wide)
- ✅ Built-in **blog submission form** (title, content, optional image URL)
- ✅ Default image auto-generates using **Picsum** if no image provided
- ✅ All new blog posts show immediately on the page (client-side render)
- ✅ Fully responsive for mobile and desktop screens
- ✅ Backend serves blog data using a simple **GET API endpoint**
- ✅ Clean UI with blog previews and cards

 🚀 Getting Started Locally

1. Clone this repo  
bash
   git clone https://github.com/Mk-carnage/devlink-fullstack.git
   cd devlink-fullstack


2. Install backend and start it:

bash
   cd server
   npm install
   npm start
   

3. Install frontend and start it:

bash
   cd ../client
   npm install
   npm start
  

4. Visit the app at:
   http://localhost:3000


## 📁 Project Structure


devlink-fullstack/
├── client/       # React frontend
│   └── src/components/BlogPage.js / BlogPage.css
├── server/       # Express backend
│   └── index.js (GET /api/blogs)


---

## 🙌 Author

Built by [@Mk-carnage](https://github.com/Mk-carnage)


---

### 📌 To use this:
1. Create a file in your project root: `README.md`
2. Paste everything above
3. Commit and push:

bash
git add README.md
git commit -m "Add project README"
git push


---

