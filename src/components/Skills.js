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
      <h3>Code Skills</h3>
      <div style={{display:'flex', justifyContent: 'space-evenly', width:'30vw'}}>
        <FontAwesomeIcon className="skill node" icon={faNode}  />
        <FontAwesomeIcon className="skill html" icon={faHtml5} />
        <FontAwesomeIcon className="skill react" icon={faReact}  />
        <FontAwesomeIcon className="skill css" icon={faCss3}  />
        <FontAwesomeIcon className="skill js" icon={faJs} />
      </div >
      <h3>Genral Skills</h3>
      <div style={{display:'flex', justifyContent: 'space-around'}}>
        <p className="gs">Troubleshooting </p>
        <p className="gs mid"> Teamwork</p>
        <p className="gs">  Time management</p>
      </div>
    </>
  );
};
export default Skills;
