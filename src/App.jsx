import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import HelloWorld from "./hello-world";
import HelloReact from "./helloreact";
import MiComponent from "./mi/mi-component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HelloWorld />
      <HelloReact />
      <HelloWorld />
      <MiComponent />
    </div>
  );
}

export default App;
