import "./header.css";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export function Header() {
  console.log("refreshing the page")
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Restaurant Logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
