import "./RestrauntCard.css";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import UserContext from "../utils/context/UserContext";
import { useContext } from "react";

function RestrauntCard({ data }) {
  const user = useContext(UserContext);
  return (
    <div className="m-2 p-2 bg-gray-100 w-[200] rounded-md shadow-2xl hover:bg-gray-200">
      <img
        className="rounded-md w-full h-[120]"
        src={CLOUDINARY_IMAGE_URL + data.CloudinaryImageId}
        alt="res-logo"
      />

      <div className="">
        <h3 className="font-bold mt-2 text-lg">{data.RestrauntName}</h3>
        <h3 className="text-sm">{data.Location}</h3>
        <h3 className="text-md">{data.CostForTwo}</h3>
        <h4 className="text-md">{data.Cuisines.join(", ")}</h4>
        <h4 className="text-md">{data.Rating} stars</h4>
        <h4 className="text-md">38 Minutes to {user.loggedInUser}</h4>
      </div>
    </div>
  );
}

export function withPromoted(RestrauntCard) {
  return (props) => {
    return (
      <div>
        <h1>Promoted</h1>
        <RestrauntCard {...props} />
      </div>
    );
  };
}

export default RestrauntCard;
