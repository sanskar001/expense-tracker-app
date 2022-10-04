import React, { useState } from "react";
import styles from "./UserNameForm.module.css";
import Button from "../Button/Button";

const UserNameForm = (props) => {
  const usernameRegex = /^[a-zA-z][a-zA-z0-9\s]*$/;
  const [enteredUsername, setEnteredUsername] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(true);

  const usernameChangeHandler = (event) => {
    const inputText = event.target.value;
    setEnteredUsername(inputText);
    setIsValidUsername(
      inputText.trim() !== 0 && usernameRegex.test(inputText.trim())
    );
  };

  const usernameSubmitHandler = (event) => {
    event.preventDefault();

    // Form Validation - Invalid : when username is empty, starts with number and includes special characters.
    if (
      enteredUsername.trim().length === 0 ||
      !usernameRegex.test(enteredUsername.trim())
    ) {
      console.error("Invalid Username!");
      setIsValidUsername(false);
      return;
    }

    setIsValidUsername(true);
    props.onSubmitUsername(enteredUsername.trim().toLowerCase());
    setEnteredUsername("");
  };

  return (
    <React.Fragment>
      <h2 className={styles.modal_heading}>Welcome to Expense Tracker</h2>
      <form className={styles.username_form} onSubmit={usernameSubmitHandler}>
        <div>
          <label htmlFor="username">Your Name?</label>
          <input
            type="text"
            id="username"
            className={isValidUsername === false ? styles.invalid : ""}
            autoFocus
            autoComplete="off"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
        </div>
        <div className={styles.actions}>
          <Button className={styles.cancel_btn} onClick={props.onCloseModal}>
            Cancel
          </Button>
          <Button
            type="submit"
            className={styles.success_btn}
            onClick={props.onSuccess}
          >
            Enter
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UserNameForm;
