import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header></Header>
          <MainContent />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
