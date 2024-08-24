import { useCharacterContext } from "../characterContext";
export const CharacterTab = ({ characterName, key }) => {
  const { setCurrentCharacterId } = useCharacterContext();
  // this should make the current character displayed be this character
  const handleOnClick = () => {
    setCurrentCharacterId(key);
  };

  return <div onClick={handleOnClick}>{characterName}</div>;
};
