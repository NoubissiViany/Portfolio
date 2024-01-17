import { services } from "../../data";
import "./services.css";

export default function Services() {
  return (
    <div className="page-front">
      <h1 className="title">My Services</h1>

      <div className="services-box">
        {services.map((item, index) => (
          <div key={index} className="services-content">
            <i className="bx bx-code-alt"></i>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <span className="number-page">3</span>
      <span className="nextprev-btn" data-page="turn-2">
        <i className="bx bx-chevron-right"></i>
      </span>
    </div>
  );
}
