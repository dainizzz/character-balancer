import "./App.css";
import { Information } from "./assets/components/Information";
import { CharacterForm } from "./assets/components/CharacterForm";

function App() {
  return (
    <>
      <Information />
      <button>+ Add Character</button>
      <CharacterForm />
      <p>created by dainiz 🍓 </p>
    </>
  );
}

export default App;
