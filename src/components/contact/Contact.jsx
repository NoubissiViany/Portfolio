import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { emailInfo } from "../../data";

export default function Contact() {
  const [isEmailSend, setIsEmailSend] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailInfo[0], emailInfo[1], form.current, emailInfo[2])
      .then(
        (result) => {
          setFormData({
            user_name: "",
            user_email: "",
            user_subject: "",
            message: "",
          });
          console.log("formData", formData);
          setIsEmailSend(true);
          console.log(result.text);
          setTimeout(() => {
            setIsEmailSend(false);
          }, 3500);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="page-back">
      <h1 className="title">Contact Me!</h1>
      <div className="contact-box">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="field"
            placeholder="Full Name"
            name="user_name"
            value={formData.user_name}
            onChange={(event) =>
              setFormData({ ...formData, user_name: event.target.value })
            }
            required
          />
          <input
            type="email"
            className="field"
            name="user_email"
            value={formData.user_email}
            onChange={(event) =>
              setFormData({ ...formData, user_email: event.target.value })
            }
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            className="field"
            name="user_subject"
            value={formData.user_subject}
            onChange={(event) =>
              setFormData({ ...formData, user_subject: event.target.value })
            }
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
            cols="30"
            rows="10"
            className="field"
            placeholder="Your Message"
            required
          ></textarea>
          {isEmailSend && (
            <p className="email-alert">Email sent successfully!</p>
          )}
          <input type="submit" className="btn" value="Send Message" />
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
