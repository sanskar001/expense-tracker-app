import React from "react";
import Button from "../UI/Button/Button";
import piggi from "../../img/piggi-image.png";
import styles from "./HeroScreen.module.css";

const HeroScreen = (props) => {
  return (
    <div className={styles.hero_screen}>
      <img src={piggi} alt="piggi bank" />
      <h1>
        <span>EXPENSE</span> Tracker
      </h1>
      <p>
        The right app make it easy to manage your expense on the go. Personal
        capital. Expensify
      </p>
      <Button className={styles.start_btn} onClick={props.onClose}>
        Lets Track!
      </Button>
    </div>
  );
};

export default HeroScreen;
