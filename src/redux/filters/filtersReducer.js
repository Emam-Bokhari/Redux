import { CHANGECOLOR, STATUS } from "./actionTypes";
import initialState from "./initialState";

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return {
        ...state,
        status: action.payload.status,
      };
    case CHANGECOLOR: {
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added": 
          return {
            ...state,
            color: [...state.color, color],
          };
        case "removed": 
          return {
            ...state,
            color: state.color.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default: 
          return state;
      }
    }

    default:
      return state;
  }
};

export default filtersReducer;
