import React from "react";

import "../global.css";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav-list" role="navigation">
          <li className="nav-list">Home</li>
          <li className="nav-list">About</li>
          <li className="nav-list">Projects</li>
          <li className="nav-list">Contact</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
