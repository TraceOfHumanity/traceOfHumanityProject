import gsap from "gsap";
import { useDispatch } from "react-redux";
import { setFlashingOfTheLoginButton } from "../redux/slices/animationsSlice";

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

  return { popupAnimation, hintAnimation };
};
