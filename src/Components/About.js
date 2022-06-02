import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faNodeJs,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLaptop,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faHtml5} />
        <p>HTML5</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faCss3} />
        <p>CSS3</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faJs} />
        <p>JavaScript</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faReact} />
        <p>React</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faGitAlt} />
        <p>Git</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} />
        <p>GitHub</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faNodeJs} />
        <p>NodeJS</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faLaptop} />
        <FontAwesomeIcon icon={faMobileScreenButton} />
        <p>Responsive Websites</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faFigma} />
        <p>Figma</p>
      </div>
    </>
  );
};

export default About;
