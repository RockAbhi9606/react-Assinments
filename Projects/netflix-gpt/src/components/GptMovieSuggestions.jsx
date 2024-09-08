import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  console.log(movieResults)

  if (!movieNames) return null;
  return (
    <div className="text-white p-2 mx-0 md:mx-8 md:p-4">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={index}
          movieTypes={movieName}
          moviesList={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
