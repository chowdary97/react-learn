import React from "react";
import "./RestrauntCard.css";

function RestrauntCard({ data }) {
  console.log(data);
  return (
    <div className="rest-card">
      <img className="res-img" src={data.Image} alt="res-logo" />
      <div className="title">
        <h3 className="rest-title">{data.RestrauntName}</h3>
        <h4 className="rest-title">{data.Cuisine}</h4>
        <h4 className="rest-title">{data.Rating} stars</h4>
        <h4 className="rest-title">38 Minutes</h4>
      </div>
    </div>
  );
}

export default RestrauntCard;
