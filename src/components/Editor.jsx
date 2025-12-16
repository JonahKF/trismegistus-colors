export default function Editor() {
  return (
    <div className="ide">
      <div className="left-menu">
        <div className="yellow">
          <i className="nf nf-md-folder_arrow_up"></i> trismegistus-colors
        </div>
        <div className="gray indent-1">
          <i className="nf nf-fa-folder"></i> data
        </div>
        <div className="gray indent-2">
          <i className="nf nf-seti-json"></i> data.json
        </div>
        <div className="yellow indent-1">
          <i className="nf nf-md-folder_arrow_up"></i> src
        </div>
        <div className="yellow indent-2">
          <i className="nf nf-fa-folder"></i> components
        </div>
        <div className="highlighted yellow indent-3">
          <i className="nf nf-fa-react"></i> Editor.jsx
        </div>
        <div className="gray indent-3">
          <i className="nf nf-fa-react"></i> Terminal.jsx
        </div>
      </div>

      <div className="body">
        <div className="tabs">
          <div className="gray">
            <i className="nf nf-seti-json"></i> data.json
          </div>
          <div className="white">
            <i className="nf nf-fa-react"></i> Editor.jsx
          </div>
          <div className="gray">
            <i className="nf nf-fa-react"></i> Terminal.jsx
          </div>

          <div className="tab-icons"></div>
        </div>

        <div className="code">
          <div className="code-top"></div>

          <div className="code-body"></div>
        </div>

        <div className="editor-terminal">
          <div className="gray">
            <i className="nf nf-dev-terminal"></i> trismegistus-colors
          </div>
          <div className="gray">
            9:22:23 AM <span className="blue">[vite]</span> (client){" "}
            <span className="green">hmr update </span>
            /src/styles/globals.css
            <span className="yellow"> (x2)</span>
          </div>
          {/* <div className="white">|</div>*/}
        </div>
      </div>
      <div className="bottom-right-icons">
        <span>1:35</span>
        <span>JavaScript</span>
        <span className="yellow">
          <i className="nf nf-oct-terminal"></i>
        </span>
        <span>
          <i className="nf nf-oct-bug"></i>
        </span>
        <span>
          <i className="nf nf-md-star_four_points_outline"></i>
        </span>
        <span>
          <i className="nf nf-cod-bell"></i>
        </span>
      </div>
    </div>
  );
}
