import {useDispatch} from "react-redux";

import baffle from "baffle";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {setFlashingOfTheLoginButton} from "../redux/slices/animations";

interface IUseAnimation {
  popupAnimation: (refElement: React.RefObject<HTMLDivElement>) => void;
  hintAnimation: (refElement: React.RefObject<HTMLDivElement>) => void;
  generatingTitleAnimation: (
    refElement: React.RefObject<HTMLHeadingElement>,
  ) => void;
  sideDropAnimation: (refElement: React.RefObject<HTMLDivElement>) => void;
}

export const useAnimation = () => {
  const dispatch = useDispatch();

  const popupAnimation: IUseAnimation["popupAnimation"] = (refElement) => {
    gsap.fromTo(
      refElement.current,
      {opacity: 0, y: -50},
      {opacity: 1, y: 0, duration: 0.5, ease: "elastic.inOut(1, 0.7)"},
    );
  };

  const hintAnimation: IUseAnimation["hintAnimation"] = (refElement) => {
    gsap.fromTo(
      refElement.current,
      {
        duration: 1,
        boxShadow: "inset 0px 0px 15px 0px #01b9ff",
        ease: "elastic.out(5, 0.5)",
      },
      {
        delay: 1,
        boxShadow: "inset 0px 0px 15px 0px transparent",
        duration: 1.2,
        repeat: 4,
        transformOrigin: "center",
        ease: "elastic.out(1, 1)",
        onComplete: () => {
          dispatch(setFlashingOfTheLoginButton(false));
        },
      },
    );
  };

  const generatingTitleAnimation: IUseAnimation["generatingTitleAnimation"] = (
    refElement,
  ) => {
    if (refElement.current) {
      const title = baffle(refElement.current);
      title.set({
        characters: "▓h￦u﮺ˤmힰaꥅn/i~ty",
        speed: 70,
      });
      title.start();
      title.reveal(700, 700);
    }
  };

  const sideDropAnimation: IUseAnimation["sideDropAnimation"] = (
    refElement,
  ) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      refElement.current,
      {duration: 0.5, opacity: 0, x: -100},
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

  return {
    popupAnimation,
    hintAnimation,
    generatingTitleAnimation,
    sideDropAnimation,
  };
};
