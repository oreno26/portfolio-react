import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import WTR from "./img/wtr.jpg";

const Projects = (props) => {
  return (
    <Box sx={{m: 2}} style={{ width: "60vw", }}>
      <Carousel>
        <div>
          <img src={WTR} />
          <p className="legend"><a href="https://wtr.onrender.com">Weather The Ride</a><br/>  
          <a href="https://github.com/oreno26/WTR">Github</a></p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Budget</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </Box>
  );
};

export default Projects;
