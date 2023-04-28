import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import  Button  from "@mui/material/Button";

const Contact = (props) => {
  return (
    <>
      <Box component="form" sx={{ m: 2 }} style={{ textAlign: "center" }}>
        <h1>Get in Touch</h1>
        <TextField
          style={{ backgroundColor: "white", marginRight:'5px', marginBottom:'10px' }}
        //   sx={{ m: 1 }}
          label="Email"
          type="email"
        />
        <TextField
          style={{ backgroundColor: "white" }}
        //   sx={{ m: 1 }}
          label="Full Name"
        />
        <br />
        <TextField
          style={{ backgroundColor: "white", width:'100%' }}
          multiline
          label="Message"
          rows={5}
        />
        <br />
        <Button style={{backgroundColor: "white"}} >Send </Button>
      </Box>
    </>
  );
};

export default Contact;
