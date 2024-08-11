import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux_store/sliceses/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utilities/constant";
import { cacheSearchResults } from "../redux_store/sliceses/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchChache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchChache[searchQuery]) {
        setSuggestions(searchChache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheSearchResults({ [searchQuery]: json[1] }));
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <header className="flex px-6 py-2 justify-between items-center">
      <div className="flex items-center gap-10">
        <i
          className="cursor-pointer scale-125 fa-solid fa-bars hover:bg-gray-200 p-2 rounded-full"
          onClick={() => dispatch(toggleMenu())}
        ></i>
        <img
          className="scale-125 w-20 cursor-pointer"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          alt="youtube-image"
        />
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center border border-gray-300 border-r-0 rounded-l-full overflow-hidden px-4 h-10 outline-none">
            <input
              className="w-96 outline-none py-[1px]"
              type="text"
              value={searchQuery}
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
            />
          </div>
          <button
            title="Search"
            className="text-lg border border-gray-300 w-16 bg-gray-200 h-10 rounded-r-full"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {suggestions.length > 0 && showSuggestions && (
          <div className="border border-gray-300 mt-1 fixed w-[400px] ml-3 outline-none py-[1px] bg-white shadow-lg rounded-xl">
            <ul>
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion}
                  className="flex items-center px-5 py-1 cursor-default hover:bg-gray-300 mx- rounded-lg"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <i className="fa-solid fa-clock-rotate-left"></i>
                  <li className="px-3">{suggestion}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center gap-8">
        <i
          title="Settings"
          className="cursor-pointer scale-125 text-gray-500 fa-solid fa-ellipsis-vertical"
        ></i>
        <div className="border rounded-full flex items-center justify-center px-3 h-10 text-blue-500 font-medium cursor-pointer">
          <i className="fa-solid fa-user"></i>
          <label className="cursor-pointer ml-4">Sign in</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
