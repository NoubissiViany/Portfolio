import "./projects.css";

export default function Projects() {
  return (
    <div className="page-front">
      <h1 className="title">Latest Project</h1>

      <div className="portfolio-box">
        <div className="img-box">
          <img src="" alt="portfolio img" />
        </div>

        <div className="info-box">
          <div className="info-title">
            <h3>Project Name</h3>
            <a href="#">
              Live Preview <i className="bx bx-link-external"></i>
            </a>
          </div>
          <p>Tech Used</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            quis! Voluptates earum nostrum expedita velit modi, impedit
            accusamus error itaque esse, illo nesciunt neque laudantium sapiente
            deleniti iure magni quod.
          </p>
        </div>
        <div className="btn-box">
          <a href="#" className="btn">
            Source Code
          </a>
          <a href="#" className="btn">
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
