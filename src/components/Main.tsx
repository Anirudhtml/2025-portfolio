import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import icon from '../assets/images/profile.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={icon} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Anirudhtml" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anirudhgupta905/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <p id="nameHeading">Anirudh Gupta</p>
          <p id="subHeading">swe | designer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Anirudhtml" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anirudhgupta905/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;