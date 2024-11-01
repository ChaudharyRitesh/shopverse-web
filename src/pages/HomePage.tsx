// import { useState, useEffect } from "react";
// import gsap from "gsap";
// import useTheme from "../hooks/usetTheme";
// import "../App.css";
import GsapAnimation from "../animations/gsap/gsap";

const HomePage = () => {
  // const { setTheme, theme } = useTheme();
  // const [isTransitioning, setIsTransitioning] = useState(false);

  // useEffect(() => {
  //   if (isTransitioning) {
  //     const timeout = setTimeout(() => setIsTransitioning(false), 500);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [isTransitioning]);

  // const handleThemeChange = () => {
  //   setIsTransitioning(true);
  //   setTheme(theme === "light" ? "dark" : "light");
  //   localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  // };

  // gsap.to("#box1", {
  //   x: 1000,
  //   duration: 2,
  //   delay: 2,
  //   rotate: 360,
  // });

  // gsap.from("#box", { rotation: -360, x: -100, duration: 1 });

  // gsap.fromTo("#box", { x: -100 }, { rotation: 360, x: 100, duration: 1 });

  // gsap.to("#box1", {
  //   // selector text, Array, or object
  //   x: 1000, // any properties (not limited to CSS)
  //   backgroundColor: "red", // camelCase
  //   duration: 1.5, // seconds
  //   delay: 1,
  //   ease: "power2.inOut",
  //   scale: 0.4,
  //   stagger: 0.3, // stagger start times
  //   paused: false, // default is false
  //   overwrite: "auto", // default is false
  //   repeat: 2, // number of repeats (-1 for infinite)
  //   repeatDelay: 0.5, // seconds between repeats
  //   repeatRefresh: true, // invalidates on each repeat
  //   yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  //   yoyoEase: true, // or ease like "power2"
  //   immediateRender: false,
  //   onComplete: () => {
  //     console.log("finished");
  //   },
  // });

  return (
    <div>
      <GsapAnimation />
    </div>
  );
};

export default HomePage;
