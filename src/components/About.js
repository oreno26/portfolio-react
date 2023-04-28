import Projects from "./Projects";
import image from "./img/profile.jpg"
import Box from "@mui/material/Box";

const About = (props) => {
  return (
    <Box sx={{m: 2}} style={{display:'flex',justifyContent:'space-evenly',height:'100vh' }}>
      <div>
        <h1>Oren Ovadia</h1>
        <p style={{ fontSize: "1.5rem" }}>Full Stack Developer<br/>Trainer<br/>Motorcyclist<br/>Photographer</p>
      </div>
      <img src={image} alt="profile" width={'500px'} height={'500px'} style={{border:'5px black solid', borderRadius:'250px'}} />
      <div style={{width: '25vh', fontSize:'1.1rem'}}>
      My name is Oren and I am a fullstack JavaScript developer. <br/>
      I am also a former motorcycle technician and a certified personal trainer. 
      <br/>With a passion for both technology and fitness, 
      <br/>I am now exploring opportunities to combine my skills in these areas to build innovative web applications that can improve people's lives.    
      </div>
    </Box>
  );
};
export default About;
