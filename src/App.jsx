import { useState, useEffect } from "react";

import onyx from "../data/trismegistus-onyx.json";
import slate from "../data/trismegistus-slate.json";
import papyrus from "../data/trismegistus-papyrus.json";

import Partition from "./components/Partition.jsx";
import Terminal from "./components/Terminal.jsx";
import Editor from "./components/Editor.jsx";

const themes = {
  onyx,
  slate,
  papyrus,
};

const previews = [
  { id: "terminal", component: <Terminal />, label: "Terminal" },
  { id: "editor", component: <Editor />, label: "Editor" },
];

function App() {
  const [currentTheme, setCurrentTheme] = useState("onyx");
  const [currentPreview, setCurrentPreview] = useState(0);

  const applyTheme = (themeData) => {
    const root = document.querySelector(":root");

    // Confirm all needed color variations for Zed, Ghostty, etc. (light-bg for example)
    root.style.setProperty("--background-outline", themeData.backgroundOutline);
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

  const handlePreviewNext = () => {
    if (currentPreview < previews.length - 1) {
      setCurrentPreview(currentPreview + 1);
    }
  };

  const handlePreviewPrev = () => {
    if (currentPreview > 0) {
      setCurrentPreview(currentPreview - 1);
    }
  };

  const displayDownloadList = () => {
    const list = document.querySelector(".download-list");

    list.classList.contains("hidden")
      ? list.classList.remove("hidden")
      : list.classList.add("hidden");
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

        <div className="preview-container">
          <button
            onClick={handlePreviewPrev}
            disabled={currentPreview === 0}
            style={{
              opacity: currentPreview === 0 ? 0.2 : 1,
              cursor: currentPreview === 0 ? "default" : "pointer",
            }}
            className="scroll-btn prev"
          >
            &lt;
          </button>

          {previews[currentPreview].component}

          <button
            onClick={handlePreviewNext}
            disabled={currentPreview === previews.length - 1}
            style={{
              opacity: currentPreview === previews.length - 1 ? 0.2 : 1,
              cursor:
                currentPreview === previews.length - 1 ? "default" : "pointer",
            }}
            className="scroll-btn next"
          >
            &gt;
          </button>
        </div>

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

        <button className="download-btn" onClick={() => displayDownloadList()}>
          <i className="nf nf-oct-download"></i>
        </button>

        <div className="download-list hidden">
          <a
            className="dl-icon"
            href="/themes/ghostty.json"
            download="ghostty.json"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Ghostty</title>
              <path d="M12 0C6.7 0 2.4 4.3 2.4 9.6v11.146c0 1.772 1.45 3.267 3.222 3.254a3.18 3.18 0 0 0 1.955-.686 1.96 1.96 0 0 1 2.444 0 3.18 3.18 0 0 0 1.976.686c.75 0 1.436-.257 1.98-.686.715-.563 1.71-.587 2.419-.018.59.476 1.355.743 2.182.699 1.705-.094 3.022-1.537 3.022-3.244V9.601C21.6 4.3 17.302 0 12 0M6.069 6.562a1 1 0 0 1 .46.131l3.578 2.065v.002a.974.974 0 0 1 0 1.687L6.53 12.512a.975.975 0 0 1-.976-1.687L7.67 9.602 5.553 8.38a.975.975 0 0 1 .515-1.818m7.438 2.063h4.7a.975.975 0 1 1 0 1.95h-4.7a.975.975 0 0 1 0-1.95" />
            </svg>
          </a>

          <a className="dl-icon">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Zed Editor</title>
              <path d="M2.25 1.5a.75.75 0 0 0-.75.75v16.5H0V2.25A2.25 2.25 0 0 1 2.25 0h20.095c1.002 0 1.504 1.212.795 1.92L10.764 14.298h3.486V12.75h1.5v1.922a1.125 1.125 0 0 1-1.125 1.125H9.264l-2.578 2.578h11.689V9h1.5v9.375a1.5 1.5 0 0 1-1.5 1.5H5.185L2.562 22.5H21.75a.75.75 0 0 0 .75-.75V5.25H24v16.5A2.25 2.25 0 0 1 21.75 24H1.655C.653 24 .151 22.788.86 22.08L13.19 9.75H9.75v1.5h-1.5V9.375A1.125 1.125 0 0 1 9.375 8.25h5.314l2.625-2.625H5.625V15h-1.5V5.625a1.5 1.5 0 0 1 1.5-1.5h13.19L21.438 1.5z" />
            </svg>
          </a>
        </div>
      </main>

      {/* 'I' button that brings up explanation */}
    </>
  );
}

export default App;
