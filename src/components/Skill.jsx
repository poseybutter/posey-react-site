import React from "react";

const skillText = [
  {
    title: "기록/메모 습관화",
    desc1: "자주 쓰는 코드는 잘 보이는 곳에 메모하기",
    desc2: "프로젝트가 끝난 후 소스 정리하기",
  },
  {
    title: "영리하게 질문하고 소통하기",
    desc1: "질문해서 배우자 ! 단, 혼자 생각하는 힘 기르기.",
    desc2: "타 직무에 대해 이해하고 영리하게 소통하기",
  },
  {
    title: "일정 관리, 빠른 피드백",
    desc1: "프로젝트 시작 전, 미리 일정 계획하기",
    desc2: "스스로 판단 및 결정 후 책임질 수 있는 핵심인재가 되자 !",
  },
  {
    title: "꾸준한 공부",
    desc1: "JavaScript, SCSS, React, php 등 프론트엔드 영역까지 확장하기",
    desc2: "코드를 바라보는 시각 넓히기",
  },
];

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
