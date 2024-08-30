import React from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ movieTypes, moviesList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Number of movie cards to show at once
    slidesToScroll: 3, // Number of movie cards to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl pb-6 text-white">{movieTypes}</h1>
      <Slider {...settings}>
        {moviesList?.map((movie) => (
          <div key={movie.id} className="ml-5">
            <MovieCard movieList={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
