import React from "react";
import VideoBg from "../assets/VideoBg.mp4";

function Landing() {

  return (
    <React.Fragment>
      
      <div className="main">
        <video src={VideoBg} autoPlay loop muted></video>
        <div className="overlay">
          <div className="content">
            <h1 className="welcome__text"> Welcome</h1>
            <p className="welcome__text_p">See with new perspective</p>
          </div>
        </div>
      </div>
    
    </React.Fragment>
  );
}
export default Landing;
