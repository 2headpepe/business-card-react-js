import Photo from "../../assets/photo.png";
import Mail from "../../assets/Mail.png";
import Linkedin from "../../assets/linkedin.png";

import "../Info/Info.css";

function Info() {
  return (
    <div className="wrapper">
      <img
        className="photo"
        src={Photo}
        alt="Photo"
        width="317px"
        height="317px"
      />
      <h3 className="name">Laura Smith</h3>
      <h5 className="status">Frontend Developer</h5>
      <h6 className="website">laurasmith.website</h6>
      <div className="btn-wrapper">
        <button
          className="links-button"
          id="email-button"
        >
          <img
            src={Mail}
            alt="mail-icon"
            className="button-icon"
          />
          <span className="button-text">Email</span>
        </button>
        <button
          className="links-button"
          id="linkedin-button"
        >
          <img
            src={Linkedin}
            alt="mail-icon"
            className="button-icon"
          />
          <span className="button-text">Linkedin</span>
        </button>
      </div>
    </div>
  );
}

export default Info;
