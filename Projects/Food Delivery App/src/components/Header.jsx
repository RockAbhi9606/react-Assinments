import { useContext, useState } from "react";
import { LOGO_PATH } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
import useOnlineOfflineStatus from "../utils/useOnlineOfflineStatus";
import UserContext from "../utils/useContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineOfflineStatus();
  const { loggedInUser } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-8 py-3 shadow-lg bg-white">
      <div className="flex items-center gap-8">
        <Link className="flex items-center gap-2" to="/">
          <img className="w-12" src={LOGO_PATH} alt="logo" />
          <span className="text-xl font-medium">QuickBite</span>
        </Link>
        <div role="button" className="flex gap-2 cursor-pointer">
          <span className="underline text-blue-600">Other</span>
          <span className="font-medium">Pune, Maharashtra, India</span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <span>OnlineStatus:&nbsp;{onlineStatus ? "✅" : "🔴"}</span>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-800"
          }
        >
          <i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-800"
          }
        >
          <i className="fa-solid fa-address-card"></i>&nbsp;&nbsp;About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-800"
          }
        >
          <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;Contact Us
        </NavLink>
        <div className="relative">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-800"
            }
          >
            {cartItems.length > 0 && (
              <span className="absolute top-0 left-2 text-xs bg-black rounded-full text-white w-4 h-4 flex items-center justify-center translate-custom">
                {cartItems.length}
              </span>
            )}
            <i className="fa-solid fa-cart-shopping"></i>
            &nbsp;&nbsp;Cart
          </NavLink>
        </div>
        <NavLink
          to="/grocery"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-800"
          }
        >
          <i className="fa-duotone fa-solid fa-basket-shopping"></i>
          &nbsp;&nbsp;Grocery
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-800"
          }
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
