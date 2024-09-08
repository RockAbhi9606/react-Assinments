import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        langauge: "en"
    },
    reducers: {
        changeLangauge: (state, action) => {
            state.langauge = action.payload
        }
    }

})

export const { changeLangauge } = configSlice.actions
export default configSlice.reducer