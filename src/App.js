import React from "react";
import ReactDOM from "react-dom/client";

// Babel Transpiles it to React.createElement => ReactElement-js => HTMLElement(render)
// const heading = <h1 className="heading">Hello world! from Thimma New</h1>;

const span = <h1>This is span tag</h1>;

const Title = () => (
    <div>
      <h1 className="title">This is Heading</h1>
    </div>
  )
const HeadingComponent = () => {
  return (
    <div className="container">
       {Title()} {/* since it is function we can call like this  */}
      <Title />
      <Title></Title>
      <h1>This is Heading Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
