import { ResponsiveRadar } from "@nivo/radar";
import { useCharacterContext } from "../characterContext";

export const Graph = () => {
  const { characterData } = useCharacterContext();

  const data = characterData?.evaluation?.graphData ?? [];
  console.log(data);
  console.log(characterData);

  return (
    <ResponsiveRadar
      data={data}
      keys={["score"]}
      indexBy="attribute"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    />
  );
};
