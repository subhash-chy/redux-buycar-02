import * as actions from "../actions/action-types";

// Declaring initial state
const initialState = 1;
const buySellReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_CAR:
      return state + 1;
    case actions.SELL_CAR:
      return state - 1;
    default:
      return state;
  }
};

export default buySellReducer;
