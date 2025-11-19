import { useEffect } from "react";
import data from "../data/trismegistus-onyx.json";
import Partition from "./components/Partition.jsx";

function App() {
  useEffect(() => {
    const root = document.querySelector(":root");

    root.style.setProperty("--background-color", data.backgroundColor);
    root.style.setProperty("--outline", data.outline);
    root.style.setProperty("--text-main", data.textMain);
    root.style.setProperty("--text-subdued", data.textSubdued);
    root.style.setProperty("--black", data.black);
    root.style.setProperty("--red", data.red);
    root.style.setProperty("--green", data.green);
    root.style.setProperty("--yellow", data.yellow);
    root.style.setProperty("--blue", data.blue);
    root.style.setProperty("--magenta", data.magenta);
    root.style.setProperty("--cyan", data.cyan);
    root.style.setProperty("--white", data.white);
    root.style.setProperty("--gray", data.gray);
  }, []);

  return (
    <>
      <main>
        <h1>Trismegistus</h1>
        <h2>A basic color palette for your terminal, IDE and more</h2>

        <Partition />

        {/* Mock terminal, IDE, etc. */}
      </main>

      {/* 'I' button that brings up explanation */}
    </>
  );
}

export default App;
