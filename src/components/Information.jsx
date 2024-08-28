import { useState } from "react";

const displayContent = {
  header: "Character Balancer",
  prependText: "How to use:",
  instructions:
    "For each pair of adjectives, evaluate where your character falls on the scale and click on the appropriate button. Once you've completed your evaluation, you will see a category-by-category & overall breakdown of how balanced your character is.",
  hideLabel: "Hide Instructions",
  showLabel: "Show Instructions",
};

export const Information = () => {
  const [isShown, setIsShown] = useState(true);

  const { header, prependText, instructions, hideLabel, showLabel } =
    displayContent;

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <h1>{header}</h1>
      {!isShown ? null : (
        <p>
          {prependText}
          <br /> {instructions}
        </p>
      )}
      <button className="instructionsButton" onClick={handleClick}>
        {isShown ? hideLabel : showLabel}
      </button>
    </div>
  );
};
