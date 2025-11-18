import { useEffect } from "react";
import data from "../data/trismegistus-onyx.json";

function App() {
  useEffect(() => {
    root.style.setProperty("--background-color", data.backgroundColor);
    root.style.setProperty("--text-color", data.textColor);
    root.style.setProperty("--black", data.black);
    root.style.setProperty("--red", data.red);
    root.style.setProperty("--green", data.green);
    root.style.setProperty("--yellow", data.yellow);
    root.style.setProperty("--blue", data.blue);
    root.style.setProperty("--magenta", data.magenta);
    root.style.setProperty("--cyan", data.cyan);
    root.style.setProperty("--white", data.white);
    root.style.setProperty("--gray", data.gray);

    root.style.setProperty("--test", data.test);
  }, []);

  return (
    <main>
      <span>Test</span>
    </main>
  );
}

export default App;
