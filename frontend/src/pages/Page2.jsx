import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const Page2 = () => {
 

  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(_ScrollTrigger)

  useGSAP(function () {
    let ctx = gsap.context(() => {
      const textElements = document.querySelectorAll("#rotate-text");
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
    <div id="section-2" className=" text-center text-black  ">
      <h4 className="text-2xl text-[#717171] font-[anzo2]">
        © Soban.Dev 2025 | designed and developed
      </h4>
      <div id="rotate-text" className="lg:mt-60 mt-20">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          IMPACTFUL
        </h1>
      </div>
      <div className="" id="rotate-text">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          DESIGN
        </h1>
      </div>
      <div className="" id="rotate-text">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          IS THE
        </h1>
      </div>
      <div className="" id="rotate-text">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          DESIGN
        </h1>
      </div>
      <div className="" id="rotate-text">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          THATS
        </h1>
      </div>
      <div className="" id="rotate-text">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          WORKS!
        </h1>
      </div>
      
    </div>
  );
};

export default Page2;
