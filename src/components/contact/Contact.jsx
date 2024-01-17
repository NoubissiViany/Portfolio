import "./contact.css";

export default function Contact() {
  return (
    <div className="page-back">
      <h1 className="title">Contact Me!</h1>
      <div className="contact-box">
        <form action="#">
          <input
            type="text"
            className="field"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="field"
            placeholder="Email Address"
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="field"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="text" className="btn" value="Send Message" />
        </form>
      </div>

      <span className="number-page">6</span>
      <span className="nextprev-btn back" data-page="turn-3">
        <i className="bx bx-chevron-left"></i>
      </span>

      <a href="#" className="back-profile">
        <p>Profile</p>
        <i className="bx bx-user"></i>
      </a>
    </div>
  );
}
