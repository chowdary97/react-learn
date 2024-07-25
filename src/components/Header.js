import "./header.css";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

export function Header() {
  const data = useContext(UserContext);
  const cart = useSelector((state) => state.cart.items);
  console.log(cart)
  return (
    <div className="flex justify-between bg-blue-400 shadow-lg m-3 p-4 sm:bg-green-300 ">
      <div className="w-24">
        <img className="logo" src={LOGO_URL} alt="Restaurant Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-2">
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
            <Link to="/cart">Cart{cart.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
