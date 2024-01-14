import Education from "../education/Education";
import "./experience.css";

export default function Experience() {
  return (
    <div className="book-page page-right turn" id="turn-1">
      <div className="page-front">
        <h1 className="title">Work Experience</h1>

        <div className="workeduc-box">
          <div className="workeduc-content">
            <span className="year">2020 - 2021</span>
            <h3>Web developer - Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              quos dolor inventore est qui esse magni quisquam tenetur! Veniam
              ratione dolorem, dolorum ea accusamus quod aliquam nihil suscipit
              neque molestias!
            </p>
          </div>

          <div className="workeduc-content">
            <span className="year">2020 - 2021</span>
            <h3>Web developer - Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              quos dolor inventore est qui esse magni quisquam tenetur! Veniam
              ratione dolorem, dolorum ea accusamus quod aliquam nihil suscipit
              neque molestias!
            </p>
          </div>

          <div className="workeduc-content">
            <span className="year">2020 - 2021</span>
            <h3>Web developer - Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              quos dolor inventore est qui esse magni quisquam tenetur! Veniam
              ratione dolorem, dolorum ea accusamus quod aliquam nihil suscipit
              neque molestias!
            </p>
          </div>
        </div>
        <span className="number-page">1</span>
        <span className="nextprev-btn" data-page="turn-1"></span>
      </div>
      <Education />
    </div>
  );
}
