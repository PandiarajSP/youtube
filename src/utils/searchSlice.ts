import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
    [key: string]: string[];
}

const initialState: SearchState = {};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        cacheResults: (state, action: PayloadAction<SearchState>) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;