import React from "react";
import DoughnutChart from "./DoughnutChart";
import styles from "./Summary.module.css";

const Summary = (props) => {
  const expenseTypeData = JSON.parse(`{
    "Clothes & Fashion": 0,
    "Education": 0,
    "Electricity": 0,
    "Electronics Appliance": 0,
    "Electronics Device": 0,
    "Entertainment": 0,
    "Food & Drink": 0,
    "Furniture": 0,
    "Grossary": 0,
    "House": 0,
    "Loan & EMI": 0,
    "Toys": 0,
    "Transportation": 0,
    "Travel": 0
  }`);

  // Reducing expense amount as per expense types.
  props.expenseList.forEach((item) => {
    expenseTypeData[item.type] = item.amount;
  });

  // Filter top 5 expense types
  const topExpenseTypes = Object.entries(expenseTypeData)
    .sort((prev, next) => next[1] - prev[1])
    .slice(0, 5)
    .filter((el) => el[1] > 0);

  let content = <div className={styles.not_found}>No Expenses Found!</div>;

  if (props.expenseList.length > 0) {
    content = (
      <React.Fragment>
        <div className={styles.doughnut_chart}>
          <DoughnutChart data={expenseTypeData} />
        </div>
        <div className={styles.top_expenses}>
          <h3>Top Expense Types</h3>
          <ul>
            {topExpenseTypes.map((el) => {
              return (
                <li key={el[0]}>
                  <span className={styles.expense_type_label}>{el[0]}</span>
                  <span>$ {el[1].toFixed(2)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className={styles.summary}>
      <h2>Summary</h2>
      {content}
    </div>
  );
};

export default Summary;
