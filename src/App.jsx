import { useState } from "react";
import "./App.css";
import Buttons from "./buttons/Buttons";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  return <Buttons activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
}

export default App;
