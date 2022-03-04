import { createStore } from "redux";
import allReducres from "./reducers";

// Create a store for keeping global state
const store = createStore(allReducres);

export default store;
