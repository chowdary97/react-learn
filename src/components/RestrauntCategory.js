import React, { useState } from "react";
import { ItemList } from "../components";
const RestrauntCategory = (props) => {
  const { title, menu } = props.data;
  const { showItems, updateIndex } = props;
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  ">
        <div className=" justify-between flex ">
          <span className="font-bold text-lg">{`${title}  (${menu.length})`}</span>
          <span
            onClick={() => {
                updateIndex();
            }}
            className="cursor-pointer text-lg font-bold"
          >
            {">"}
          </span>
        </div>
        {showItems && <ItemList items={menu} />}
      </div>
    </div>
  );
};

export default RestrauntCategory;
