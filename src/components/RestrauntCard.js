import "./RestrauntCard.css";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

function RestrauntCard({ data }) {
  return (
    <div className="rest-card">
      <img
        className="res-img"
        src={CLOUDINARY_IMAGE_URL + data.CloudinaryImageId}
        alt="res-logo"
      />
      <div className="title">
        <h3 className="rest-title">{data.RestrauntName}</h3>
        <h3 className="rest-title">{data.Location}</h3>
        <h3 className="rest-title">{data.CostForTwo}</h3>
        <h4 className="rest-title">{data.Cuisines.join(", ")}</h4>
        <h4 className="rest-title">{data.Rating} stars</h4>
        <h4 className="rest-title">38 Minutes</h4>
      </div>
    </div>
  );
}

export default RestrauntCard;
