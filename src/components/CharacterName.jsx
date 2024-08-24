import { useFormContext } from "react-hook-form";

export const CharacterName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext({ defaultValues: { characterName: "Character Name" } });
  return (
    <h2 className="curCharName">
      <input
        {...register("characterName", { required: true, maxLength: 20 })}
        type="text"
      />
    </h2>
  );
};
