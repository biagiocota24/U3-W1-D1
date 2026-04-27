import { useState } from "react";
import "./App.css";

import MyButtons from "./myComponents/Buttons";
import ImgComponents from "./myComponents/ImgComponents";

import Navbar from "./myComponents/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <header>
      <Navbar/>
    </header>
    </>
  );
}

export default App;
