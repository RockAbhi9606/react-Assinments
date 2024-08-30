import { createSlice } from "@reduxjs/toolkit";
import useUpCommingMovies from "../hooks/useUpCommingMovies";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upCommingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },

        addUpComingMovies: (state, action) => {
            state.upCommingMovies = action.payload;
        },

        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;