import { BUY_CAR, IS_BUYABLE, SELL_CAR, UPDATE_PROFILE } from "./action-types";

export const buyCar = () => {
  return {
    type: BUY_CAR,
  };
};

export const sellCar = () => {
  return {
    type: SELL_CAR,
  };
};

export const toggleBuyable = () => {
  return {
    type: IS_BUYABLE,
  };
};

export const updateProfile = (name, address) => {
  //   const { name, address } = props;
  return {
    type: UPDATE_PROFILE,
    payload: {
      name,
      address,
    },
  };
};
