
import video from "../assets/vedio.mp4";
const Page7 = () => {
  return (
    <div>
       <div className="h-full relative p-10 ">
      <div className="h-screen w-[100%] rounded-[50px] bg-neutral-100">
        <video
          src={video}
          autoPlay
          muted
          loop
          className=" relative rounded-[45px] h-full w-full object-cover "
        ></video>
        <h1 className="uppercase absolute text-[30vw] font-[anzo4] px-10 bottom-0 text-white ">
          soban
        </h1>
      </div>
    </div>
    </div>
  )
}

export default Page7
