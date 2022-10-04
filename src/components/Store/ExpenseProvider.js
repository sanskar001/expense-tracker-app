import React, { useReducer } from "react";
import ExpenseContext from "./expense-context";

const defaultState = {
  expenseItems:
    JSON.parse(localStorage.getItem("expenseTracker"))?.expenseItems || [],
  filter: "lifetime",
};

const expenseReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      expenseItems: [action.item].concat(state.expenseItems),
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      expenseItems: state.expenseItems.filter((item) => item.id !== action.id),
    };
  }
  if (action.type === "FILTER") {
    return {
      ...state,
      filter: action.value,
    };
  }

  return defaultState;
};

const ExpenseProvider = (props) => {
  const [expenseState, dispatchExpense] = useReducer(
    expenseReducer,
    defaultState
  );

  const addExpenseItemHandler = (item) => {
    dispatchExpense({ type: "ADD_ITEM", item: item });
  };

  const removeExpenseItemHandler = (id) => {
    dispatchExpense({ type: "REMOVE_ITEM", id: id });
  };

  const changeExpenseFilterHandler = (filterVal) => {
    dispatchExpense({ type: "FILTER", value: filterVal });
  };

  const expenseContext = {
    expenseItems: expenseState.expenseItems,
    filter: expenseState.filter,
    addExpense: addExpenseItemHandler,
    removeExpense: removeExpenseItemHandler,
    changeFilter: changeExpenseFilterHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
