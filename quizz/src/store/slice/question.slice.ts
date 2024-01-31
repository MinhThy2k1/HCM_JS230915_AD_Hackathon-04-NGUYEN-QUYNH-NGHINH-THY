import { createSlice } from "@reduxjs/toolkit";
import { question } from "../../interfaces/question.interface";



interface InitState {
    data: question[] | null,
}
let initialState: InitState = {
    data: null,
}

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const questionReducer = questionSlice.reducer;
export const questionAction = questionSlice.actions;