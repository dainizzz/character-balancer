import { useFormContext } from "react-hook-form";

const displayContent = {
  characterName: "Character Name:",
};

export const CharacterName = () => {
  const { register } = useFormContext({
    defaultValues: { characterName: "Character Name" },
  });
  return (
    <h2 className="charName">
      {displayContent.characterName}
      <input
        className="nameField"
        {...register("characterName", { required: true, maxLength: 20 })}
        type="text"
      />
    </h2>
  );
};
