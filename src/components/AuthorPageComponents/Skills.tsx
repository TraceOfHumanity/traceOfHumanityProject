import React, {useEffect, useRef} from "react";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {skillsList} from "utils/textData";

export const Skills = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const angleStep = 180 / (skillsList.length - 1);
    skillRefs.current.forEach((skill, index) => {
      if (skill) {
        const angle = angleStep * index - 90;
        const radius = 200;
        const x =
          radius * Math.sin((angle * Math.PI) / 180) - skill.offsetWidth / 2;
        const y = radius * Math.cos((angle * Math.PI) / 180);
        gsap.fromTo(
          skill,
          {x: 0, y: 0, opacity: 0},
          {
            x,
            y,
            duration: 1,
            ease: "elastic.out(1, 0.75)",
            delay: 0.1 * index,
            opacity: 1,
            scrollTrigger: {
              trigger: titleRef.current!,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play reverse reverse reverse",
            },
          },
        );
      }
    });
  }, []);

  return (
    <div className="relative my-36">
      <div className="mx-auto flex aspect-square w-fit items-center justify-center rounded-full p-3 shadow-popupShadow">
        <h2 ref={titleRef}>Skills</h2>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        {skillsList.map((skill, index) => (
          <div
            className="absolute w-fit rounded-md bg-blue p-1 opacity-0"
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
