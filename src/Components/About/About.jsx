import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/SRI-PHOTO.jpg";
const About = () => {
  return (
    <div id='about1' className="about">
      <div  className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an aspiring Frontend Developer with understanding in HTML,
              CSS ,JavaScript and basics of React. I aspire to become a Full
              Stack Developer in my upcoming years.
            </p>
            <p>
              My passion for frontend development grew out of curiosity in
              making beautiful and responsive websites for my friends. Began as
              a part time hobby, web development has become a integral core of
              my domain.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
          <div className="about-achievement">
            <h1>Top 15</h1>
            <p>Suprathon Hackathon (200+ teams participated)</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>Department Topper</h1>
            <p> Secured a CGPA of 9.40</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>Chess Zonal Champions</h1>
            <p>Won Chess Zonals since joined college</p>
          </div>
        </div>
    </div>
  );
};

export default About;
