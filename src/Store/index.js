import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./userName";


const store = configureStore({
  reducer: { user: userNameReducer },
});


export default store;