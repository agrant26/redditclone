import {useState, useEffect} from 'react';
import Post from '../components/Post';
import Sidebar from '../components/sidebar';
import '../styles/home.css';

function Home() {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);  

const [title, setTitle] = useState('');
const [content, setContent] = useState('');

const updatePost = (id, newTitle, newContent) => {
  setPosts(posts.map(post => post.id === id ? { ...post, title: newTitle, content: newContent } : post));
}

const deletePost = (id) => {
  const updatedPosts = posts.filter(post => post.id !== id);
  setPosts(updatedPosts);
}
useEffect(() => {
  fetch('https://dummyjson.com/posts?limit=10')
    .then(response => response.json())
    .then((data) => {
      const formattedPosts = data.posts.map((item) => ({
        id: item.id,
        user: `User${item.userId}`,
        title: item.title,
        content: item.body,
        votes: item.reactions?.likes || item.reactions?.dislikes || 0,
      }));
      setPosts(formattedPosts);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
      setLoading(false);
    });
}, []);


const addPost = (e) => {
  e.preventDefault();
  
  const newPost = {
    id: Date.now(),
    user: 'CurrentUser',
    title: title,
    content: content,
    votes: 1
  };
  setPosts([newPost, ...posts]);
  setTitle('');
  setContent('');
};

return (
  <div className="Home">
    <h2>Home</h2>
    <main className="feed-column">
    <form className="create-post-form" onSubmit={addPost}>
      <input 
        placeholder='Post Title' value={title} onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        placeholder='Text' value={content} onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>

    <div className="feed">
    {loading ? ( <p>Loading posts...</p> ) : (
      posts.map((post) => (
        <Post key={post.id} username={post.user} title={post.title} content={post.content} votes={post.votes} onDelete={() => deletePost(post.id)} onUpdate={updatePost} />
      )))}
    </div>
    </main>
    <Sidebar />
  </div>
);
}

export default Home;