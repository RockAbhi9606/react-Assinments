import React, { useState } from "react";
import langaues from "../utils/langaugeConstent";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS, GOOGLE_AI_KEY } from "../utils/constent";
import { addGptSearchMovies } from "../redux/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const [gptInputText, setGptInputText] = useState("");
  const dispatch = useDispatch();
  const selectLangauge = useSelector(
    (store) => store.selectedLangauge.langauge
  );

  const gptSearchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchText = async () => {
    const genAI = new GoogleGenerativeAI(GOOGLE_AI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      gptInputText +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const result = await model.generateContent(gptQuery);
    const gptMovies = result.response.text().split(",");

    // Make an API call to GPT API and get Movie Results

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   gptInputText +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);

    // const gptMovies = [
    //   "Andaz Apna Apna",
    //   "Hera Pheri",
    //   "Chupke Chupke",
    //   "Jaane Bhi Do Yaaro",
    //   "Padosan",
    // ];

    // For each movie I will search TMDB API]
    const promiseArray = gptMovies.map((movie) => gptSearchMovies(movie));
    const getTMDBResults = await Promise.all(promiseArray);
    dispatch(
      addGptSearchMovies({
        movieNames: gptMovies,
        movieResults: getTMDBResults,
      })
    );
  };

  return (
    <div className="pt-[8%] flex justify-center -mt-[65%]">
      <form
        className="bg-gray-700 p-4 m-4 grid grid-cols-12 gap-2 rounded-lg mt-24 md:mt-0 w-full md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 col-span-9 md:col-span-10 rounded-lg outline-none md:placeholder:text-sm placeholder:text-xs md:px-5"
          type="text"
          value={gptInputText}
          placeholder={langaues[selectLangauge]?.gptSearchPlaceholder}
          onChange={(e) => setGptInputText(e.target.value)}
        />
        <button
          title={langaues[selectLangauge]?.Search}
          className="text-white font-semibold bg-red-500 px-4 py-2 rounded-lg col-span-3 md:col-span-2 flex justify-center text-xs md:text-sm items-center"
          onClick={handleGptSearchText}
        >
          {langaues[selectLangauge]?.Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
