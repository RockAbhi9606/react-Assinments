import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ movieTypes, moviesList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Adjust based on the number of cards you want to show at a time
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="p-4 ml-4">
      <h1 className="text-3xl pb-6 text-white">{movieTypes}</h1>
      <Slider {...settings}>
        {moviesList?.map((movie) => (
          <div key={movie.id} className="px-2">
            <MovieCard movieList={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
