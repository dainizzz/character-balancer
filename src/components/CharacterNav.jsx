import { CharacterTab } from "./CharacterTab";
import { NewCharacterButton } from "./NewCharacterButton";
import { useCharacterContext } from "../characterContext";

export const CharacterNav = () => {
  const { characters } = useCharacterContext();
  // characters: [{id:"", evaluation:{}, scores:{}}]
  // current character: characters[0]
  // character name: scores.characterName
  // character id: id

  const characterTabs = characters.map(({ id, scores }) => (
    <CharacterTab key={id} characterName={scores.characterName} />
  ));

  return (
    <div>
      <NewCharacterButton />
      {characterTabs}
    </div>
  );
};
