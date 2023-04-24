import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Nav = (props) => {
  return (
    <>
      <Stack spacing={2} direction="row" style={{margin:'0', backgroundColor: 'darkblue', width:'100vw'}} >
        <Button component={Link} to='/about'>About</Button>
        <Button component={Link} to='/skills'>skills</Button>
        <Button component={Link} to='/projects'>Projects</Button>
        <Button component={Link} to="/contact">contact</Button>
      </Stack>
    </>
  );
};

export default Nav;
