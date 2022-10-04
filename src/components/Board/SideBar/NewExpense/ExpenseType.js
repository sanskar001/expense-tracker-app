import React from "react";

const expenseTypeData = [
  { id: "t1", value: "Clothes & Fashion", icon: "styler" },
  { id: "t2", value: "Education", icon: "school" },
  { id: "t3", value: "Electricity", icon: "bolt" },
  { id: "t4", value: "Electronics Appliance", icon: "kitchen" },
  { id: "t5", value: "Electronics Device", icon: "smartphone" },
  { id: "t6", value: "Entertainment", icon: "sports_esports" },
  { id: "t7", value: "Food & Drink", icon: "restaurant" },
  { id: "t8", value: "Furniture", icon: "chair" },
  { id: "t9", value: "Grossary", icon: "store" },
  { id: "t10", value: "House", icon: "house" },
  { id: "t11", value: "Loan & EMI", icon: "paid" },
  { id: "t12", value: "Toys", icon: "toys" },
  { id: "t13", value: "Transportation", icon: "transportation" },
  { id: "t14", value: "Travel", icon: "hiking" },
];

const ExpenseType = (props) => {
  const expenseTypeChangeHandler = (event) => {
    const selectedExpenseType = expenseTypeData.find((option) => {
      return option.value === event.target.value;
    });
    props.onGetExpenseType(selectedExpenseType);
  };

  return (
    <React.Fragment>
      <label htmlFor="expense_type">Expense Type</label>

      <select
        id="expense_type"
        onChange={expenseTypeChangeHandler}
        value={props.selectedValue}
      >
        <option key="t0" value="" disabled hidden>
          Select type
        </option>
        {expenseTypeData.map((data) => {
          return (
            <option key={data.id} value={data.value}>
              {data.value}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default ExpenseType;
