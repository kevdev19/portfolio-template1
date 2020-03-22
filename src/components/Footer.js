import React from "react";
import Navigation from "./Navigation";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <span className="footer-nav">
          <Navigation />
        </span>
        <span className="copyright">&copy; 2020 Portfolio Template </span>
      </div>
    );
  }
}

export default Footer;
