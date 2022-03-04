import { UPDATE_PROFILE } from "../actions/action-types";

const initialState = {
  name: "Subash",
  age: "20",
  address: { temporary: "KTM", permanent: "KV" },
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        name: action.payload.name,
        address: {
          ...state.address,
          temporary: action.payload.address,
        },
      };

    default:
      return state;
  }
};

export default profileReducer;
