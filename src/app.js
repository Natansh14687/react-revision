import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RouteError from "./components/RouteError";
{
  /* Introducing react router dom and making different routes **/
}
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <RouteError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute} />);
