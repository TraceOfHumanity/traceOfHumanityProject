import { useGSAP } from "@gsap/react";
import { useAnimation } from "hooks/useAnimation";
import React, { useRef } from "react";

import { greetingAuthorText } from "utils/textData";

import { PopupWrapper } from "ui-elements/PopupWrapper";

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

      <div className="grid-cols-skills grid">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="before:content-folderTop h-10 before:w-full relative before:absolute before:top-0 before:left-0"
              ref={(el) => (skillsRef.current[index] = el)}
            >
              {index}
            </div>
          ))}
      </div>
    </div>
  );
};
