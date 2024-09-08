import React, { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieTypes, moviesList }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Function to handle horizontal scrolling with mouse wheel
    const handleWheelScroll = (event) => {
      event.preventDefault(); // Prevent the default vertical scroll behavior
      scrollContainer.scrollLeft += event.deltaY * 2; // Adjust scroll speed (2 is for faster scrolling)
    };

    // Add the event listener for the mouse wheel
    scrollContainer.addEventListener("wheel", handleWheelScroll);

    // Cleanup the event listener on component unmount
    return () => {
      scrollContainer.removeEventListener("wheel", handleWheelScroll);
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl pb-6 text-white">{movieTypes}</h1>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden scrollbar-none space-x-4 scroll-smooth"
        style={{ scrollBehavior: "smooth" }} // Ensure smooth scrolling is enabled
      >
        {moviesList?.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-40 md:w-44">
            <MovieCard movieList={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
