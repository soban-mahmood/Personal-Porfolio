
import logo1 from "./../assets/sidelogo1.webp";
import logo2 from "./../assets/sidelogo2.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page1Bottom = () => {
  
useGSAP(() => {
  gsap.to('.logos',{
    rotate: 360,
    repeat: -1,
    duration: 10,
    ease: "linear"
  })
})
  return (
    <div className="absolute w-full left-0 px-[3vw] py-[1vw] flex justify-between items-end sm:mt-20 ">
      <div>
        <h2 className="text-[25px] font-[anzo3] text-[#F34235]">BRAND DESIGN | WEBSITE DESIGN</h2>
        <h2 className="text-[25px] font-[anzo2] text-[#8C8C8C]"> BESPOKE FREELANCE</h2>
      </div>
      <div className="">
        <img src={logo1} alt=""   className="logos" />
        <br />
        <img src={logo2} alt=""   className="logos"/>
      </div>
    </div>
  );
};

export default Page1Bottom;
