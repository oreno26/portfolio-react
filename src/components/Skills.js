import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import "./Skills.css"
import {
  faHtml5,
  faNodeJs,
  faNode,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";


const Skills = (props) => {
  return (
    <>
    <div style={{paddingTop: '10px'}} id="skills"></div>
      <h1>Skills</h1>
      <div style={{display:'flex', justifyContent: 'space-evenly', width:'30vw'}}>
        <FontAwesomeIcon className="skill" icon={faHtml5} />
        <FontAwesomeIcon className="skill" icon={faNode}  />
        <FontAwesomeIcon className="skill" icon={faCss3}  />
        <FontAwesomeIcon className="skill" icon={faJs} />
        <FontAwesomeIcon className="skill" icon={faReact}  />
      </div>
    </>
  );
};
export default Skills;
