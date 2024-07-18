import { useEffect, useState } from "react";
import { RestrauntCard } from "../components";
import "./Body.css";
import { Shimmer } from "../components";

function Body() {
  const [originalList,setOriginalList]=useState([])
  const [filteredList, setFilteredList] = useState(originalList);
  const [searchText, setSearchText] = useState("");
  function onButtonClick() {
    setFilteredList(data.filter((item) => item.Rating == 1));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = originalList.filter((item) =>
      item.RestrauntName.toLowerCase().includes(searchText)
    );
    setFilteredList(filteredData);
    if(searchText.length == 0){
      setFilteredList(originalList);
    }
  }, [searchText]);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const parsedData = await data.json();
    // const parsedData = JSON.parse(jsonData);

    // Access the cards array
    const cards = parsedData.data.cards;
    let restaurantsList = [];
    cards.forEach((card) => {
      if (card.card.card.id === "top_brands_for_you") {
        const restaurants =
          card.card.card.gridElements.infoWithStyle.restaurants;
        restaurants.forEach((restaurant) => {
          const info = restaurant.info;
          let obj = {
            RestrauntName: info.name,
            Location: info.Location,
            Rating: info.avgRating,
            Cuisines: info.cuisines,
            CostForTwo: info.costForTwo,
            CloudinaryImageId: info.cloudinaryImageId,
          };
          restaurantsList.push(obj);
        });
      }
    });
    // setFilteredList(restaurantsList);
    setOriginalList(restaurantsList)
  }

  return filteredList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for Restraunts"
          />
          <button className="search" onClick={() => {}}>
            Search
          </button>
        </div>
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
