import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt-search',
    initialState: {
        gptSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        gptSearchView: (state) => {
            state.gptSearch = !state.gptSearch
        },

        addGptSearchMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }

    }
})

export const { gptSearchView, addGptSearchMovies } = gptSlice.actions
export default gptSlice.reducer