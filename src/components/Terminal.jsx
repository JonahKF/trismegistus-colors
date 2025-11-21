import data from "../../data/terminal-data.json";

export default function Terminal() {
  return (
    <div className="terminal">
      <div className="ascii">
        <span className="green">{"                      ..'"}</span>
        <span className="green">{"                  ,xNMM."}</span>
        <span className="green">{"                .OMMMMo"}</span>
        <span className="green">{'                lMMM"'}</span>
        <span className="yellow">{"      .;loddo:.  .olloddol;."}</span>
        <span className="yellow">{"    cKMMMMMMMMMMNWMMMMMMMMMM0:"}</span>
        <span className="yellow">{"  .KMMMMMMMMMMMMMMMMMMMMMMMWd."}</span>
        <span className="red">{"  XMMMMMMMMMMMMMMMMMMMMMMMX."}</span>
        <span className="red">{" ;MMMMMMMMMMMMMMMMMMMMMMMM:"}</span>
        <span className="red">{" :MMMMMMMMMMMMMMMMMMMMMMMM:"}</span>
        <span className="magenta">{" .MMMMMMMMMMMMMMMMMMMMMMMMX."}</span>
        <span className="magenta">{"  kMMMMMMMMMMMMMMMMMMMMMMMMWd."}</span>
        <span className="magenta">{"  'XMMMMMMMMMMMMMMMMMMMMMMMMMMk"}</span>
        <span className="blue">{"   'XMMMMMMMMMMMMMMMMMMMMMMMMK."}</span>
        <span className="blue">{"     kMMMMMMMMMMMMMMMMMMMMMMd"}</span>
        <span className="cyan">{"      ;KMMMMMMMWXXWMMMMMMMk."}</span>
        <span className="cyan">{'        "cooc*"    "*coo""'}</span>
      </div>

      <div className="terminal-output">
        <span>
          <span className="green">{data.header.username}</span>@
          <span className="green">{data.header.hostname}</span>
        </span>
        <span>-------------</span>
        {Object.entries(data.systemInfo).map(([key, value]) => (
          <span key={key}>
            <span className="yellow">{key}: </span>
            {value}
          </span>
        ))}
        <div className="output-colors"></div>
      </div>
    </div>
  );
}
