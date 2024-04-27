import baffle from "baffle";
import gsap from "gsap";
import { useDispatch } from "react-redux";

import { setFlashingOfTheLoginButton } from "../redux/slices/animationsSlice";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAnimation = () => {
  const dispatch = useDispatch();

  const popupAnimation = (refElement) => {
    gsap.fromTo(
      refElement.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "elastic.inOut(1, 0.7)" },
    );
  };

  const hintAnimation = (refElement) => {
    gsap.fromTo(
      refElement.current,
      { scale: 1 },
      {
        delay: 1,
        scale: 1.01,
        duration: 1.5,
        repeat: 4,
        transformOrigin: "center",
        ease: "elastic.out(10, 0.1)",
        onComplete: () => {
          dispatch(setFlashingOfTheLoginButton(false));
        },
      },
    );
  };

  const generatingTitleAnimation = (refElement) => {
    const title = baffle(refElement.current);
    title.set({
      characters: "▓h￦u﮺ˤmힰaꥅn/i~ty",
      speed: 70,
    });
    title.start();
    title.reveal(700, 700);
  };

  const sideDropAnimation = (refElement) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      refElement.current,
      { duration: 0.5, opacity: 0, x: -100 },
      {
        duration: 1,
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: "elastic(1, 0.75)",
        scrollTrigger: {
          trigger: refElement.current,
          start: "top 90%",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  };

  return { popupAnimation, hintAnimation, generatingTitleAnimation, sideDropAnimation };
};
