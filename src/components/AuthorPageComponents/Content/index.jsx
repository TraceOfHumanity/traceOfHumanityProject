import baffle from "baffle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

import { greetingAuthorText } from "utils/textData";

import { PopupWrapper } from "ui-elements/PopupWrapper";

export const AuthorContent = () => {
  const descriptionsRef = useRef([]);
  useEffect(() => {
    const title = baffle(".title");
    title.set({
      characters: "▓h￦u﮺ˤmힰaꥅn/i~ty",
      speed: 70,
    });
    title.start();
    title.reveal(1000, 1000);
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".skill",
      { duration: 0.5, opacity: 0, x: -100 },
      {
        duration: 1,
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: "elastic(1, 0.75)",
        scrollTrigger: {
          trigger: ".skill",
          start: "top 90%",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      ".contactsWrapper",
      { duration: 0.5, opacity: 0, x: 100 },
      {
        delay: 0.5,
        duration: 1,
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: "elastic(1, 0.75)",
      },
    );
  }, []);
  return (
    <div className="relative z-10 overflow-y-auto p-[1vw]">
      <PopupWrapper className="relative  mt-[50vh] max-w-full lg:mt-0 lg:max-w-[40vw]">
        <h2 className="title">Live and let live</h2>
        <div>
          {greetingAuthorText.map((text, index) => (
            <p key={index} ref={(el) => (descriptionsRef.current[index] = el)}>
              {text}
            </p>
          ))}
        </div>
      </PopupWrapper>

      {/* <div className={`contactsWrapper ${styles.contactsWrapper}`}>
        <h2>Contacts</h2>
        <div className={styles.contacts}>
          {contactsList.map((item) => (
            <a href={item.link} target="_blank" key={item.name}>
              {item.logo}
            </a>
          ))}
        </div>
      </div> */}

      {/* <div className={styles.skillsContainer}>
        <h2>Tools</h2>
        <div className={styles.skillsList}>
          {skillsList.map((item, index) => (
            <div className={`skill ${styles.skill}`} key={index}>
              <p className={styles.skillTitle}>{item.category}</p>
              <ul>
                {item.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <div className={styles.icon}>{item.logo}</div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};
