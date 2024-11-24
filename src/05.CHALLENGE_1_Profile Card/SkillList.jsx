import React from "react";
import Skill from "./Skill";
import { data } from "./data.js";

const SkillList = () => {
  return (
    <div className="skill-list">
      {data.map((item) => (
        <Skill data={item} key={item.skill} />
      ))}
    </div>
  );
};

export default SkillList;
