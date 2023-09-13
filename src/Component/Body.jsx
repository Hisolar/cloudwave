import { RiFileVideoFill } from "react-icons/ri";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import user from "../assets/user.svg";
import bodyImage1 from "../assets/bodyImage1.svg";
import bodyFoot from "../assets/bodyFoot.svg";

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
      <section className="relative md:mt-64">
        <img className="" src={bodyFoot} alt="" />
        <div className="bg-[#1C4F4A] h-[463px] w-screen top-10 md:top-36 absolute">
          <div className="container mx-auto px-5 ">
            <p className="font-Inter text-[#F5F3EE] text-center text-[28px] md:w-1/2 mx-auto ">
              We are trusted by more than 1.000 Companies worldwide
            </p>
            <div className=" bg-red-600 grid grid-cols-2 md:grid-cols-3 gap-24 items-center justify-between md:mt-10">
              <Logo img={<BsPinterest />} test="Pinterest" />
              <Logo img={<BiLogoLinkedin />} test="Linkedln" />
              <Logo img={<BsInstagram />} test="Instagram" />
              <Logo img={<FaFacebookF />} test="Facebook" />
              <Logo img={<BiLogoYoutube />} test="YouTube" />
              <Logo img={<FaDiscord />} test="Discord" />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function Logo(Props) {
  return (
    <div className=" text-white bg-blue-400 flex items-center gap-2 text-2xl md:text-4xl max-w-fit">
      <BsPinterest>({Props.img})</BsPinterest>
      <p>{Props.test}</p>
    </div>
  );
}
export default Body;
