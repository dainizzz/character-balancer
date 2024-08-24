import { useFormContext } from "react-hook-form";

export const CategoryCard = ({ displayName, traits }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const listItems = traits.map(({ leftTrait, rightTrait }) => (
    <tr key={`${leftTrait}-${rightTrait}`}>
      <td>{leftTrait}</td>
      {[1, 2, 3, 4, 5].map((value) => (
        <td key={value}>
          <input
            {...register(`${displayName}.${leftTrait}`, { required: true })}
            type="radio"
            name={`${displayName}.${leftTrait}`}
            value={value.toString()}
          ></input>
        </td>
      ))}
      <td>{rightTrait}</td>
    </tr>
  ));

  return (
    <>
      <h3>{displayName}</h3>
      <table>
        <tbody>{listItems}</tbody>
      </table>
    </>
  );
};
