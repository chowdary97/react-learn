import React from "react";
import { Item } from "../components";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
};

export default ItemList;
