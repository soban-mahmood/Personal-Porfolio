const TiltText = ({ titlRef }) => {
  return (
    <div ref={titlRef} id="tiltDiv" className="mt-40  ">
      <h1 className="text-[5.2vw] sm:text-[10vw]  uppercase font-[anzo1] leading-[4vw]">
        Hi,
        <span className="text-[#F34235] mx-4 sm:text-[10vw]">I'm</span>
      </h1>
      <h1 className="text-[7vw] sm:text-[10vw] leading-[7vw] sm:leading-[20vw] font-[anzo1] uppercase">
        Soban 👋
      </h1>
      <h1 className="text-[4.2vw]  sm:text-[10vw] leading-[4vw] sm:leading-[10vw] font-[anzo1]">
        React.js Frontend Developer
      </h1>
      <span className="text-2xl text-[#5092FF]">
        <a href="https://www.linkedin.com/in/soban-mehmood4343/" target="blank">
          LinkedIn
        </a>
      </span>
      <span className="text-2xl mx-2">||</span>
      <span className="text-2xl text-[#F34235]">
        <a href="https://github.com/soban-mahmood" target="blank">
          GitHub
        </a>
      </span>
    </div>
  );
};

export default TiltText;
