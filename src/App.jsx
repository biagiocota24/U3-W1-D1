import { useState } from "react";
import "./App.css";

import MyButtons from "./myComponents/Buttons";
import ImgComponents from "./myComponents/ImgComponents";

import Navbar from "./myComponents/Navbar";
import Footer from "./myComponents/Footer";
import Main from "./myComponents/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main className="flex-grow-1">
      <Main/>
    </main>
    <footer>
    <Footer data={new Date().getFullYear()}/>
    </footer>
    </>
  );
}

export default App;
