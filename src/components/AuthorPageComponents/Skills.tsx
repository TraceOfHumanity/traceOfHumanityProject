import React, {useEffect, useRef} from "react";
import {FaCode, FaDatabase} from "react-icons/fa";
import {FaGears} from "react-icons/fa6";
import {IoLanguage} from "react-icons/io5";
import {MdOutlineDesignServices} from "react-icons/md";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {skillsList} from "utils/textData";

export const Skills = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  const gsapAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    const angleStep = 180 / (skillsList.length - 1);
    skillRefs.current.forEach((skill, index) => {
      if (skill) {
        const angle = angleStep * index - 90;
        const radius = window.innerWidth < 768 ? window.innerWidth / 3 : 230;
        const x =
          radius * Math.sin((angle * Math.PI) / 180) - skill.offsetWidth / 2;
        const y = (radius * Math.cos((angle * Math.PI) / 180)) / 2;
        gsap.fromTo(
          skill,
          {x: 0, y: 0, opacity: 0, duration: 0.1},
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
              toggleActions: "play play reverse reverse",
            },
          },
        );
      }
    });
  };

  useEffect(() => {
    gsapAnimation();

    return () => {
      skillRefs.current.forEach((skill) => {
        if (skill) {
          gsap.killTweensOf(skill);
        }
      });
    };
  }, []);

  return (
    <div className="relative my-36">
      <div className="mx-auto flex aspect-square w-fit items-center justify-center rounded-full p-3 shadow-popupShadow">
        <h2 ref={titleRef}>Skills</h2>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        {skillsList.map((skill, index) => (
          <div
            className="group absolute w-fit rounded-md p-2 opacity-0 shadow-popupShadow hover:z-50 flex gap-2 md:gap-3 items-center"
            key={skill.category}
            ref={(el) => (skillRefs.current[index] = el)}
          >
            {skill.category === "Frontend" && <FaCode className="text-xl" />}
            {skill.category === "Backend" && <FaDatabase className="text-xl" />}
            {skill.category === "Embedded" && <FaGears className="text-xl" />}
            {skill.category === "Design" && <MdOutlineDesignServices className="text-xl" />}
            {skill.category === "Languages" && <IoLanguage className="text-xl" />}
            <h3 className="relative text-grayText max-md:text-sm">{skill.category}</h3>
            <div className="shadow-blueShadow pointer-events-none absolute left-1/2 top-[-30px] z-50 flex -translate-x-1/2 -translate-y-full transform flex-col rounded-md bg-black p-2 text-base text-white opacity-0 transition-all duration-300 ease-in-out content-[attr(data-tooltip)] hover:opacity-100 group-hover:z-50 group-hover:opacity-100">
              {skill.skills.map((item, index) => (
                <p className="whitespace-nowrap" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
