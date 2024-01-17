import { experience } from "../../data";
import Education from "../education/Education";
import Services from "../services/Services";
import Skills from "../skills/Skills";
import "./experience.css";

export default function Experience() {
  return (
    <>
      <div className="book-page page-right turn" id="turn-1">
        <div className="page-front">
          <h1 className="title">Work Experience</h1>

          <div className="workeduc-box">
            {experience.map((item, index) => (
              <div key={index} className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar"></i>
                  {item.year}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <span className="number-page">1</span>
          <span className="nextprev-btn" data-page="turn-1">
            <i className="bx bx-chevron-right"></i>
          </span>
        </div>
        <Education />
      </div>
      <div className="book-page page-right turn" id="turn-2">
        <Services />
        <Skills />
      </div>
    </>
  );
}
