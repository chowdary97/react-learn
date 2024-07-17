import { useState } from "react";
import { RestrauntCard } from "../components";
import "./Body.css";
import data from "../utils/mockdata";

function Body() {
  const [filteredList, setFilteredList] = useState(data);
  function onButtonClick() {
    setFilteredList(data.filter((item)=>item.Rating ==1 ))
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">Search</div>
        <button onClick={onButtonClick} className="filter-btn">
          Top Rated Restraunts
        </button>
      </div>
      <div className="restraunt-container">
        {filteredList.map((item, index) => (
          <RestrauntCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Body;
