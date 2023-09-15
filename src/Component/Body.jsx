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

console.log(FaFacebookF);

const centerLogos = "flex w-full justify-center";

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
        <div className="bg-[#1C4F4A] w-full -mt-2 py-10 md:pb-14">
          <div className="container mx-auto px-5 ">
            <p className="font-Inter text-[#F5F3EE] text-center text-[18px] md:text-[32px] md:w-1/2 mx-auto">
              We are trusted by more than 1.000 Companies worldwide
            </p>
            <div className="grid grid-cols-3 w-full items-center justify-center gap-20 mt-12">
              <div className={centerLogos}>
                <Logo img={<BsPinterest />} test="Pinterest" />
              </div>
              <div className={centerLogos}>
                <Logo img={<BiLogoLinkedin />} test="Linkedln" />
              </div>
              <div className={centerLogos}>
                <Logo img={<BsInstagram />} test="Instagram" />
              </div>

              <div className={centerLogos}>
                <Logo img={<FaFacebookF />} test="Facebook" />
              </div>

              <div className={centerLogos}>
                <Logo img={<BiLogoYoutube />} test="YouTube" />
              </div>

              <div className={centerLogos}>
                <Logo img={<FaDiscord />} test="Discord" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function Logo(Props) {
  return (
    <div className=" text-white flex items-center gap-2 text-2xl md:text-4xl">
      {Props.img}
      <p className="hidden md:block">{Props.test}</p>
    </div>
  );
}
export default Body;
