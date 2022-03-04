import { IS_BUYABLE } from "../actions/action-types";

const initialState = true;

const IsBuyableReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_BUYABLE:
      return !state;

    default:
      return state;
  }
};

export default IsBuyableReducer;
