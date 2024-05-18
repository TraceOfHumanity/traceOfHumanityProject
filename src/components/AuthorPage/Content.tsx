import {useGSAP} from "@gsap/react";
import React, {useRef} from "react";

import {useAnimation} from "hooks/useAnimation";
import {PopupWrapper} from "ui-elements/PopupWrapper";
import {greetingAuthorText, skillsList} from "utils/textData";
import { Skills } from "./Skills";

export const AuthorContent = () => {
  const {generatingTitleAnimation, sideDropAnimation} = useAnimation();
  // const descriptionsRef = useRef([]);
  const descriptionsRef = useRef<Array<HTMLParagraphElement | null>>([]);
  // const titleRef = useRef(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const skillsRef = useRef<Array<HTMLDivElement | null>>([]);

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


      <Skills />
      {/* <h2 className="mt-36 mb-3">Skills</h2>
      <div className=" grid w-full gap-4 min-[360px]:grid-cols-2 min-[550px]:grid-cols-3 min-[900px]:grid-cols-4 lg:grid-cols-5">
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="relative h-fit overflow-hidden rounded-lg shadow-popupShadow backdrop-blur-md"
            ref={(el) => (skillsRef.current[index] = el)}
          >
            <h4 className="overflow-hidden text-ellipsis whitespace-nowrap rounded-t-lg border border-borderColor p-1">
              {item.category}
            </h4>
            <div className="flex flex-col rounded-b-md border border-t-0 border-borderColor p-1">
              {item.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
