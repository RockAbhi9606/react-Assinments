import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { FORGOT_PASSWORD_IMG_URL } from "../utils/constent";

const GptSearchMainPage = () => {
  return (
    <div className="bg-black">
      <img
        className="h-full w-full"
        src={FORGOT_PASSWORD_IMG_URL}
        alt="bg-img"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchMainPage;
