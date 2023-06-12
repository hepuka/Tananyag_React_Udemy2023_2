import React from "react";
import Skill from "./Skill";
import { data } from "./data.js";

const SkillList = () => {
  return (
    <div className="skill-list">
      {data.map((item) => (
        <Skill data={item} key={item.skill} />
      ))}

      {/* <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="red" /> */}
    </div>
  );
};

export default SkillList;
