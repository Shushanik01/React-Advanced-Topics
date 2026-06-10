import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from '../slices/silce'

const store = configureStore({
    reducer:{
        userData: userDataReducer
    }
})
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store