import React, { useEffect } from "react";
import LOGO from "../assets/logos/netflix-gpt-high-resolution-logo-transparent.png";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { gptSearchView } from "../redux/gptSlice";
import { prefarredLangauges } from "../utils/constent";
import { changeLangauge } from "../redux/configSlice";

const Header = ({ isForgotPassword }) => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.gptSearch);

  const dispatch = useDispatch();

  //dispatch(changeLangauge(prefarredLangauges))
  //const langauges = useSelector((store) => store.selectedLangauge.langauge);

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

  const showGptSearchView = () => {
    dispatch(gptSearchView());
  };

  const handleChangeLangauge = (e) => {
    dispatch(changeLangauge(e.target.value));
  };

  return (
    <div className="absolute py-1 px-20 w-full bg-gradient-to-b from-black sm:from-blue-900 md:from-green-900 z-10 flex items-center justify-between flex-col md:flex-row">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            className="mix-blend-darken w-48"
            src={LOGO}
            alt="netflix-gpt-logo"
          />
        </Link>
        {user && (
          <div className="flex items-center gap-2 md:gap-4 text-slate-100 font-semibold text-xs -ml-6 md:text-sm md:ml-0 md:pt-0 pt-6 text-nowrap">
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
          </div>
        )}
      </div>
      {user && (
        <div className="flex gap-4 items-center pt-6 md:pt-0">
          <div className="flex">
            {showGptSearch && (
              <select
                className="text-white bg-gray-600 px-4 py-2 rounded-lg mr-4 outline-none text-xs md:text-sm"
                onChange={handleChangeLangauge}
              >
                {prefarredLangauges.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="text-white bg-purple-800 px-4 py-2 rounded-lg text-xs md:text-sm text-nowrap"
              onClick={showGptSearchView}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
          </div>
          <div className="flex">
            <i className="scale-75 md:scale-100 text-gray-200 fa-sharp fa-solid fa-circle-user"></i>
            <button
              className="-mt-1 font-semibold text-slate-100 ml-1 md:ml-2 text-nowrap text-xs md:text-sm"
              onClick={handleSignOut}
            >
              Hello, {user.displayName}
            </button>
          </div>
        </div>
      )}
      {isForgotPassword && (
        <Link
          to="/"
          className="text-xl text-red-800 font-semibold sm:text-xs md:text-sm"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
