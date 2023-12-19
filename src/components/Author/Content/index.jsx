import React, { useEffect, useRef } from "react";
import { FaCode, FaDatabase, FaLanguage, FaTools } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

import baffle from "baffle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { greetingAuthorText, skillsList } from "../text";
import styles from "./content.module.scss";

export const AuthorContent = () => {
  const descriptionContainerRef = useRef(null);
  const descriptionsRef = useRef([]);
  const skillsListRef = useRef(null);
  useEffect(() => {
    const title = baffle(".title");
    title.set({
      characters: "▓h￦u﮺ﬕmힰaꥅn㐣i㒸ty",
      speed: 70,
    });
    title.start();
    title.reveal(1000, 1000);
    // descriptionsRef.current.forEach((element) => {
    //   const description = baffle(element);
    //   description.set({
    //     characters: "yoⰀne￦l﮺ﬕve〄ㄝꥅH㒸eoer!",
    //     speed: 70,
    //   });
    //   description.start();
    //   description.reveal(1000, 1400);
    // });
  }, []);
  useEffect(() => {
    gsap.fromTo(
      descriptionContainerRef.current,
      {
        opacity: 0,
        y: 100,
        // height: 0,
        // scaleY: 0,
      },
      {
        opacity: 1,
        duration: 4,
        y: 0,
        // scaleY: 1,
        transformOrigin: "top",
        // height: "auto",
        ease: "elastic.out(1, 0.4)",
      }
    );
    // const arr = skillsListRef.current.querySelectorAll("li");

    // arr.forEach((item, index) => {
    //   gsap.to(item, {
    //     x: 10,
    //     y: 2,
    //     duration: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     delay: index * 0.1,
    //     stagger: 0.5,
    //   });
    // });
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
      }
    );
  }, []);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.descriptionContainer}
        ref={descriptionContainerRef}
      >
        {/* <h1 className={`${styles.h1} title`}>Trace of Humanity</h1> */}
        <h2 className="title">Live and let live</h2>
        <div>
          {greetingAuthorText.map((text, index) => (
            <p
              className={styles.description}
              key={index}
              ref={(el) => (descriptionsRef.current[index] = el)}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.skillsContainer}>
        <h2>Skills</h2>
        {/* <ul className={styles.skillsList} ref={skillsListRef}>
          {skillsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
        <div className={styles.skillsList}>
          {skillsList.map((item, index) => (
            <div
              className={`skill ${styles.skill}`}
              key={index}
              // style={{
              //   backgroundImage: `url(${
              //     item.category === "Frontend" &&
              //   })`,
              // }}
            >
              <p className={styles.skillTitle}>{item.category}</p>
              <ul>
                {item.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <div className={styles.icon}>
                {item.category === "Frontend" && <FaCode />}
                {item.category === "Backend" && <FaDatabase />}
                {item.category === "Embedded" && <FaGears />}
                {item.category === "Tools" && <FaTools />}
                {item.category === "Design" && <MdOutlineDesignServices />}
                {item.category === "Languages" && <IoLanguage />}
              </div>
              {/* {item.projects && (
                <div className={styles.projects}>
                  {item.projects.map((project, index) => (
                    <div key={index}>{project.link}</div>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
