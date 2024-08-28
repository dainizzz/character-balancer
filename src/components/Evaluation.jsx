import { useCharacterContext } from "../characterContext";
import { Graph } from "./Graph";

export const Evaluation = () => {
  const { characterData, showEvaluation } = useCharacterContext();

  const evaluationCategories = [
    { heading: "Intelligence", key: "intelligence" },
    { heading: "Physical Qualities", key: "physical" },
    { heading: "Social Skills", key: "social" },
    { heading: "Virtuousness", key: "virtuousness" },
    { heading: "Overall", key: "overall" },
  ];

  let evaluation = <div>Error: Missing character information.</div>;

  if (showEvaluation) {
    evaluation = evaluationCategories.map(({ heading, key }) => (
      <div className="evalCard" key={key}>
        <h3 className="evalHeader">{heading}</h3>
        <div className="evalSection">
          <p>
            Score
            <br />
            {characterData?.evaluation[`${key}Score`]}
          </p>
          <p>
            Rating
            <br />
            {characterData?.evaluation[`${key}Rating`]}
          </p>
        </div>
      </div>
    ));
  }

  return (
    <div className="evaluationContainer">
      <div className="textEvaluation">{showEvaluation ? evaluation : null}</div>
      <div className="graphEvaluation">{showEvaluation ? <Graph /> : null}</div>
    </div>
  );
};
