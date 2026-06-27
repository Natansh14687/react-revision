import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");

  {/* if no dependency array is provided in useEffect, then every time the component will be re-rendered the useEffect hook will be called **/ }
  {/* if empty dependency array is provided in useEffect hook then useEffect will be called only on initial render **/}
  {/* if dependency is provided in the dependency array then useEffect will be called every time the value of dependency changes and on initial render **/}
  useEffect(() => {
    console.log("Inside useEffect");
  },[btnValue])
  console.log("Header Component");

  return (
    <div className="nav-bar flex justify-between border-2 mx-5 my-2 p-3">
      <div className="logo">
        <img src={LOGO_URL} className="h-30 w-30" alt="logo" />
      </div>
      <div className="nav_items w-lg content-center">
        <ul className="flex mr-5 justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="border py-2 px-4 rounded-xl cursor-pointer bg-gray-500 text-white"
            onClick={() => {
              btnValue === "Login"
                ? setBtnValue("Logout")
                : setBtnValue("Login");
            }}
          >
            {btnValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
