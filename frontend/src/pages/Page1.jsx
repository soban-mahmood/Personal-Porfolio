import React, { useRef, useState } from "react";
import resume from "../assets/Frontend Developer.pdf";
import logo from "../assets/Logo.webp";
import PIC from "../assets/landing.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";
const Page1 = () => {
  const titlRef = useRef(null);

  const [xVal, setXval] = useState(0);
  const [yVal, setYval] = useState(0);
  const mouseMove = (e) => {
    setXval(
      (e.clientX -
        titlRef.current.getBoundingClientRect().x -
        titlRef.current.getBoundingClientRect().width / 2) /
        60
    );
    setYval(
      -(
        e.clientY -
        titlRef.current.getBoundingClientRect().y -
        titlRef.current.getBoundingClientRect().width / 2
      ) / 30
    );
  };

  useGSAP(
    function () {
      gsap.to(titlRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 1,
        ease: "elastic.out(1,0.3)",
      });
    },
    [xVal, yVal]
  );

  return (
    <>
      <div
        id="page1"
        onMouseMove={(e) => {
          mouseMove(e);
        }}
        className="h-screen relative p-8  "
      >
        <div
          id="page1-in"
          className="h-full w-full p-5  bg-cover shadow-lg relative shadow-gray-700 text-white rounded-[45px]"
          style={{
            backgroundImage: `url(${PIC})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-between items-center">
            <img src={logo} alt="LOGO" />
            <button className="bg-black px-10 py-2 rounded-full border-[#FFC83D] border-[6px] text-[1em]">
              <a href={resume} download="Soban Resume" className="text-white">
                Hire me
              </a>
            </button>
          </div>
          <TiltText titlRef={titlRef} />
        </div>
      </div>
    </>
  );
};

export default Page1;
