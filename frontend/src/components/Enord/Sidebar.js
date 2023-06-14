import {Public, Stars,Work } from "@mui/icons-material";
// import PublicIcon from "@material-ui/icons/Public";
// import Stars from "@material-ui/icons/Stars";
// import Work from "@material-ui/icons/Work";

import { Link } from "react-router-dom";
import "./css/Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link >Home</Link>

            {/* <a href="/">Home</a> */}
          </div>
          <div className="sidebar-option">
            <Link>PUBLIC</Link>
            <div className="link">
              <div className="link-tag">
                <Public />
                <Link >Question</Link>

                {/* <a href="/">Question</a> */}
              </div>

              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <Stars/>
                <Link >Explore Collectives</Link>

                {/* <a href="/">Explore Collectives</a> */}
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>FIND A JOB</p>
            <div className="link">
              <div className="link-tag">
                <Link>Question</Link>
                </div>
              
            </div>
          </div>
          <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link-tag">
              <Work />
              <Link >Companies</Link>
              {/* <a href="/">Companies</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;