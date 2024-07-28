import React from 'react';
import "./SkillCardStyle.css";
import { FaPython } from "react-icons/fa";

export default function SkillCard({ id }) {
  return (
    
    <div className="skill-container" id={id}>
      {/* {<div className="skill-header">Technology Used</div> } */}
      <div className="skill-box">
        <div className="skillset">
          {/* <abbr title='Python'><FaPython className='techLogo' /></abbr> */}

        </div>
      </div>
    </div>
  );
}
