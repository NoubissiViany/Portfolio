import { experience } from "../../data";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import Projects from "../projects/Projects";
import Services from "../services/Services";
import Skills from "../skills/Skills";
import usePageTurn from "../../customHook/usePageTurns";
import "./experience.css";
import useContactMe from "../../customHook/useContactMe";
import useProfile from "../../customHook/useProfile";

export default function Experience() {
  usePageTurn();
  useContactMe();
  useProfile();
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
                <div className="company-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="task">Achievements/Tasks</span>
                <ul>
                  {item.tasks.map((object, index) => (
                    <li key={index}>{object.task}</li>
                  ))}
                </ul>
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
      <div className="book-page page-right turn" id="turn-3">
        <Projects />
        <Contact />
      </div>
    </>
  );
}
