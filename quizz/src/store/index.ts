import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionReducer } from "./slice/question.slice";
const RootReducer = combineReducers({
    questionStore: questionReducer,

})

export type Store = ReturnType<typeof RootReducer>;

export const store = configureStore({
    reducer: RootReducer
})