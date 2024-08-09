import React from "react";
import Buttons from "./Buttons";

function ButtonList() {
  const buttons = [
    "All",
    "Cricket",
    "News",
    "Cooking",
    "Sports",
    "Cartoon",
    "Music",
    "Live",
    "Courses",
    "Events",
    "JavaScript",
  ];
  return (
    <div className="flex">
      {buttons.map((button, index) => {
        return <Buttons key={index} name={button} />;
      })}
    </div>
  );
}

export default ButtonList;
