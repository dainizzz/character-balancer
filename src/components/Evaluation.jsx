import { useCharacterContext } from "../characterContext";

export const Evaluation = () => {
  const { characters, currentCharacterId, showEvaluation } =
    useCharacterContext();

  const evaluationCategories = [
    { heading: "Intelligence", key: "intelligence" },
    { heading: "Physical Qualities", key: "physical" },
    { heading: "Social Skills", key: "social" },
    { heading: "Virtuousness", key: "virtuousness" },
    { heading: "Overall", key: "overall" },
  ];

  let characterInfo = null;

  let evaluation = <div>Error: Missing character information.</div>;

  // TODO: Figure out why this runs multiple times on submit
  if (showEvaluation) {
    console.log({ characters });
    characterInfo = characters.find(
      (character) => character.id === currentCharacterId
    );
    console.log({ characterInfo });
    evaluation = evaluationCategories.map(({ heading, key }) => (
      <div className="evalCard" key={key}>
        <h3 className="evalHeader">{heading}</h3>
        <div className="evalSection">
          <p>
            Score
            <br />
            {characterInfo.evaluation[`${key}Score`]}
          </p>
          <p>
            Rating
            <br />
            {characterInfo.evaluation[`${key}Rating`]}
          </p>
        </div>
      </div>
    ));
    console.log({ evaluation });
  }

  return <div>{showEvaluation ? evaluation : null}</div>;
};
