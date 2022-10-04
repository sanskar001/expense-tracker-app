import React from "react";
import styles from "./DeleteModal.module.css";
import Button from "../Button/Button";
import ExpenseDate from "../../Board/Expenses/ExpenseDate";

const DeleteModal = (props) => {
  const { title, amount, date } = props.selectedItem;

  return (
    <React.Fragment>
      <div className={styles.delete_modal}>
        <h2 className={styles.modal_heading}>
          Do you want to delete this expense?
        </h2>
        <div className={styles.expense_info}>
          <span>{title}</span>
          <ExpenseDate date={date} />
          <span>$ {amount}</span>
        </div>
        <div className={styles.actions}>
          <Button className={styles.cancel_btn} onClick={props.onCloseModal}>
            Cancel
          </Button>
          <Button
            type="submit"
            className={styles.success_btn}
            onClick={props.onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DeleteModal;
