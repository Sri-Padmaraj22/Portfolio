import React from "react";
import "./Qualification.css";
import theme_pattern from "../../assets/theme_pattern.svg";
const Qualification = () => {
  return (
    <div id='qualifications' className="qualification-container">
        <div className="qualification_title">
            <h2 className="title">Qualifications</h2>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="timeline">

        {/* Vikasa School */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>The Vikasa School</h3>
            <p>2010 – 2023</p>
            <p>Percentage: 96.4%</p>
          </div>
        </div>

        {/* TCE */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>The Thiagarajar College of Engineering</h3>
            <p>2023 – Present</p>
            <p>CGPA: 9.4</p>
          </div>
        </div>

        {/* BSNL Internship */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>BSNL – Tuticorin</h3>
            <p>May 2024 – June 2024</p>
            <p>Internship</p>
          </div>
        </div>

        {/* CodeBind Internship */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>CodeBind Technologies – Chennai</h3>
            <p>May 2025 – June 2025</p>
            <p>Internship</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Qualification;
