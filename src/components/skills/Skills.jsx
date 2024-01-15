import "./skills.css";

export default function Skills() {
  return (
    <div className="page-back">
      <h1 className="title">My Skills</h1>

      <div className="skills-box">
        <div className="skills-content">
          <h3>Front-End</h3>
          <div className="content">
            <span>
              <i className="bx bxl-html5"></i>HTLM
            </span>
            <span>
              <i className="bx bxl-css3"></i>CSS
            </span>
            <span>
              <i className="bx"></i>JS
            </span>
            <span>
              <i className="bx"></i>React
            </span>
            <span>
              <i className="bx"></i>Boostrap
            </span>
          </div>
        </div>

        <div className="skills-content">
          <h3>Back-End</h3>
          <div className="content">
            <span>
              <i className="bx"></i>Node
            </span>
            <span>
              <i className="bx"></i>PHP
            </span>
          </div>
        </div>

        <div className="skills-content">
          <h3>CRM</h3>
          <div className="content">
            <span>
              <i className="bx"></i>GHL
            </span>
          </div>
        </div>

        <span className="number-page">4</span>
        <span className="nextprev-btn back" data-page="turn-2">
          <i className="bx bx-chevron-left"></i>
        </span>
      </div>
    </div>
  );
}
