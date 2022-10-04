import React from "react";
import logo from "../../../img/logo.svg";
import ExpenseForm from "./NewExpense/ExpenseForm";
import styles from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <div className={styles.sidebar}>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <ExpenseForm />
      <footer>
        <p>
          <span className="material-symbols-outlined">copyright</span>
          Copyright by Sanskar Maheshwari
        </p>
      </footer>
    </div>
  );
};

export default SideBar;
