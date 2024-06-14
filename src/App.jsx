import "./App.css";
import { CategoryCard } from "./assets/components/CategoryCard";
import { Information } from "./assets/components/Information";

function App() {
  const characterName = "Insert Name";

  return (
    <>
      <Information />
      <h2>{characterName}</h2>
      <button>+ Add Character</button>
      <CategoryCard category="Intelligence" />
      <CategoryCard category="Physical Qualities" />
      <CategoryCard category="Virtuousness" />
      <CategoryCard category="Social Skills" />
    </>
  );
}

export default App;
