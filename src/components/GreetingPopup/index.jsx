import React, { useRef } from "react";

import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

import { setIsPlaying } from "../../redux/audioPlayer/audioPlayerSlice";
import { setIsOpenGreetingPopup } from "../../redux/popups/popupsSlice";
import { greetingPopupText } from "./data";
import styles from "./greetingPopup.module.scss";

export const GreetingPopup = () => {
  const dispatch = useDispatch();
  const greetingPopupRef = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     greetingPopupRef.current,
  //     {
  //       scale: 0,
  //     },
  //     {
  //       scale: 1,
  //       duration: 2,
  //       ease: "elastic.out(0.5, 0.4)",
  //     }
  //   );
  // }, []);
  return (
    <div className={styles.greetingPopupWrapper} ref={greetingPopupRef}>
      <div className={styles.popup}>
        <button
          className={styles.closePopup}
          onClick={() => {
            dispatch(setIsOpenGreetingPopup(false));
            dispatch(setIsPlaying(true));
          }}
        >
          <IoMdClose />
        </button>
        <h2>{greetingPopupText.title}</h2>
        {greetingPopupText.text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};
