import React from "react";
import "./Restaurant.css";
import { useEffect, useState } from "react";
import Shimmer from "../../components/Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_ITEM_LINK } from "../../utils/constants";
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";

const Restaurant = () => {
  const [data, setData] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  useEffect(() => {
    if (resInfo) {
      setData(resInfo.CardsInfo);
      setMenuItems(resInfo.MenuInfo);
    }
  }, [resInfo]);

  return data == null ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <h1>{data.name}</h1>
      <h2>Menu</h2>
      <h3>Rating : {data.avgRating}</h3>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>{menuItem?.card?.card?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
