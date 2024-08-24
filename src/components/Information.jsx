import { useState } from "react";

export const Information = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const instructions =
    "For each pair of adjectives, evaluate where your character falls on the scale and click on the appropriate button. Once you've completed your evaluation, you will see a category-by-category & overall breakdown of how balanced your character is.";

  return (
    <div>
      <h1>Character Balancer</h1>
      {!isShown ? null : (
        <p>
          How to use:
          <br /> {instructions}
        </p>
      )}
      <button className="instructionsButton" onClick={handleClick}>
        {isShown ? "Hide Instructions" : "Show Instructions"}
      </button>
    </div>
  );
};
