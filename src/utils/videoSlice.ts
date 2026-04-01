import { createSlice } from "@reduxjs/toolkit";

interface Items {
    etag: string,
    id: Map<string, string>,
    kind: string,
    snippet: Map<string, unknown>
}

interface Video {
    items: Items[]
}

const initialState: Video = {
    items: []
}

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        addVideos: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const {addVideos} = videoSlice.actions;
export default videoSlice.reducer;