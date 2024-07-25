import React from "react";
import { addItem } from "../utils/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="mt-10 border-b-2 border-gray-300 flex ">
      <div className="w-9/12">
        <div className="text-left p-2">
          <div className="font-bold text-md">{item.title}</div>
          <div className="font-bold text-sm">Price : ${item.price}</div>
        </div>
        <div className="text-xs text-left p-2">{item.description}</div>
      </div>
      <div className="w-3/12 p-2">
        <div className="bg-gray-100 border rounded-md h-full shadow-lg  flex mx-auto ">
          <span className="text-center">Image here</span>
          <button
            onClick={() => handleAddItem(item)}
            className="px-3 py-1 text-sm text-white bg-black rounded-sm shadow-lg absolute m-auto"
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
