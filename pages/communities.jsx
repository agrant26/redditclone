import {useState, useEffect} from 'react';
import '../styles/communities.css';


function Communities() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    fetch('https://dummyjson.com/posts/tag-list')
      .then(response => response.json())
      .then((data) => {
        const formattedTags = data.slice(0, 15).map((tagName, index) => ({
          id: index,
          name: `r/${tagName}`,
          description: `Join the ${tagName} community`
        }));
        setTags(formattedTags);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
        setLoading(false);
      });
    }, []);

    if (loading) {
      return <div className="communities"><h1>Communities</h1><p>Loading...</p></div>;
    }

  return (
    <div className="communities">
      <h1>Communities</h1>
      <div className="community-list">
        {tags.map((sub) => (
          <CommunityCard key={sub.id} sub={sub} />
        ))}
    </div>
  </div>
  );
} 

function CommunityCard({sub}) {
  const [joined, setJoined] = useState(false);

  return (
    <div className="community-card">
      <h2>{sub.name}</h2>
      <p className="description">{sub.description}</p>
      <button className={joined ? 'joined' : ''} onClick={() => setJoined(!joined)}>
        {joined ? 'Joined' : 'Join'}
      </button>
    </div>
  );
}

export default Communities;