import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import Communities from '../pages/communities.jsx';
import Home from '../pages/home';
import Profile from '../pages/profile';
import {FaReddit} from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className= "Navigation">
        <nav className="navbar">
          <div className="logo-container">
            <FaReddit className="reddit-logo" />
            <span className="logo-text">reddit clone</span>
          </div>
          
          <div className="nav-links">
            <NavLink to="/"className={({isActive}) => (isActive ? 'active-link' : 'link')}>Home</NavLink>
            <NavLink to="/communities" className={({isActive}) => (isActive ? 'active-link' : 'link')}>Communities</NavLink>
            <NavLink to="/profile" className={({isActive}) => (isActive ? 'active-link' : 'link')}>Profile</NavLink>
          </div>
        </nav>
        
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;