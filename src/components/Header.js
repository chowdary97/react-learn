import "./header.css";
import { LOGO_URL } from "../utils/constants";

export function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Restaurant Logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
