import React from "react";
import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <Navigation />
        </div>
      </div>
    );
  }
}

export default Header;
