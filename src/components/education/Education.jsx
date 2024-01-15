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
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
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
