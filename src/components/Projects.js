import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import WTR from "./img/wtr.jpg";
import BUDGET from "./img/Budget.jpg"
import Mem from "./img/memory.jpg"

const Projects = (props) => {
  return (
    <Box  id="projects" sx={{m: 2}} style={{ width: "60vw", height:'100vh' }} >
      <h1>Projects</h1>
      <Carousel >
        <div >
          <img src={WTR}  />
          <p className="legend"><a href="https://wtr.onrender.com">Weather The Ride</a><br/>  
          <a href="https://github.com/oreno26/WTR">Github</a></p>
        </div>
        <div>
          <img src={BUDGET} />
          <p className="legend"><a href="https://github.com/oreno26/project_budget">Github</a></p>
        </div>
        <div>
          <img src={Mem} />
          <p className="legend"><a href="https://github.com/oreno26/Memory_game">Github</a></p>
        </div>
      </Carousel>
    </Box>
  );
};

export default Projects;
