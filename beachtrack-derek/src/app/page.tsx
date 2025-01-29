import "../styles/homepage.css";

export default function Home() {
  return (
    <div>
      <div className="content-wrapper">
        <div className="left-content">
          <div className="search-wrapper">
            <div className="search-bar">
              <button className="menu-button">☰</button>
              <input type="text" placeholder="Search by building, time, date" />
              <button className="search-button">🔍</button>
            </div>
          </div>

          <div className="sections-container">
            <div className="section">
              <div className="section-header">Recent Searches</div>
              <div className="section-body">
                <p>No recent searches</p>
              </div>
            </div>

            <div className="section">
              <div className="section-header">Open Classrooms</div>
              <div className="section-body"></div>
            </div>

            <div className="section">
              <div className="section-header">Current Events</div>
              <div className="section-body">
                <p>Log in to create/join events!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-content">
          {/* Reserved space for map */}
        </div>
      </div>
    </div>
  );
}

