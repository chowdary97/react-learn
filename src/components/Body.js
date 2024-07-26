import { useEffect, useState } from "react";
import { RestrauntCard } from "../components";
import "./Body.css";
import { Shimmer } from "../components";
import { json, Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { withPromoted } from "../components/RestrauntCard.js";
import { useGetUsersQuery } from "../utils/redux/api/apiSlice.js";

function Body() {
  const [originalList, setOriginalList] = useState([]);
  const [filteredList, setFilteredList] = useState(originalList);
  const [searchText, setSearchText] = useState("");
  const RestrauntCardPromoted = withPromoted(RestrauntCard);

  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetUsersQuery();

  console.log(
    "isLoading :" + isLoading,
    "isError :" + isError,
    "isSuccess :" + isSuccess,
    "error: " + JSON.stringify(error)
  );

  const onlineStatus = useOnlineStatus();
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
    if (searchText.length == 0) {
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
    cards.forEach((card, index) => {
      if (card.card.card.id === "top_brands_for_you") {
        const restaurants =
          card.card.card.gridElements.infoWithStyle.restaurants;
        restaurants.forEach((restaurant) => {
          const info = restaurant.info;
          let obj = {
            id: info.id,
            RestrauntName: info.name,
            Location: info.Location,
            Rating: info.avgRating,
            Cuisines: info.cuisines,
            CostForTwo: info.costForTwo,
            CloudinaryImageId: info.cloudinaryImageId,
            promoted: true,
          };
          restaurantsList.push(obj);
        });
      }
    });
    console.log(restaurantsList,"========");
    setFilteredList(restaurantsList);
    setOriginalList(restaurantsList);
  }

  // if (isError) {
  //   if (error.status === 404) {
  //     return <div>User not found.</div>;
  //   }

  //   if (error.status === 500) {
  //     return <div>Server error. Please try again later.</div>;
  //   }

  //   return <div>Error: {error.error}</div>;
  // }

  if (!onlineStatus)
    return (
      <h1>It looks like your offline, Please check your Internet connection</h1>
    );

  if (isLoading) return <h1>Loading Please wait!!!!!!!</h1>;

  return filteredList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="flex gap-3 m-4">
          <input
            className="border border-solid border-black border-r-3 focus:bg-green-700"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for Restraunts"
          />
          <button
            className="bg-green-100 px-4 py-2 rounded-md"
            onClick={() => {}}
          >
            Search
          </button>
          <button
            onClick={onButtonClick}
            className="bg-gray-100 px-4 py-2 rounded-md"
          >
            Top Rated Restraunts
          </button>
        </div>
      </div>
      <div className="m-4 flex flex-wrap">
        {users && users.map((user) => <div>{user.name}</div>)}
      </div>
      <div className="m-4 flex flex-wrap">
        {filteredList.map((item, index) => (
          <Link to={"/restaurant/" + item.id} key={item.id}>
            {index == 0 || (index == 2 && item.promoted) ? (
              <RestrauntCardPromoted data={item} />
            ) : (
              <RestrauntCard data={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
