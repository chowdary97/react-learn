import React from "react";
import "./Restaurant.css";
import { useEffect, useState } from "react";
import Shimmer from "../../components/Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_ITEM_LINK } from "../../utils/constants";

const Restaurant = () => {
  const [data, setData] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchData(id);
  }, []);

  function fetchData() {
    fetch(SWIGGY_MENU_ITEM_LINK+id)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.cards[2].card.card.info);
        setMenuItems(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
        console.log(data.data);
        // setMenuItems(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card.itemCards);
        // data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card.itemCards[0].card.info
      });
  }
  return data == null ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <h1>{data.name}</h1>
      <h2>Menu</h2>
      <h3>Rating : {data.avgRating}</h3>
      <ul>
        {menuItems.map((menuItem) => (
          <li>{menuItem?.card?.card?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
