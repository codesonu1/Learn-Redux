export const despositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "DEPOSITE",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "WITHDRAW",
      payload: amount,
    });
  };
};
