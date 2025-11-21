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
        <br />
        <div className="output-colors">
          <div className="color-row">
            <div className="black"></div>
            <div className="red"></div>
            <div className="green"></div>
            <div className="yellow"></div>
            <div className="blue"></div>
            <div className="magenta"></div>
            <div className="cyan"></div>
            <div className="gray"></div>
          </div>
          <div className="color-row">
            <div className="light-black"></div>
            <div className="light-red"></div>
            <div className="light-green"></div>
            <div className="light-yellow"></div>
            <div className="light-blue"></div>
            <div className="light-magenta"></div>
            <div className="light-cyan"></div>
            <div className="white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
