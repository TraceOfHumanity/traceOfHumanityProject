import React, { useEffect, useRef } from "react";

import baffle from "baffle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { contactsList, greetingAuthorText, skillsList } from "../text";
import styles from "./content.module.scss";

export const AuthorContent = () => {
  const descriptionContainerRef = useRef(null);
  const descriptionsRef = useRef([]);
  useEffect(() => {
    const title = baffle(".title");
    title.set({
      characters: "▓h￦u﮺ﬕmힰaꥅn㐣i㒸ty",
      speed: 70,
    });
    title.start();
    title.reveal(1000, 1000);
  }, []);
  useEffect(() => {
    gsap.fromTo(
      descriptionContainerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        duration: 4,
        y: 0,
        transformOrigin: "top",
        ease: "elastic.out(1, 0.4)",
      }
    );
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
      }
    );
  }, []);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.descriptionContainer}
        ref={descriptionContainerRef}
      >
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

      <div className={`contactsWrapper ${styles.contactsWrapper}`}>
        <h2>Contacts</h2>
        <div className={styles.contacts}>
          {contactsList.map((item) => (
            <a href={item.link} target="_blank" key={item.name}>
              {item.logo}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.skillsContainer}>
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
          {/* <Skills /> */}
        </div>
      </div>
    </div>
  );
};
