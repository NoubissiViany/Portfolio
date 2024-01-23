import { education } from "../../data";

export default function Education() {
  return (
    <div className="page-back">
      <h1 className="title">Education</h1>

      <div className="workeduc-box">
        {education.map((item, index) => (
          <div key={index} className="workeduc-content">
            <span className="year">
              <i className="bx bxs-calendar"></i>
              {item.year}
            </span>
            <div className="school-info">
              <h3>{item.title}</h3>
              <p className="degree">{item?.degree}</p>
              <p className="desc">{item.desc}</p>
              <p className="skills">
                <b>Skills: </b>
                {item.skills}
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="number-page">2</span>
      <span className="nextprev-btn back" data-page="turn-1">
        <i className="bx bx-chevron-left"></i>
      </span>
    </div>
  );
}
