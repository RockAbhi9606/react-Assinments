import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux_store/sliceses/appSlice";

const Header = () => {
  const dispatch = useDispatch();

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
      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center border border-gray-300 border-r-0 rounded-l-full overflow-hidden px-4 h-10 outline-none">
          <input
            className="w-96 outline-none py-[1px]"
            type="text"
            placeholder="Search"
          />
        </div>
        <button
          title="Search"
          className="text-lg border border-gray-300 w-16 bg-gray-200 h-10 rounded-r-full"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
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
