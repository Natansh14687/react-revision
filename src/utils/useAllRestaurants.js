import { useState, useEffect } from "react";

const useAllRestaurants = () => {
  const [resListData, setResListData] = useState([]);


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
    // setFilteredListData(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    // );
  };

  return resListData;
};

export default useAllRestaurants;
