import React from "react";
import "./Home.css";
import Work from "./Work";
function Home() {
  return (
    <div>
      <div className="main-container">
        <div className="sub-main-container">
          <h1 className="main-heading">Build Your Own Resume</h1>
        </div>
        <img
          src="https://img.freepik.com/premium-vector/resume-concept-man-makes-resume-vector-illustration-flat_186332-1030.jpg?w=900"
          alt=""
        />
      </div>
      <Work />
    </div>
  );
}

export default Home;
