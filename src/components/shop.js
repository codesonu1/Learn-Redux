import React from "react";
import { useDispatch } from "react-redux";
import action from "../state";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, despositMoney } = bindActionCreators(action, dispatch);
  return (
    <>
      <div className="container">
        {/* <h1 className="my-3">Bank of Sonu</h1>
        <button
          className="btn btn-primary mx-2 "
          onClick={() => {
            dispatch(action.withdrawMoney(100));
          }}
        >
          -
        </button>
        Update Money
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(action.despositMoney(100));
          }}
        >
          +
        </button> */}
        <h1 className="my-3">Bank of Sonu</h1>
        <button
          className="btn btn-primary mx-2 "
          onClick={() => {
            withdrawMoney(100);
          }}
        >
          -
        </button>
        Update Money
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            despositMoney(100);
          }}
        >
          +
        </button>
      </div>{" "}
    </>
  );
};

export default Shop;
