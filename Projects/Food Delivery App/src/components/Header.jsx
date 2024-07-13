import "../css/header.css";
import { LOGO_PATH } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="left-side">
        <img className="logo" src={LOGO_PATH} alt="logo" />
        <span className="title">QuickBite</span>
        <div role="button" className="select-city-container">
          <span className="select-city">Other</span>
          <span>pune, Maharashtra, India</span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>
      <div className="right-side">
        <span>
          <i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home
        </span>
        <span>
          <i className="fa-solid fa-address-card"></i>&nbsp;&nbsp;About Us
        </span>
        <span>
          <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;Contact Us
        </span>
        <span>
          <i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart
        </span>
      </div>
    </div>
  );
};

export default Header;
