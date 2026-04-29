import '../styles/sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <div className="sidebar-title"></div>
                <h2>Welcome!</h2>
                <p>Welcome to Reddit! Enjoy interesting posts and join communities!</p>

                <h2>Reddit Rules</h2>
                <ul>
                    <li>No Hate Speech or Bullying</li>
                    <li>No Harassment or Threats</li>
                    <li>No Spam or Self-Promotion</li>
                    <li>No Illegal Content</li>
                    <li>Respect User Privacy</li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;