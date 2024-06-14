import { CategoryCard } from "./CategoryCard";
import { useForm } from "react-hook-form";

export const CharacterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { characterName: "Character Name" } });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>
        <input
          {...register("characterName", { required: true, maxLength: 20 })}
          type="text"
        />
      </h2>
      <CategoryCard category="INTELLIGENCE" />
      <CategoryCard category="PHYSICAL_QUALITIES" />
      <CategoryCard category="VIRTUOUSNESS" />
      <CategoryCard category="SOCIAL_SKILLS" />
      <button type="submit">Evaluate Character</button>
      <button>Save Draft</button>
      <button type="reset">Reset</button>
    </form>
  );
};
