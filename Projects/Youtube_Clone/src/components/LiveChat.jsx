import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../redux_store/sliceses/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utilities/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const liveChat = useSelector((state) => state.chat.messages) || [];
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      {liveChat.map((chat) => {
        return (
          <div className="flex gap-2 mb-2">
            <i className="mt-[0.45rem] fa-regular fa-message"></i>
            <div>
              <span>{chat.name}</span>
              <span className="ml-3 font-semibold">{chat.message}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default LiveChat;
