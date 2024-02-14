import "./projects.css";
import BrainBuster from "../../assets/img/BrainBuster.png";

export default function Projects() {
  return (
    <div className="page-front">
      <h1 className="title">Latest Project</h1>

      <div className="portfolio-box">
        <div className="img-box">
          <img src={BrainBuster} alt="project img" />
        </div>

        <div className="info-box">
          <div className="info-title">
            <h3>Brain Buster</h3>
            <a href="https://splendid-crostata-769cac.netlify.app/">
              Live Preview <i className="bx bx-link-external"></i>
            </a>
          </div>
          <p>Tech Used : HTML, CSS, JS and React </p>
          <p>
            Brain Buster is an application that enhances concentration, boosts
            confidence, and aids in information retention. It utilizes an
            asynchronous function with await to efficiently fetch questions and
            answers from the Trivia API.
          </p>
        </div>
        <div className="btn-box">
          <a
            href="https://github.com/NoubissiViany/react-Quiz-App"
            className="btn"
          >
            Source Code
          </a>
          <a
            href="https://github.com/NoubissiViany?tab=repositories"
            className="btn"
          >
            More Projects
          </a>
        </div>
      </div>
      <span className="number-page">5</span>
      <span className="nextprev-btn" data-page="turn-3">
        <i className="bx bx-chevron-right"></i>
      </span>
    </div>
  );
}
