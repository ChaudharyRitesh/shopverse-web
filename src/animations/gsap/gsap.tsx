import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const GsapAnimation = () => {
  useGSAP(() => {
    gsap.to("#box1", {
      x: 1000,
      duration: 1.5,
      delay: 1,
      stagger: 0.3,

      repeatDelay: 0.8,
    });
    gsap.to("#box2", {
      x: 1000,
      duration: 1.5,
      delay: 2.5,
      stagger: 0.5,
      repeatDelay: 0.8,
    });
    gsap.to("#box3", {
      x: 1000,
      duration: 1.5,
      delay: 3,
      stagger: 1,

      repeatDelay: 0.8,
    });
  });

  return (
    <div className="container space-y-2">
      <div id="box1" className="box w-[100px] h-[100px] bg-red-500"></div>
      <div id="box2" className="box w-[100px] h-[100px] bg-blue-500"></div>
      <div id="box3" className="box w-[100px] h-[100px] bg-green-500"></div>
    </div>
  );
};

export default GsapAnimation;
