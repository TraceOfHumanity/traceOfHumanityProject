import {useGSAP} from "@gsap/react";
import React, {useRef} from "react";

import {useAnimation} from "hooks/useAnimation";
import {PopupWrapper} from "ui-elements/PopupWrapper";
import {greetingAuthorText} from "utils/textData";

import {Skills} from "./Skills";

export const AuthorContent = () => {
  const {generatingTitleAnimation} = useAnimation();
  const descriptionsRef = useRef<Array<HTMLParagraphElement | null>>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    generatingTitleAnimation(titleRef);
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
    </div>
  );
};
