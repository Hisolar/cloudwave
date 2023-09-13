import cwLogo from "../assets/cwLogo.svg";
import menuIcon from "../assets/menuIcon.svg";
import { IoMdCall } from "react-icons/io";
function Header() {
  return (
    <section className="bg-[#F5F3EE] w-full h-24 ">
      <div className="container mx-auto px-5">
        <div className="pt-5 font-Inter text-lg text-[#1C4F4A] flex item-center justify-between">
          <img src={cwLogo} alt="" />
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li className="bg-[#DFE3DE] rounded-lg px-4 py-2">
              <a href="">How it works</a>
            </li>
            <li>
              <a href="">
                <IoMdCall size={30} />
              </a>
            </li>
          </ul>
          <img className="visible md:hidden" src={menuIcon} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Header;
