import React from "react";
import { IMAGE_CDN_URL, IMAGE_NOT_FOUND_URL } from "../utils/constent";

const MovieCard = ({ movieList }) => {
  const { poster_path, original_title } = movieList;
  return (
    <div className="w-36 rounded-lg overflow-hidden cursor-pointer">
      {poster_path ? (
        <img src={IMAGE_CDN_URL + poster_path} alt={original_title} />
      ) : (
        <img src={IMAGE_NOT_FOUND_URL} alt={original_title} />
      )}
    </div>
  );
};

export default MovieCard;
