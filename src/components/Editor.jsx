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

        <div className="bottom-left-icons">
          <span className="yellow">
            <i className="nf nf-fa-folder_tree"></i>
          </span>
          <span>
            <i className="nf nf-oct-git_branch"></i>
          </span>
          <span>
            <i className="nf nf-md-file_tree"></i>
          </span>
          <span>
            <i className="nf nf-oct-people"></i>
          </span>
          <span>
            <i className="nf nf-fa-magnifying_glass"></i>
          </span>
          <span>
            <i className="nf nf-md-lightning_bolt_outline"></i>
          </span>
          <span className="yellow">
            <i className="nf nf-cod-warning"></i> 1
          </span>
        </div>
      </div>

      <div className="body">
        <div className="tabs">
          <div className="arrows">
            <i className="nf nf-cod-arrow_left white"></i>
            &nbsp;
            <i className="nf nf-cod-arrow_right gray"></i>
            &nbsp;
          </div>
          <div className="gray">
            <i className="nf nf-seti-json"></i> data.json
          </div>
          <div className="white">
            <i className="nf nf-fa-react"></i> Editor.jsx
          </div>
          <div className="gray">
            <i className="nf nf-fa-react"></i> Terminal.jsx
          </div>

          <div className="tab-icons">
            <i className="nf nf-oct-plus"></i>
            <i className="nf nf-cod-split_horizontal"></i>
            <i className="nf nf-md-arrow_expand"></i>
          </div>
        </div>

        <div className="code">
          <div className="code-top gray">
            <span>
              src/components/Editor.jsx &gt;{" "}
              <span className="light-red">function</span>{" "}
              <span className="light-blue">Editor</span>
              <span className="white">()</span>
            </span>

            <span className="code-top-icons white">
              <i className="nf nf-oct-search"></i>
              <i className="nf nf-md-star_four_points_outline"></i>
              <i className="nf nf-md-cursor_text"></i>
              <i className="nf nf-seti-settings"></i>
            </span>
          </div>

          <div className="code-body text-subdued-bg">
            <div>
              1 &nbsp;&nbsp;{" "}
              <span className="light-red">export default function</span>{" "}
              <span className="light-blue">Editor</span>
              <span className="white">()</span>{" "}
              <span className="white">&#123;</span>
            </div>
            <div>
              2 &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="light-red">return</span>{" "}
              <span className="white">(</span>
            </div>
            <div>
              3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;</span>
              <span className="blue">div</span>{" "}
              <span className="red">className</span>
              <span className="white">=</span>
              <span className="yellow">"ide-preview container"</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;</span>
              <span className="blue">div</span>{" "}
              <span className="red">className</span>
              <span className="white">=</span>
              <span className="yellow">"left-menu"</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;</span>
              <span className="blue">div</span>{" "}
              <span className="red">className</span>
              <span className="white">=</span>
              <span className="yellow">"yellow"</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              6
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;</span>
              <span className="blue">span</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              7
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;</span>
              <span className="blue">i</span>{" "}
              <span className="red">className</span>
              <span className="white">=</span>
              <span className="yellow">"nf nf-md-folder_arrow_up"</span>
              <span className="white">&#62;</span>
              <span className="white">&#60;/</span>
              <span className="blue">i</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              8
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white"> trismegistus-colors</span>
            </div>
            <div>
              9
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;/</span>
              <span className="blue">span</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;/</span>
              <span className="blue">div</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;</span>
              <span className="blue">div</span>{" "}
              <span className="red">className</span>
              <span className="white">=</span>
              <span className="yellow">"gray indent-1"</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              12
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;</span>
              <span className="blue">span</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              13
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;</span>
              <span className="blue">i</span>{" "}
              <span className="red">className</span>
              <span className="white">=</span>
              <span className="yellow">"nf nf-fa-folder"</span>
              <span className="white">&#62;</span>
              <span className="white">&#60;/</span>
              <span className="blue">i</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              14
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white"> data</span>
            </div>
            <div>
              15
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;/</span>
              <span className="blue">span</span>
              <span className="white">&#62;</span>
            </div>
            <div>
              16 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="white">&#60;/</span>
              <span className="blue">div</span>
              <span className="white">&#62;</span>
            </div>
          </div>
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
