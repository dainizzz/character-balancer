import { useContext, createContext, useState } from "react";

export const defaultState = {
  characterData: {},
  setCharacterData: () => {},
  showEvaluation: false,
  setShowEvaluation: () => {},
};

export const CharacterContext = createContext(defaultState);

export const useCharacterContext = () => useContext(CharacterContext);

export const CharacterContextProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState({});
  const [showEvaluation, setShowEvaluation] = useState(false);
  const value = {
    characterData,
    setCharacterData,
    showEvaluation,
    setShowEvaluation,
  };
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
