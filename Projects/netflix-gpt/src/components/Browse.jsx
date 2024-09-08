import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpCommingMovies from "../hooks/useUpCommingMovies";
import GptSearchMainPage from "./GptSearchMainPage";
import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.gptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchMainPage />
      ) : (
        <>
          <MainContainer />
          <SeconderyContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
