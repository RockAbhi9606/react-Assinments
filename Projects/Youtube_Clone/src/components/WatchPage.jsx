import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux_store/sliceses/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addMessages } from "../redux_store/sliceses/chatSlice";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex gap-5">
      <div>
        <div className="flex items-center gap-1 text-xl px-2 py-1 w-[85px] mx-5 mt-6 text-white font-semibold bg-green-500 rounded-lg">
          <i className="fa-sharp fa-solid fa-rotate-left"></i>
          <button
            onClick={() => {
              history.back();
            }}
          >
            Back
          </button>
        </div>
        <div>
          <iframe
            width="1000"
            height="550"
            className="p-5 rounded-[2.5rem]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Like share subscribe */}
        <div className="mx-5 text-xl font-semibold bg-red-400 rounded-lg mb-6">
          <p className="p-2">like share subscriptions</p>
        </div>

        {/* comment section */}
        <div>
          <CommentsContainer />
        </div>
      </div>

      {/* live chat */}
      <div className="border-b-2 border-gray-600 mt-11 text-xl font-bold pb-3">
        Live Chat
      </div>
      <div className="bg-slate-100 shadow-lg px-4 py-5 m-2 mt-20 h-[510px] w-96 overflow-auto rounded-lg flex flex-col-reverse ml-[-108px]">
        <form
          className="flex items-center justify-between"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessages({
                name: "Abhishek",
                message: liveMessage,
              })
            );
            setLiveMessage("")
          }}
        >
          <input
            className="w-64 px-2 py-1 outline-none bg-transparent border-b-2 mt-4"
            type="text"
            placeholder="Enter your message"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="px-2 py-1 bg-blue-500 rounded-lg text-white font-semibold">
            Send
          </button>
        </form>
        <div>
          <LiveChat liveMessage={liveMessage} />
        </div>
      </div>
    </div>
  );
}

export default WatchPage;
