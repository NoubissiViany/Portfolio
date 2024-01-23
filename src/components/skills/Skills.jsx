import { CRM, backEnd, frontEnd } from "../../data";
import "./skills.css";

export default function Skills() {
  return (
    <div className="page-back">
      <h1 className="title">My Skills</h1>

      <div className="skills-box">
        <div className="skills-content">
          <h3>Front-End</h3>
          <div className="content">
            {frontEnd.map((item, index) => (
              <span key={index}>
                <i className={item.icon}></i>
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-content">
          <h3>Back-End</h3>
          <div className="content">
            {backEnd.map((item, index) => (
              <span key={index}>
                <i className={item.icon}></i>
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-content">
          <h3>CRM</h3>
          <div className="content">
            {CRM.map((item, index) => (
              <span key={index}>
                <i className={item.icon}></i>
                {item.name}
              </span>
            ))}
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
