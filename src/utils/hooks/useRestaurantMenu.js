import { useEffect, useState } from "react";
import { SWIGGY_MENU_ITEM_LINK } from "../constants";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(SWIGGY_MENU_ITEM_LINK + resId)
      .then((response) => response.json())
      .then((data) => {
        setMenuItems({
          CardsInfo: data.data.cards[2].card.card.info,
          MenuInfo: data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards,
        });
      });
  }

  return menuItems;
};

export default useRestaurantMenu;
