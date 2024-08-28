import { useForm, FormProvider } from "react-hook-form";
import { CategoryCard } from "./CategoryCard";
import { CharacterName } from "./CharacterName";
import { Evaluation } from "./Evaluation";
import { CATEGORIES } from "../constants";
import { getEvaluatedFormData } from "../calculations";
import { useCharacterContext } from "../characterContext";

export const CharacterForm = () => {
  const { setCharacterData, setShowEvaluation } = useCharacterContext();

  const methods = useForm();
  const onSubmit = (data, e) => {
    const evaluatedData = getEvaluatedFormData(data);
    setCharacterData({
      evaluation: evaluatedData,
      scores: data,
    });
    setShowEvaluation(true);
  };
  const onError = (errors, e) => console.log(errors, e);

  const onReset = () => {
    setShowEvaluation(false);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <div>
            <CharacterName />
            <div className="categoryContainer">
              {CATEGORIES.map(({ id, displayName, traits }) => (
                <CategoryCard
                  key={id}
                  displayName={displayName}
                  traits={traits}
                />
              ))}
            </div>
            <button type="submit">Evaluate Character</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </FormProvider>
      <Evaluation />
    </div>
  );
};
