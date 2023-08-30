import React from 'react'

var in_state={width:20};
const Reducer = (state = in_state, action) => {
  if (action.type === "outside") {
    return {
      ...state,
      width: "0",
    };
  } else if (action.type === "inside") {
    return {
      ...state,
      width: "20",
    };
  } else {
    return state;
  }
};

export default Reducer