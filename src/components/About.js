import Projects from "./Projects";
import image from "./img/profile.jpg";
import Box from "@mui/material/Box";
import CVButton from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
 
const About = (props) => {
  return (
    <Box
      sx={{ m: 2 }}
      style={{
        marginTop:'25vh' ,
        display: "flex",
        justifyContent: "space-evenly",
        height: "75vh",
      }}
    >
      <div>
        <h1>Oren Ovadia</h1>
        <p style={{ fontSize: "1.5rem" }}>
          Full Stack Developer
          <br />
          Trainer
          <br />
          Motorcyclist
          <br />
          Photographer
        </p>
        {/* <CVButton url="./CV/Oren_Ovadia_CV.docx" filename="Oren_Ovadia_CV.docx" /> */}
        <div style={{ display: "flex",
        justifyContent: "space-evenly",}}>
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/oren-ovadia-37267725b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: "36px", color: "black" }}
            />
          </a>
          {/* git */}
          <a
            href="https://github.com/oreno26?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "36px", color: "black" }}
            />
          </a>
          {/* CV */}
          <a
            href="OrenOvadiaCV.pdf"
            download="OrenOvadiaCV.pdf"
          >
            <FontAwesomeIcon
              icon={faFilePdf}
              style={{ fontSize: "36px", color: "black" }}
            />
          </a>
        </div>
      </div>
      <img
        src={image}
        alt="profile"
        width={"250px"}
        height={"250px"}
        style={{ border: "5px black solid", borderRadius: "250px" }}
      />
      <div style={{ width: "25vh", fontSize: "1.1rem" }}>
        My name is Oren and I am a fullstack JavaScript developer. <br />
        I am also a former motorcycle technician and a certified personal
        trainer.
        <br />
        With a passion for both technology and fitness,
        <br />I am now exploring opportunities to combine my skills in these
        areas to build innovative web applications that can improve people's
        lives.
      </div>
    </Box>
  );
};
export default About;
