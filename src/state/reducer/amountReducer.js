const reducer = (state = 0, action) => {
  if (action.type === "DEPOSITE") {
    return state + action.payload;
  } else if (action.type === "WITHDRAW") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
