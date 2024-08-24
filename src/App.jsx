import "./App.css";
import { Information } from "./components/Information";
import { CharacterForm } from "./components/CharacterForm";
import { CharacterContextProvider } from "./characterContext";

function App() {
  return (
    <CharacterContextProvider>
      <Information />
      <CharacterForm />
      <p>created by dainiz 🍓 </p>
    </CharacterContextProvider>
  );
}

export default App;
