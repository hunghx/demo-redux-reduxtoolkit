// import { createStore } from "redux";
import { userSlice } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

// export const store = createStore(reducer)

export const store = configureStore({
    reducer: userSlice.reducer
})
