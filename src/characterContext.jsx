import { useContext, createContext, useState } from "react";

// Note: This will be utilized in the second phase of development

export const defaultState = {
  currentCharacterId: "",
  characters: [],
  showEvaluation: false,
  setCurrentCharacterId: () => {},
  setCharacters: () => {},
  setShowEvaluation: () => {},
};

export const CharacterContext = createContext(defaultState);

export const useCharacterContext = () => useContext(CharacterContext);

export const CharacterContextProvider = ({ children }) => {
  const [currentCharacterId, setCurrentCharacterId] = useState("");
  const [characters, setCharacters] = useState([]);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const value = {
    currentCharacterId,
    setCurrentCharacterId,
    characters,
    setCharacters,
    showEvaluation,
    setShowEvaluation,
  };
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
