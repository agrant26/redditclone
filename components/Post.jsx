import {useState} from 'react';
import {TiArrowUpThick, TiArrowDownThick} from 'react-icons/ti';
import './Post.css';

function Post({ username, title, content, votes, onDelete, onUpdate }) {
    const [amount, setAmount] = useState(votes);
    const[voteStatus, setVoteStatus] = useState(0); 
    const [isEditing, setIsEditing] = useState(false);
    const[editTitle, setEditTitle] = useState(title);
    const[editContent, setEditContent] = useState(content);

    const handleSave = () => {
        onUpdate(props.id, editTitle, editContent);
        setIsEditing(false);
    };

    const handleVote = (direction) => {
        if (voteStatus === direction) {
            setAmount(votes);
            setVoteStatus(0);
        } else {
            setAmount(votes + direction);
            setVoteStatus(direction);
        }
    };
    
    
    return (
      <div className="post-card">
      <div className="post-sidebar">

        <button 
          className={`vote-btn up ${voteStatus === 1 ? 'active' : ''}`}
          onClick={() => handleVote(1)}
        >
          <TiArrowUpThick />
        </button>

        <span className={`amountUpvotes-text ${voteStatus === 1 ? 'up' : voteStatus === -1 ? 'down' : ''}`}>
          {amount}
        </span>


        <button 
          className={`vote-btn down ${voteStatus === -1 ? 'active' : ''}`}
          onClick={() => handleVote(-1)}
        >
          <TiArrowDownThick />
        </button>
      </div>
      
      <div className="post-content">
        <small>u/{username}</small>
        <h2>{title}</h2>
        <p>{content}</p>
        
        {isEditing ? (
          <div className="edit-section">
            <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="edit-input" />
            <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} className="edit-textarea" />
            <div className="edit-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="post-actions">
            <button className="delete-btn" onClick={onDelete}>Delete</button>
            <button className="post-btn" onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        )}
      </div>
    </div> 
    );
}

export default Post;    