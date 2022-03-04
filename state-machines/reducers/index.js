import { combineReducers } from "redux";
import buySellReducer from "./buy-sell";
import IsBuyableReducer from "./isBuyable";
import profileReducer from "./update-profile";

// Combining all the reducers to make a single reducer
const allReducres = combineReducers({
  buySellReducer,
  IsBuyableReducer,
  profileReducer,
});

export default allReducres;
