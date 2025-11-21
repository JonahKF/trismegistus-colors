import { useEffect } from "react";
// import data from "../data/orpheus.json";
import data from "../data/trismegistus-onyx.json";
import Partition from "./components/Partition.jsx";
import Terminal from "./components/Terminal.jsx";

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
    root.style.setProperty("--gray", data.gray);

    root.style.setProperty("--light-black", data.lightBlack);
    root.style.setProperty("--light-red", data.lightRed);
    root.style.setProperty("--light-green", data.lightGreen);
    root.style.setProperty("--light-yellow", data.lightYellow);
    root.style.setProperty("--light-blue", data.lightBlue);
    root.style.setProperty("--light-magenta", data.lightMagenta);
    root.style.setProperty("--light-cyan", data.lightCyan);
    root.style.setProperty("--white", data.white);
  }, []);

  return (
    <>
      <main>
        <div className="top-container">
          <h1>Trismegistus</h1>
          <h2>A basic color palette for your terminal, IDE and more</h2>

          <Partition />
          {/* Add click functionality to each shape, allowing click-to-copy hexcode of color */}
        </div>

        <Terminal />
        {/* Mock terminal, IDE, etc., with arrows on side of screen to cycle */}

        <div className="theme-btn-container">
          <button className="theme-btn onyx">Onyx</button>
          <button className="theme-btn slate">Slate</button>
          <button className="theme-btn papyrus">Papyrus</button>
        </div>
      </main>

      {/* 'I' button that brings up explanation */}
    </>
  );
}

export default App;
