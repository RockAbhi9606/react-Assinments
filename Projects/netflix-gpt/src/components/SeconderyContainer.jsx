import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SeconderyContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upCommingMovies = useSelector((store) => store.movies.upCommingMovies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-60 md:pl-12 relative z-20">
        <MovieList movieTypes={"Now Playing"} moviesList={nowPlayingMovies} />
        <MovieList movieTypes={"Popular"} moviesList={popularMovies} />
        <MovieList movieTypes={"Top Rated"} moviesList={topRatedMovies} />
        <MovieList movieTypes={"UpComming"} moviesList={upCommingMovies} />
      </div>
    </div>
  );
};

export default SeconderyContainer;
