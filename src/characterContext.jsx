import { useContext, createContext, useState } from "react";

export const defaultState = {
  currentCharacterId: "",
  characters: {},
  setCurrentCharacterId: () => {},
  setCharacters: () => {},
};

export const CharacterContext = createContext(defaultState);

export const useCharacterContext = () => useContext(CharacterContext);

export const CharacterContextProvider = ({ children }) => {
  const [currentCharacterId, setCurrentCharacterId] = useState("");
  const [characters, setCharacters] = useState({});
  const value = {
    currentCharacterId,
    setCurrentCharacterId,
    characters,
    setCharacters,
  };
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
