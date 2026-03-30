import { createSlice } from "@reduxjs/toolkit";

type ChatSlice = {
    messages: string[]
}
const initialState: ChatSlice = {
    messages: []
}
const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        }
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;