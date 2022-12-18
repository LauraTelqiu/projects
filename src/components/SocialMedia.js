import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";






function SocialMedia() {
  const linkedinClick = () => {
    window.location.assign("https://www.linkedin.com/in/lauratelqiu/");

  };

  const emailClick = () => {
    window.location.assign("mailto:lauratelqiu@gmail.com");
  };

  const gitHubClick = () => {
    window.location.assign("https://github.com/LauraTelqiu");

  };

  return (
    <div>
      <div>
        <LinkedInIcon className="icons" onClick={linkedinClick} />
        <EmailIcon className="icons" onClick={emailClick} />
        <GithubIcon className="icons" onClick={gitHubClick} />
      </div>

    </div>
  );
}

export default SocialMedia;
