import TwitterIcon from "../../assets/twitter-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import GithubIcon from "../../assets/github-icon.svg";

import "../Footer/Footer.css";
function Footer() {
  return (
    <div className="Footer-wrapper">
      <img
        src={TwitterIcon}
        alt="Twitter"
        className="Footer-icon"
      />
      <img
        src={FacebookIcon}
        alt="Facebook"
        className="Footer-icon"
      />
      <img
        src={InstagramIcon}
        alt="Instagram"
        className="Footer-icon"
      />
      <img
        src={GithubIcon}
        alt="Github"
        className="Footer-icon"
      />
    </div>
  );
}

export default Footer;
