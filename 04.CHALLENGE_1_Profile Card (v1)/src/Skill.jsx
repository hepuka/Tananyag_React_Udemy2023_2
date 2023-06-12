import React from "react";

const Skill = ({ data }) => {
  return (
    <div className="skill" style={{ backgroundColor: data.color }}>
      <span>{data.skill}</span>
      <span>
        {data.level === "beginner" && "👶"}
        {data.level === "intermediate" && "👍"}
        {data.level === "advanced" && "💪"}
      </span>
    </div>
  );
};

export default Skill;
