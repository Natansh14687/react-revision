import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body p-3">
      <div className="search mb-3">Search</div>
      <div className="resData flex flex-wrap">
        {resList.map((restaurant) => 
            <ResCard key={restaurant.info.id} resData={restaurant}/>
        )}
      </div>
    </div>
  );
};

export default Body;