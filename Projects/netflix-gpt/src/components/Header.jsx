import React, { useEffect } from "react";
import LOGO from "../assets/logos/netflix-gpt-high-resolution-logo-transparent.png";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

const Header = ({ isForgotPassword }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("Error Found");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
        navigate("/browse");
      } else if (isForgotPassword) {
        navigate("/forgotPassword");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute  py-1 px-32 w-full bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            className="mix-blend-darken w-48"
            src={LOGO}
            alt="netflix-gpt-logo"
          />
        </Link>
        {user && (
          <div className="flex items-center gap-4 text-slate-100 font-semibold">
            <Link
              to="/browse"
              className="flex items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-house"></i>
              Home
            </Link>
            <Link to="#" className="flex items-center gap-1 cursor-pointer">
              <i className="fa-solid fa-tv"></i>
              TV Shows
            </Link>
            <Link to="#" className="flex items-center gap-1 cursor-pointer">
              <i className="fa-solid fa-film"></i>
              Movies
            </Link>
            <Link to="#" className="flex items-center gap-1 cursor-pointer">
              <i className="fa-solid fa-newspaper"></i>
              News & Populer
            </Link>
            <Link to="#" className="cursor-pointer">
              My List
            </Link>
            <Link to="#" className="cursor-pointer">
              Browse by langauges
            </Link>
          </div>
        )}
      </div>
      {user && (
        <div className="flex gap-2 items-center">
          <i className="scale-100 text-gray-200 fa-sharp fa-solid fa-circle-user"></i>
          <button
            className="mt-[-4px] font-semibold text-gray-700 text-xl"
            onClick={handleSignOut}
          >
            Hello, {user.displayName}
          </button>
        </div>
      )}
      {isForgotPassword && (
        <Link to="/" className="text-xl text-red-800 font-semibold">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
