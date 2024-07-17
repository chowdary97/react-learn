import ReactDOM from "react-dom/client";
import { Header, Body } from "./components";

const AppLayout = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
