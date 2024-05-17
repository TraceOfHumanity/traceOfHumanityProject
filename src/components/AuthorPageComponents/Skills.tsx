import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { skillsList } from "utils/textData";

// const skills = [
//   { name: "frontend" },
//   { name: "backend" },
//   { name: "design" },
//   { name: "management" },
//   { name: 
//   { name: 6 },
  
// ];

export const Skills = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const angleStep = 180 / (skillsList.length - 1);
    skillRefs.current.forEach((skill, index) => {
      if (skill) {
        const angle = angleStep * index ;
        const radius = 200; 
        const x = radius * Math.cos((angle * Math.PI) / 180) - skill.offsetWidth / 2;
        const y = radius * Math.sin((angle * Math.PI) / 180);
        gsap.to(skill, {
          x,
          y,
          duration: 1,
          ease: "elastic.out(1, 0.75)"
        });
      }
    });
  }, []);

  return (
    <div className="relative mt-36">
      <div className="mx-auto flex aspect-square w-fit items-center justify-center rounded-full p-3 shadow-popupShadow">
        <h2 ref={titleRef}>Skills</h2>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {skillsList.map((skill, index) => (
          <div
            className="absolute w-fit rounded-md bg-blue p-1"
            key={skill.category}
            ref={(el) => (skillRefs.current[index] = el)}
          >
            {skill.category}
          </div>
        ))}
      </div>
    </div>
  );
};
