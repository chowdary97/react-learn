import React from "react";
import "./Restaurant.css";
import { useEffect, useState } from "react";
import Shimmer from "../../components/Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_ITEM_LINK } from "../../utils/constants";
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";
import categories from "../../utils/Categories.json";
import { RestrauntCategory } from "../../components";

const Restaurant = () => {
  const [data, setData] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(1);

  useEffect(() => {
    if (resInfo) {
      setData(resInfo.CardsInfo);
      setMenuItems(resInfo.MenuInfo);
    }
  }, [resInfo]);

  return data == null ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto p-4 m-4 text-center">
      <h1 className="font-bold my-6 text-2xl">{data.name}</h1>
      <h2>Menu</h2>
      {categories.categories.map((item, index) => (
        <RestrauntCategory
          data={item}
          showItems={showIndex == index}
          updateIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restaurant;
