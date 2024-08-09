import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  {
    return !isMenuOpen ? null : (
      <div>
        <ul className="bg-white w-60 p-4 overflow-hidden overflow-y-auto h-screen scrollbar-thin ml-[-45px]">
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-solid fa-house"></i>
            <label className="">Home</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-sharp fa-solid fa-camera-retro"></i>
            <label className="">Shorts</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-sharp fa-solid fa-file-video"></i>
            <label className="">Subcriptions</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-solid fa-user"></i>
            <label className="">You</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-sharp fa-solid fa-landmark"></i>
            <label className="">History</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-solid fa-music"></i>
            <label className="">Music</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-solid fa-gamepad"></i>
            <label className="">Gaming</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-sharp-duotone fa-solid fa-film"></i>
            <label className="">Movies</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-regular fa-thumbs-up"></i>
            <label className="">Like Videos</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-sharp fa-solid fa-table-tennis-paddle-ball"></i>
            <label className="">Sports</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-duotone fa-solid fa-podcast"></i>
            <label className="">Podcasts</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-solid fa-newspaper"></i>
            <label className="">News</label>
          </li>
          <li className="px-2 flex items-center gap-10 h-10 rounded-lg hover:bg-gray-200 cursor-pointer">
            <i className="w-6 fa-solid fa-fire"></i>
            <label className="">Trending</label>
          </li>
        </ul>
      </div>
    );
  }
};

export default SideBar;
