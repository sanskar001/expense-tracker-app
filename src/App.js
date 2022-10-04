import React, { useState, useRef, useEffect } from "react";

import HeroScreen from "./components/HeroScreen/HeroScreen";
import Board from "./components/Board/Board";
import ExpenseProvider from "./components/Store/ExpenseProvider";

function App() {
  const isModalShown = useRef(null);
  const [heroScreenIsShown, setHeroScreenIsShown] = useState(true);

  // Checking local storage
  useEffect(() => {
    const localexpenseTracker = JSON.parse(
      localStorage.getItem("expenseTracker")
    );

    if (localexpenseTracker?.expenseItems.length > 0) {
      setHeroScreenIsShown(false);
    }
  }, []);

  const closeHeroScreenHandler = () => {
    setHeroScreenIsShown(false);
    isModalShown.current = true;
  };

  const showHeroScreenHandler = () => {
    setHeroScreenIsShown(true);
  };

  return (
    <ExpenseProvider>
      {heroScreenIsShown && <HeroScreen onClose={closeHeroScreenHandler} />}
      {!heroScreenIsShown && (
        <Board
          onShowHeroScreen={showHeroScreenHandler}
          showModal={isModalShown.current}
        />
      )}
    </ExpenseProvider>
  );
}

export default App;
