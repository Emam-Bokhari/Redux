import { CHANGECOLOR, STATUS } from "./actionTypes";

export const changeColor = (color, changeType) => {
  return {
    type: CHANGECOLOR,
    payload: {
      color: color,
      changeType: changeType,
    },
  };
};

export const status = (status) => {
  return {
    type: STATUS,
    payload: {
      status: status,
    },
  };
};
