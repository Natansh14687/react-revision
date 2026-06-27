import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { menuMockData } from "../utils/menuMockData";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const param = useParams();
  const { resId } = param;

  useEffect(() => {
    setResInfo(menuMockData?.data);
  }, []);

  //   const fetchMenu = async () => {
  //     const data = await fetch(
  //       "/menuMockData.json",
  //     );
  //     console.log(data.status);
  //     console.log(data.ok);

  //     const json = await data.json();
  //     console.log(json);

  //     setResInfo(json?.data);
  //   };

  if (resInfo === null) return <Shimmer />;

  const { name, slugs, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.categories[0];

  return (
    <div className="p-4">
      <h1 className="text-4xl">
        {name} - {slugs.city}
      </h1>
      <h2 className="text-2xl">
        {cuisines.join(", ")} --- {costForTwoMessage}
      </h2>
      <h2 className="text-xl">Restaurant menu</h2>
      {itemCards.map((item) => (
        <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
