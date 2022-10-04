import React from "react";

const ExpenseContext = React.createContext({
  expenseItems:
    JSON.parse(localStorage.getItem("expenseTracker"))?.expenseItems || [],
  filter: "lifetime",
  addExpense: (item) => {},
  removeExpense: (id) => {},
  changeFilter: (val) => {},
});

export default ExpenseContext;
