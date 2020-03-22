import React from "react";
import "../global.css";

class MainContent extends React.Component {
  render() {
    return (
      <div className="column-container">
        <div className="column-one">
          <h3>Paragraph One</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo
            sem, fermentum at egestas id, varius vel diam. Duis ex lectus,
            dictum eget lectus non, euismod condimentum sem. Vestibulum eget
            fermentum est. Mauris pellentesque eleifend ex sit amet tincidunt.
            Integer a purus ut enim mollis facilisis. Nunc facilisis porta mi eu
            imperdiet. Phasellus pharetra non leo eu ornare. In ullamcorper
            tellus vitae enim dictum ultrices. Morbi faucibus leo quam, et
            rhoncus lectus tempor mollis. Suspendisse vulputate porttitor metus
            sit amet feugiat. In ullamcorper tellus vitae enim dictum ultrices.
            Morbi faucibus leo quam, et rhoncus lectus tempor mollis.
            Suspendisse vulputate porttitor metus sit amet feugiat.
          </p>
          <h3>Paragraph Two</h3>
          <p>
            Ut eget egestas nisl. Nulla et mauris et felis rhoncus tempor.
            Vivamus venenatis turpis vehicula lectus condimentum tincidunt. Nam
            sollicitudin tellus pretium diam cursus interdum. Vestibulum ut
            aliquam velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris non eros ornare, aliquet metus quis, eleifend sapien.
            Ut eget egestas nisl. Nulla et mauris et felis rhoncus tempor.
            Vivamus venenatis turpis vehicula lectus condimentum tincidunt. Nam
            sollicitudin tellus pretium diam cursus interdum. Vestibulum ut
            aliquam velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris non eros ornare, aliquet metus quis, eleifend sapien.
            Nam sollicitudin tellus pretium diam cursus interdum. Vestibulum ut
            aliquam velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris non eros ornare, aliquet metus quis, eleifend sapien.
          </p>
          <h3>Paragraph Three</h3>
          <p>
            Ut eget egestas nisl. Nulla et mauris et felis rhoncus tempor.
            Vivamus venenatis turpis vehicula lectus condimentum tincidunt. Nam
            sollicitudin tellus pretium diam cursus interdum. Vestibulum ut
            aliquam velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris non eros ornare, aliquet metus quis, eleifend sapien.
            Ut eget egestas nisl. Nulla et mauris et felis rhoncus tempor.
            Vivamus venenatis turpis vehicula lectus condimentum tincidunt. Nam
            sollicitudin tellus pretium diam cursus interdum. Vestibulum ut
            aliquam velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris non eros ornare, aliquet metus quis, eleifend sapien.
            Nam sollicitudin tellus pretium diam cursus interdum. Vestibulum ut
            aliquam velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris non eros ornare, aliquet metus quis, eleifend sapien.
          </p>
        </div>
        <div className="column-two">
          <h3>Image One</h3>
          <p>
            <img
              src="https://via.placeholder.com/300x200.png?text=Image+One+Placeholder"
              alt="placeholder one"
            />
          </p>
          <h3>Image Two</h3>
          <p>
            <img
              src="https://via.placeholder.com/300x200.png?text=Image+Two+Placeholder"
              alt="placeholder two"
            />
          </p>
          <h3>Image Three</h3>
          <p>
            <img
              src="https://via.placeholder.com/300x200.png?text=Image+Three+Placeholder"
              alt="placeholder three"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default MainContent;
