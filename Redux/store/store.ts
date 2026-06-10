import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{

    }
})
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>