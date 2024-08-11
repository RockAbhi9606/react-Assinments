import React from "react";

function Comment({ data }) {
  const { name, text } = data;
  return (
    <div className="flex gap-4 items-start my-2 px-5 py-2 bg-slate-100 rounded-lg">
      <div>
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="mt-[-5px]">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Comment;
