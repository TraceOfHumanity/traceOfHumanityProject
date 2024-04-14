import gsap from "gsap";

export const useAnimation = () => {
  const popupAnimation = (refElement) => {
    gsap.fromTo(
      refElement.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "elastic.inOut(1, 0.7)" },
    );
  };

  return { popupAnimation };
};
