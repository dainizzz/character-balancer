import { ResponsiveRadar } from "@nivo/radar";
import { useCharacterContext } from "../characterContext";

const theme = {
  text: {
    fontSize: 16,
    fill: "#ffffff",
  },
  tooltip: {
    container: {
      background: "#000000",
    },
  },
};

export const Graph = () => {
  const { characterData } = useCharacterContext();

  const data = characterData?.evaluation?.graphData ?? [];

  return (
    <ResponsiveRadar
      data={data}
      keys={["score"]}
      indexBy="attribute"
      margin={{ top: 80, right: 180, bottom: 80, left: 180 }}
      theme={theme}
    />
  );
};
