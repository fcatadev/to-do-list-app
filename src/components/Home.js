import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <div className="homePage">
      <Box
        position="absolute"
        left="50%"
        top="50%"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="homeFont">Welcome To My To-Do List App</h1>
        <Box mt={[5, 10, 15]} ml="153.185px">
          <NavLink className="linkBtnActive linkBtn" to="/todolist">
            <button className="btn startBtn ">
              <span>Let's Get Started!</span>
            </button>
          </NavLink>
        </Box>

        <h1 className="createdFont">Created By Fatih Can ATA</h1>
        <div className="homeDiv">
          <a
            href="https://www.linkedin.com/in/fatih-can-ata-9792b11ba/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
              className="homeLinkedlnLogo"
              alt="linkedln-logo"
            ></img>
          </a>
        </div>
        <div className="homeDiv">
          <h1>|</h1>
        </div>
        <div className="homeDiv">
          <a href="https://github.com/trainerdev" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="homeGithubLogo"
              alt="github-logo"
            ></img>
          </a>
        </div>
      </Box>
    </div>
  );
};

export default Home;
