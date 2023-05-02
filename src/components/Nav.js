import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material/Box";
import Projects from "./Projects";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = (props) => {
  return (
    <>
      <Stack spacing={2} direction="row" style={{margin:'0', backgroundColor: 'darkblue', width:'100vw', position:'fixed'}} >
      <Button sx={{m: 1}}><AnchorLink href="#about">About</AnchorLink></Button>
      <Button><AnchorLink href="#skills">Skills</AnchorLink></Button>
      <Button><AnchorLink href="#projects">Projects</AnchorLink></Button>
      <Button><AnchorLink href="#contact">Contact</AnchorLink></Button>
      </Stack>
    </>
  );
};

export default Nav;
