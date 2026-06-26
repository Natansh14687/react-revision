import {CLOUD_IMG_URL} from "../utils/constants"

const ResCard = ({resData}) => {
    const {name, avgRating, cuisines, cloudinaryImageId, sla} = resData.info
  return (
    <div className="card-container w-80 hover:border-2 rounded-3xl p-2 cursor-pointer">
      <div className="card-img-container">
        <img
          src={CLOUD_IMG_URL + cloudinaryImageId}
          className="rounded-3xl h-60 w-full"
        />
      </div>
      <div className="resInfo py-4 px-5">
        <div>{name}</div>
        <div>{avgRating} - {sla.slaString}</div>
        <div>{cuisines.join(", ")}</div>
      </div>
    </div>
  );
};

export default ResCard;