import {useState, useEffect} from 'react';
import Post from '../components/Post';
import '../styles/profile.css';



function Profile() {
  const currentUser = {
  username: 'iluvreddit1212',
  karma: 620,
  joinDate: 'January 2020',
  avatar: 'https://i.pravatar.cc/150?img=1',
  bio: 'Just a Reddit enthusiast sharing my thoughts and experiences. Love engaging with the community and discovering new content!',
};

  
  return (
    <div className="Profile">
      <header className="profile-header" style={{backgroundColor: currentUser.bannerColor}}>
        <h1>Profile</h1>
        <div className="profile-picture">
          <img src={currentUser.avatar} alt="Profile Picture" className="profile-img" />
        </div>
          <div className="profile-info">
            <h2>r/{currentUser.username}</h2>
            <p className="bio">{currentUser.bio}</p>
            <div className="profile-stats">
            <p>Karma: {currentUser.karma}</p>
            <p>Cake Day: {currentUser.joinDate}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Profile;