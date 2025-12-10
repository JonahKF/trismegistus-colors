import { useState, useEffect } from "react";

import onyx from "../data/trismegistus-onyx.json";
import slate from "../data/trismegistus-slate.json";
import papyrus from "../data/trismegistus-papyrus.json";

import Partition from "./components/Partition.jsx";
import Terminal from "./components/Terminal.jsx";

const themes = {
  onyx,
  slate,
  papyrus,
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("onyx");

  const applyTheme = (themeData) => {
    const root = document.querySelector(":root");

    root.style.setProperty("--background-color", themeData.backgroundColor);
    root.style.setProperty("--outline", themeData.outline);
    root.style.setProperty("--text-color", themeData.textMain);
    root.style.setProperty("--text-subdued", themeData.textSubdued);

    root.style.setProperty("--black", themeData.black);
    root.style.setProperty("--red", themeData.red);
    root.style.setProperty("--green", themeData.green);
    root.style.setProperty("--yellow", themeData.yellow);
    root.style.setProperty("--blue", themeData.blue);
    root.style.setProperty("--magenta", themeData.magenta);
    root.style.setProperty("--cyan", themeData.cyan);
    root.style.setProperty("--gray", themeData.gray);

    root.style.setProperty("--light-black", themeData.lightBlack);
    root.style.setProperty("--light-red", themeData.lightRed);
    root.style.setProperty("--light-green", themeData.lightGreen);
    root.style.setProperty("--light-yellow", themeData.lightYellow);
    root.style.setProperty("--light-blue", themeData.lightBlue);
    root.style.setProperty("--light-magenta", themeData.lightMagenta);
    root.style.setProperty("--light-cyan", themeData.lightCyan);
    root.style.setProperty("--white", themeData.white);
  };

  useEffect(() => {
    const themeData = themes[currentTheme];
    if (themeData) {
      applyTheme(themeData);
    }
  }, [currentTheme]);

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
  };

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
          <button
            className="theme-btn onyx"
            onClick={() => handleThemeChange("onyx")}
          >
            Onyx
          </button>
          <button
            className="theme-btn slate"
            onClick={() => handleThemeChange("slate")}
          >
            Slate
          </button>
          <button
            className="theme-btn papyrus"
            onClick={() => handleThemeChange("papyrus")}
          >
            Papyrus
          </button>
        </div>
      </main>

      {/* 'I' button that brings up explanation */}
    </>
  );
}

export default App;
