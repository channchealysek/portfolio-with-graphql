import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
function SocialLink({ linkGitHub, linkLinkedin, linkTwitter }) {
  return (
    <div className="flex w-full justify-center align-middle">
      {/* <div className="w-[250px] p-2 rounded-full grid grid-flow-col justify-center items-center gap-2 bg-slate-300"> */}
        <div className="iconLink">
          <a href={linkGitHub} target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="iconLink">
          <a href={linkLinkedin} target="blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="iconLink">
          <a href={linkTwitter} target="blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    // </div>
  );
}

export default SocialLink;
