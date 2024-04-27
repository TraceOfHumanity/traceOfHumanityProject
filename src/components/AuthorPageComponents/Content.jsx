import { useGSAP } from "@gsap/react";
import { useAnimation } from "hooks/useAnimation";
import React, { useRef } from "react";

import { greetingAuthorText } from "utils/textData";

import { PopupWrapper } from "ui-elements/PopupWrapper";

import { skillsList } from "./text";

export const AuthorContent = () => {
  const { generatingTitleAnimation, sideDropAnimation } = useAnimation();
  const descriptionsRef = useRef([]);
  const titleRef = useRef(null);
  const skillsRef = useRef([]);

  useGSAP(() => {
    generatingTitleAnimation(titleRef);
  });

  useGSAP(() => {
    sideDropAnimation(skillsRef);
  });

  return (
    <div className="relative z-10 p-[1vw]">
      <PopupWrapper className="relative  mt-[50vh] max-w-full lg:mt-0 lg:max-w-[40vw]">
        <h2 ref={titleRef}>Live and let live</h2>
        <div>
          {greetingAuthorText.map((text, index) => (
            <p key={index} ref={(el) => (descriptionsRef.current[index] = el)}>
              {text}
            </p>
          ))}
        </div>
      </PopupWrapper>

      <div className="grid max-w-80 gap-4">
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="before:content-folderTop relative before:absolute before:left-0 before:top-0 before:w-full before:transform "
            ref={(el) => (skillsRef.current[index] = el)}
          >
            <h4 className="max-w-[50%] overflow-hidden text-ellipsis whitespace-nowrap p-1">
              {item.category}
            </h4>
            <div className="border rounded-b-md">
              {item.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
