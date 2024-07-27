import { useContext, useState } from "react";
import { LOGO_PATH } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
import useOnlineOfflineStatus from "../utils/useOnlineOfflineStatus";
import UserContext from "../utils/useContext";

const Header = () => {
  const onlineStatus = useOnlineOfflineStatus();
  const { loggedInUser } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState("Login");
  return (
    <div className="flex justify-between items-center px-8 py-3 shadow-lg">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-1">
          <Link className="flex items-center gap-2" to="/">
            <img className="w-12" src={LOGO_PATH} alt="logo" />
            <span className="text-xl font-medium">QuickBite</span>
          </Link>
        </div>
        <div role="button" className="flex gap-2">
          <span className="underline text-blue-600">Other</span>
          <span className="font-medium">pune, Maharashtra, India</span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>
      <div className="flex gap-5">
        <span>
          OnlineStatus:&nbsp;
          {onlineStatus ? "✅" : "🔴"}
        </span>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-500 " : "")}
        >
          <i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-blue-500 " : "")}
        >
          <i className="fa-solid fa-address-card"></i>&nbsp;&nbsp;About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-blue-500 " : "")}
        >
          <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;Contact Us
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "text-blue-500 " : "")}
        >
          <i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart
        </NavLink>
        <NavLink
          to="/grocery"
          className={({ isActive }) => (isActive ? "text-blue-500 " : "")}
        >
          <i className="fa-duotone fa-solid fa-basket-shopping"></i>
          &nbsp;&nbsp;Grocery
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-blue-500 " : "")}
          onClick={() => {
            isLogin === "Login" ? setIsLogin("Logout") : setIsLogin("Login");
          }}
        >
          <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;{isLogin}
        </NavLink>
        <span>{loggedInUser}</span>
      </div>
    </div>
  );
};

export default Header;
