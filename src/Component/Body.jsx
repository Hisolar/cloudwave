import { RiFileVideoFill } from "react-icons/ri";
import user from "../assets/user.svg";
import bodyImage1 from "../assets/bodyImage1.svg";
function Body() {
  return (
    <article className="bg-[#F5F3EE] w-full h-screen relative">
      <div className="container mx-auto px-5 ">
        <div className="flex flex-col gap-6 md:pt-10 ">
          <h1 className="font-Inter text-[#1C4F4A] font-bold text-[30px] md:text-[50px] w-10/12 md:w-1/2">
            Simplify Your Workflow with CloudWave{" "}
          </h1>
          <div className="flex gap-2">
            <button className="bg-[#FC6719] px-4 py-2 text-white rounded-md">
              Let's do this
            </button>
            <div className="bg-[#1C4F4A] px-4 py-2 text-white w-fit flex items-center gap-1 rounded-md">
              <p>
                <RiFileVideoFill />
              </p>
              <p>play video</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-[80px] md:w-[200px]" src={user} alt="" />
            <p className="font-Inter leading-relaxed text-[12px] md:text-xl">
              +10k Users around the Globe
            </p>
          </div>
        </div>
        <img className="md:absolute md:top-0" src={bodyImage1} alt="" />
      </div>
    </article>
  );
}
export default Body;
