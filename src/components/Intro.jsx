import React from "react";

const introText = {
  title: "플랜아이 자기성장 PT",
  keyword: "GROWTH",
  department: "MX-P Publishing",
  name: "이지은 FD",
};

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">
          <strong>{introText.title}</strong>
          <p>{introText.keyword}</p>
          <span>
            {introText.department} <em>{introText.name}</em>
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Intro;
