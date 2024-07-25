import { useState } from "react";
import "../css/header.css";
import { LOGO_PATH } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineOfflineStatus from "../utils/useOnlineOfflineStatus";

const Header = () => {
  const onlineStatus = useOnlineOfflineStatus();
  const [isLogin, setIsLogin] = useState("Login");
  return (
    <div className="header">
      <div className="left-side">
        <Link to="/">
          <img className="logo" src={LOGO_PATH} alt="logo" />
        </Link>
        <Link to="/">
          <span className="title">QuickBite</span>
        </Link>
        <div role="button" className="select-city-container">
          <span className="select-city">Other</span>
          <span>pune, Maharashtra, India</span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>
      <div className="right-side">
        <div>
          OnlineStatus:&nbsp;
          {onlineStatus ? "✅" : "🔴"}
        </div>
        <Link to="/">
          <i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home
        </Link>
        <Link to="/about">
          <i className="fa-solid fa-address-card"></i>&nbsp;&nbsp;About Us
        </Link>
        <Link to="/contact">
          <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;Contact Us
        </Link>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart
        </Link>
        <Link to="/grocery">
          <i className="fa-duotone fa-solid fa-basket-shopping"></i>
          &nbsp;&nbsp;Grocery
        </Link>
        <Link
          href="/"
          onClick={() => {
            isLogin === "Login" ? setIsLogin("Logout") : setIsLogin("Login");
          }}
        >
          <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;{isLogin}
        </Link>
      </div>
    </div>
  );
};

export default Header;
