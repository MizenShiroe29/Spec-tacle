import React from "react";
import VideoBg from "../assets/Ocean.mp4";

function Landing() {
  return (
    <React.Fragment>
      <card>

      <div className="main">
        <video src={VideoBg} autoPlay loop muted></video>
        <div className="overlay">
          <div className="content">
            <h1 className="text-black"> Welcome</h1>
            <p className="text-black">See with new perspective</p>
          </div>
        </div>
      </div>
      </card>
    </React.Fragment>
  );
}
export default Landing;
