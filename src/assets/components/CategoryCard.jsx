import { CATEGORIES } from "../constants";
import { useForm } from "react-hook-form";

export const CategoryCard = ({ category }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const listItems = CATEGORIES[category].map((trait) => (
    <tr>
      <td>{trait["leftTrait"]}</td>
      <td>
        <input
          {...register(trait["leftTrait"], { required: true })}
          type="radio"
          name={trait["leftTrait"]}
          value="1"
        ></input>
      </td>
      <td>
        <input
          {...register(trait["leftTrait"], { required: true })}
          type="radio"
          name={trait["leftTrait"]}
          value="2"
        ></input>
      </td>
      <td>
        <input
          {...register(trait["leftTrait"], { required: true })}
          type="radio"
          name={trait["leftTrait"]}
          value="3"
        ></input>
      </td>
      <td>
        <input
          {...register(trait["leftTrait"], { required: true })}
          type="radio"
          name={trait["leftTrait"]}
          value="4"
        ></input>
      </td>
      <td>
        <input
          {...register(trait["leftTrait"], { required: true })}
          type="radio"
          name={trait["leftTrait"]}
          value="5"
        ></input>
      </td>
      <td>{trait["rightTrait"]}</td>
    </tr>
  ));

  return (
    <>
      <h3>{category}</h3>
      <table>
        <tbody>{listItems}</tbody>
      </table>
    </>
  );
};
