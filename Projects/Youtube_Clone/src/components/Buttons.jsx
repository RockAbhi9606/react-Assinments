import React from "react";

function Buttons({ name }) {
  return (
    <div className="px-5 py-1 m-2 mt-3 hover:bg-gray-500 hover:text-white bg-gray-300 rounded-lg">
      <button>{name}</button>
    </div>
  );
}

export default Buttons;
