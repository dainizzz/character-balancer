import { useForm, FormProvider } from "react-hook-form";

import { CategoryCard } from "./CategoryCard";
import { CharacterName } from "./CharacterName";
import { CATEGORIES } from "../constants";

export const CharacterForm = () => {
  const methods = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <div>
          <CharacterName />
          {CATEGORIES.map(({ id, displayName, traits }) => (
            <CategoryCard key={id} displayName={displayName} traits={traits} />
          ))}
          <button type="submit">Evaluate Character</button>
          <button>Save Draft</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </FormProvider>
  );
};
