import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import HelloWorld from "./hello-world";
import HelloReact from "./helloreact";
import MiComponent from "./mi/mi-component";
import BoxComponent from "./boxes/boxes";
import SymbolComponent from "./symbol/symbol";
import TopComponent from "./top/top";
import { boxesData } from "./data";
import { symbolData } from "./data";
import { topData } from "./data";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <HelloWorld />
      <HelloReact />
      <HelloWorld />
      <MiComponent /> */}
      <>
        <TopComponent data={topData} />
        <BoxComponent data={boxesData} />
        <BoxComponent data={boxesData} />
        <SymbolComponent data={symbolData} />
      </>
    </div>
  );
}

export default App;
