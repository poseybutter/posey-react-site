import React from "react";

import { skillText } from "../constants";

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          성장을 위한
          <br />
          마음가짐
        </h2>
        <div className="skill__desc">
          {skillText.map((skill, key) => (
            <div>
              <span className="mont">0{key + 1}</span>
              <h3>{skill.title} </h3>
              <p>{skill.desc1}</p>
              <p>{skill.desc2}</p>
            </div>
          ))}
          <div>
            <span className="mont">05</span>
            <h3> 리뷰 / 회고</h3>
            <p>전보다 더 나아지기</p>
            <p>
              <em>K</em>eep / <em>P</em>roblem / <em>T</em>ry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
