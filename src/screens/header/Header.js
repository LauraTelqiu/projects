import React from "react";
import profilePic from "../../images/profile.jpg";
// import Skills from "../components/Skills";
import SocialMedia from "../../components/SocialMedia"
import "./header.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={profilePic} alt="profile"></img>
        <h2> Hi, My Name is Laura</h2>

        <div className="prompt">
          <p>
            Software Engineer motivated by problem solving and completing
            challenges
          </p>
          <div className="smedia">
            <SocialMedia />
          </div>


        </div>
      </div>
      {/* <div>
        <Skills />
      </div> */}
    </div>
  );
}

export default Home;
