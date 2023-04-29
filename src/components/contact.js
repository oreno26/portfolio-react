import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import  Button  from "@mui/material/Button";
import { useState } from "react";

const Contact = (props) => {
const [email, setEmail] = useState("")
const [name, setName] = useState("")
const [msg, setMsg] = useState("")


   const handleClick = (e) =>{
    console.log(email);
    console.log(name);
    console.log(msg);
    e.preventDefault();
    fetch('https://formspree.io/f/mknaynvn', {
      method: 'POST',
      body: JSON.stringify({ name, email, msg }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
      if(res.ok){
        alert("Thank you for reaching out!")
      }else{
        alert("something went wrong please check your info")
      }
      })
      .catch((err) => {
        console.error(err);
      });
   }
  return (
    <>
      <Box component="form" sx={{ m: 2 }} style={{ textAlign: "center" }}>
        <h1>Get in Touch</h1>
        <TextField
          style={{ backgroundColor: "white", marginRight:'5px', marginBottom:'10px' }}
         onChange={(e)=> setEmail(e.target.value)}
          label="Email"
          
          type="email"
        />
        <TextField
          style={{ backgroundColor: "white" }}
          onChange={(e)=> setName(e.target.value)}
          label="Full Name"
        />
        <br />
        <TextField
          style={{ backgroundColor: "white", width:'100%' }}
          onChange={(e)=>setMsg(e.target.value)}
          multiline
          label="Message"
          rows={5}
        />
        <br />
        <Button onClick={handleClick} style={{backgroundColor: "white"}} >Send </Button>
      </Box>
    </>
  );
};

export default Contact;
