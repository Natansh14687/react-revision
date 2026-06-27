import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resListData, setResListData] = useState([]);
  const [filteredListData, setFilteredListData] = useState([]);
  const [searchRes, setSearchRes] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.5292791&lng=75.0324043&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    setResListData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredListData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-3">
      <div className="body-header">
        <input
          placeholder="search restaurant"
          className="bg-gray-500 rounded p-1 mr-3 text-white"
          value={searchRes}
          onChange={(e) => {
            const value = e.target.value;
            setSearchRes(value);
            const searchingRes = resListData.filter((res) => {
              return res.info.name.toLowerCase().includes(value.toLowerCase());
            });
            setFilteredListData(searchingRes);
          }}
        />
        <button
          className="top-rated-res mb-3 cursor-pointer"
          onClick={() => {
            const filteredResListData = resListData.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            setFilteredListData(filteredResListData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resData flex flex-wrap">
        {filteredListData.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><ResCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
