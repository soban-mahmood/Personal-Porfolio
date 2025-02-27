import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import _ScrollTrigger from "gsap/ScrollTrigger";
const Page5 = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(_ScrollTrigger)

  useGSAP(function () {
    let ctx = gsap.context(() => {
      const textElements = document.querySelectorAll("#rotatetext");
      textElements.forEach((element) => {
        gsap.set(element, {
          opacity: 0,
          rotateX: -50
        });
        
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Starts animation when element is 80% from top of viewport
            end: "top 20%",
            toggleActions: "play none none reverse",
            markers: false
          },
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: "power2.out"
        });
      });
    });
    return () => ctx.revert();
  });

  return (
    <div className=" text-center text-black">
      <div id="rotatetext" className="">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          HELPING
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          MY
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          CLIENTS
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          TO ACHIVE
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          THEIR
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          DREAMS!
        </h1>
      </div>
    </div>
  );
};

export default Page5;
