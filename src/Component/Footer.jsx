import cwLogo from "../assets/cwLogo.svg";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
function Footer() {
  return (
    <section className="bg-[#F5F3EE] font-Inter text-[#1C4F4A] w-screen h-fit md:py-16">
      <footer className="container mx-auto px-5">
        <div className="grid  md:grid-cols-2 gap-8 justify-between">
          <img className="md:w-[300px]" src={cwLogo} alt="" />
          <div className="block md:hidden flex items-center gap-4 text-2xl">
            <FaFacebookF />
            <BsInstagram />
            <BiLogoLinkedin />
            <FaDiscord />
          </div>
          <div className="grid grid-cols-3 gap-5 pb-5 md:gap-40">
            <ul className="flex flex-col gap-5 text-sm md:text-base">
              <li className="font-bold">Product</li>
              <li>How it works</li>
              <li>Service</li>
              <li>Pricing</li>
            </ul>
            <ul className="flex flex-col gap-5 text-sm md:text-base">
              <li className="font-bold">Company</li>
              <li>Abouts</li>
              <li>FAQs</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
            <ul className="flex flex-col gap-5 text-sm md:text-base">
              <li className="font-bold">Utility</li>
              <li>Privacy Policy </li>
              <li>Term of use</li>
              <li>404 Page</li>
              <li>Protected Page</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-4xl md:pb-4">
          <FaFacebookF />
          <BsInstagram />
          <BiLogoLinkedin />
          <FaDiscord />
        </div>
        <div className="md:flex items-center justify-between border-t-[1px] border-[#1C4F4A] py-5 md:pt-5 ">
          <h1 className="text-sm md:text-base">© Copyright CloudWave</h1>
          <ul className="flex gap- justify-center items-center md:gap-10 text-xs md:text-base py-4">
            <li>Terms and condition</li>
            <li>Privacy Policy Users </li>
            <li>Privacy Policy Clients </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
export default Footer;
