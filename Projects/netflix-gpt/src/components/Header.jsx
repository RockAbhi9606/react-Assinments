import React from "react";
import LOGO from "../assets/logos/netflix-gpt-high-resolution-logo-transparent.png";
import { Link } from "react-router-dom";

const Header = ({ isForgotPassword }) => {
  console.log(isForgotPassword);
  return (
    <div className="absolute py-4 px-32 w-full bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-48" src={LOGO} alt="netflix-gpt-logo" />
      {isForgotPassword && (
        <Link to="/" className="text-xl text-red-800 font-semibold">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
