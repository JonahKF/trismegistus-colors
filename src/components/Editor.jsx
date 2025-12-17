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
        <div className="gray indent-2">
          <i className="nf nf-fa-folder"></i> components
        </div>
        <div className="gray indent-3">
          <i className="nf nf-fa-react"></i> Editor.jsx
        </div>
        <div className="gray indent-3">
          <i className="nf nf-fa-react"></i> Terminal.jsx
        </div>
        <div className="highlighted yellow indent-2">
          <i className="nf nf-fa-react"></i> App.jsx
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
            <span className="magenta">
              <i className="nf nf-seti-json"></i>
            </span>{" "}
            data.json
          </div>
          <div className="white">
            <span className="yellow">
              <i className="nf nf-fa-react"></i>
            </span>{" "}
            App.jsx
          </div>
          <div className="gray">
            <span className="yellow">
              <i className="nf nf-fa-react"></i>
            </span>{" "}
            Terminal.jsx
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
              src/App.jsx &gt; <span className="light-red">function</span>{" "}
              <span className="light-blue">App</span>
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
              1 &nbsp;&nbsp; <span className="light-red">import</span>{" "}
              <span className="white"> &#123; useState, useEffect &#125; </span>
              <span className="light-red">from</span>{" "}
              <span className="yellow">"react"</span>
              <span className="white">;</span>
            </div>
            <div>2</div>
            <div>
              3 &nbsp;&nbsp; <span className="light-red">const</span>{" "}
              <span className="white">themes </span>
              <span className="light-blue">= </span>
              <span className="white">&#123;</span>
            </div>
            <div>
              4 &nbsp;&nbsp;&nbsp;<span className="vert-line"></span>
              &nbsp;&nbsp;
              <span className="green">onyx</span>
              <span className="white">,</span>{" "}
            </div>
            <div>
              5 &nbsp;&nbsp;&nbsp;<span className="vert-line"></span>
              &nbsp;&nbsp;
              <span className="green">slate</span>
              <span className="white">,</span>{" "}
            </div>
            <div>
              6 &nbsp;&nbsp;&nbsp;<span className="vert-line"></span>
              &nbsp;&nbsp;
              <span className="green">papyrus</span>
              <span className="white">,</span>{" "}
            </div>
            <div>
              7 &nbsp;&nbsp;&nbsp;
              <span className="white">&#125;</span>
            </div>
            <div>8</div>
            <div>
              9 &nbsp;&nbsp; <span className="light-red">const</span>{" "}
              <span className="white">previews </span>
              <span className="light-blue">= </span>
              <span className="white">[</span>
            </div>
            <div>
              10 &nbsp;&nbsp;<span className="vert-line"></span>&nbsp;&nbsp;
              <span className="white">&#123;</span>{" "}
              <span className="green">id</span>
              <span className="white">:</span>{" "}
              <span className="yellow">"terminal"</span>
              <span className="white">,</span>{" "}
              <span className="green">component</span>
              <span className="white">:</span>{" "}
              <span className="white">&#60;</span>
              <span className="light-blue">Terminal</span>{" "}
              <span className="white">/&#62;,</span>{" "}
              <span className="green">label</span>
              <span className="white">:</span>{" "}
              <span className="yellow">"Terminal"</span>{" "}
              <span className="white">&#125;,</span>
            </div>
            <div>
              11 &nbsp;&nbsp;<span className="vert-line"></span>&nbsp;&nbsp;
              <span className="white">&#123;</span>{" "}
              <span className="green">id</span>
              <span className="white">:</span>{" "}
              <span className="yellow">"editor"</span>
              <span className="white">,</span>{" "}
              <span className="green">component</span>
              <span className="white">:</span>{" "}
              <span className="white">&#60;</span>
              <span className="light-blue">Editor</span>{" "}
              <span className="white">/&#62;,</span>{" "}
              <span className="green">label</span>
              <span className="white">:</span>{" "}
              <span className="yellow">"Editor"</span>{" "}
              <span className="white">&#125;,</span>
            </div>
            <div>
              12 &nbsp;&nbsp;
              <span className="white">]</span>
            </div>
            <div>13</div>
            <div>
              14 &nbsp;&nbsp;
              <span className="light-red">function</span>{" "}
              <span className="light-blue">App</span>
              <span className="white">() &#123;</span>
            </div>
            <div>
              15 &nbsp;&nbsp;
              <span className="vert-line"></span>
              &nbsp;&nbsp;
              <span className="light-red">const</span>{" "}
              <span className="white">[currentTheme, setCurrentTheme]</span>{" "}
              <span className="light-blue">= </span>{" "}
              <span className="green">useState</span>
              <span className="white">(</span>
              <span className="yellow">"onyx"</span>
              <span className="white">);</span>
            </div>
            <div>
              16 &nbsp;&nbsp;
              <span className="vert-line"></span>
              &nbsp;&nbsp;
              <span className="light-red">const</span>{" "}
              <span className="white">[currentPreview, setCurrentPreview]</span>{" "}
              <span className="light-blue">= </span>{" "}
              <span className="green">useState</span>
              <span className="white">(</span>
              <span className="magenta">0</span>
              <span className="white">);</span>
            </div>
            <div>
              17 &nbsp;&nbsp;
              <span className="vert-line"></span>
            </div>
            <div>
              18 &nbsp;&nbsp;
              <span className="vert-line"></span>
              &nbsp;&nbsp;
              <span className="light-red">const</span>{" "}
              <span className="green">applyTheme</span>{" "}
              <span className="light-blue">=</span>{" "}
              <span className="white">(themeData)</span>{" "}
              <span className="light-blue">=&#62;</span>{" "}
              <span className="white">&#123;</span>
            </div>
            <div>
              19 &nbsp;&nbsp;
              <span className="vert-line"></span>
              &nbsp;&nbsp;
            </div>
            <div>
              20 &nbsp;&nbsp;
              <span className="vert-line"></span>
              &nbsp;&nbsp;
            </div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
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
