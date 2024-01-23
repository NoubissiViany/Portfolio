import "./profile.css";

export default function Profile() {
  return (
    <div>
      <div className="book-page page-left">
        <div className="profile-page">
          <img src="/src/assets/img/profile.jpg" alt="profile-image" />
          <h1>Noubissi Viany</h1>
          <h3>Full Stack Web Developer</h3>

          <div className="social-media">
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <p>
            Hi, i am Noubissi Viany, a Full Stack Web Developer about learning,
            solving problems and assisting other dev whenever they need my help
            (debugging code). I have been working as a web developer for almost
            2 years, specializing in back-end development. I know how to use
            Node.js and Express.js. I have also worked with JavaScript, HTML,
            CSS, React Native and React in front-end development
          </p>

          <div className="btn-box">
            <a
              href="/src/assets/doc/CV.pdf"
              download="Viany Resume.pdf"
              className="btn"
            >
              Download CV
            </a>
            <a href="#" className="btn contact-me">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
