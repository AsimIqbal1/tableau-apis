import React from "react";
import logo from "../images/tableau.png";
import gitHubLogo from "../images/github.svg";
//public / static / images / tableau.png

export default function Home() {
  return (
    <div>
      <img src={logo} alt="tableauImage" />
      <h1>React Playground for Tableau JavaScript API</h1>
      <p>by Andre de Vries</p>
      <p style={indicatorStyle}>👇</p>
    </div>
  );
}

const githubStyle = {
  width: "50px",
  height: "50px",
};

const indicatorStyle = {
  fontSize: "3rem",
  width: "100%",
  textAlign: "center",
};
