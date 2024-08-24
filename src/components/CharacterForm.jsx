import { useForm, FormProvider } from "react-hook-form";
import { CategoryCard } from "./CategoryCard";
import { CharacterName } from "./CharacterName";
import { Evaluation } from "./Evaluation";
import { CATEGORIES } from "../constants";
import { evaluateFormData } from "../calculations";
import { useCharacterContext } from "../characterContext";
import { v4 as uuidv4 } from "uuid";

export const CharacterForm = () => {
  const {
    characters,
    setCharacters,
    currentCharacterId,
    setCurrentCharacterId,
    setShowEvaluation,
  } = useCharacterContext();

  const methods = useForm();
  const onSubmit = (data, e) => {
    const characterId = uuidv4();
    setCurrentCharacterId(characterId);
    const evaluatedData = evaluateFormData(data);
    setCharacters([
      ...characters,
      {
        id: characterId,
        evaluation: evaluatedData,
        scores: data,
      },
    ]);
    setShowEvaluation(true);
    console.log({ evaluatedData, characters, currentCharacterId });
  };
  const onError = (errors, e) => console.log(errors, e);

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
