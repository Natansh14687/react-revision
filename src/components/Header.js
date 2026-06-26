import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="nav-bar flex justify-between border-2 mx-5 my-2 p-3">
      <div className="logo">
        <img
          src={LOGO_URL}
          className="h-30 w-30"
          alt="logo"
        />
      </div>
      <div className="nav_items w-lg content-center">
        <ul className="flex mr-5 justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;