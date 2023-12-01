import React, { useEffect, useRef } from "react";

import baffle from "baffle";

import { greetingAuthorText } from "../text";
import styles from "./content.module.scss";

export const AuthorContent = () => {
  const descriptionsRef = useRef([]);
  useEffect(() => {
    const title = baffle(".description");
    title.set({
      characters: "▓h￦u﮺ﬕmힰaꥅn㐣i㒸ty",
      speed: 70,
    });
    title.start();
    title.reveal(1000, 1000);
    descriptionsRef.current.forEach((element) => {
      const description = baffle(element);
      description.set({
        characters: "yoⰀne￦l﮺ﬕve〄ㄝꥅH㒸eoer!",
        speed: 70,
      });
      description.start();
      description.reveal(1000, 1400);
    });
  }, []);
  return (
    <div className={styles.descriptionContainer}>
      {/* <h1 className={`${styles.h1} title`}>Trace of Humanity</h1> */}
      <h2 className={styles.subTitle}>Live and let live</h2>
      <div
      // style={{
      //   position: "relative",
      //   // top: "150px",
      //   left: "1vw",
      //   width: "calc(300px + (800 - 300) * ((100vw - 320px) / (2500 - 320)))",
      // }}
      >
        {greetingAuthorText.map((text, index) => (
          <>
            <p
              className={styles.description}
              key={index}
              ref={(el) => (descriptionsRef.current[index] = el)}
            >
              {text}
            </p>
          </>
        ))}
      </div>
      {/* <Loader /> */}
    </div>
  );
};
