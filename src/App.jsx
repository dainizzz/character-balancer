import "./App.css";
import { Information } from "./assets/components/Information";
import { CharacterForm } from "./assets/components/CharacterForm";
import { Evaluation } from "./assets/components/Evaluation";
import { CharacterContextProvider } from "./characterContext";

function App() {
  return (
    <CharacterContextProvider>
      <Information />
      <button>+ Add Character</button>
      <CharacterForm />
      <Evaluation />
      <p>created by dainiz 🍓 </p>
    </CharacterContextProvider>
  );
}

export default App;
