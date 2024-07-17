import React from "react";
import { RestrauntCard } from "../components";
import "./Body.css";

function Body() {
  const data = [
    {
      RestrauntName: "Meghana",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 4.5,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
    {
      RestrauntName: "Meghana",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 4.5,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
    {
      RestrauntName: "Paradise",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 3.7,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
    {
      RestrauntName: "Paradise",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 3.7,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
    {
      RestrauntName: "Paradise",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 3.7,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
    {
      RestrauntName: "Paradise",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 3.7,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
    {
      RestrauntName: "Paradise",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 3.7,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
    {
      RestrauntName: "Paradise",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 3.7,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
    {
      RestrauntName: "Paradise",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 3.7,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
    {
      RestrauntName: "Paradise",
      Image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/90890398B.png",
      Rating: 3.7,
      Description:
        "Excellent food, family-friendly atmosphere, and friendly staff.",
      Favorite: false,
      Cuisine: "South, North",
    },
  ];
  return (
    <div className="body">
      <div className="">
        <div className="search">Search</div>
      </div>
      <div className="restraunt-container">
        {data.map((item) => (
          <RestrauntCard data={item} />
        ))}
      </div>
    </div>
  );
}

export default Body;
