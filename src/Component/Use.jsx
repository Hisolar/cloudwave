import dest from "../assets/dest.png";
import deckimage from "../assets/deckimage.png";
import next from "../assets/next.png";
function Use() {
  return (
    <section className="bg-[#F5F3EE] font-Inter text-[#1C4F4A] w-screen min-h-min">
      <div className="container mx-auto px-5">
        <h1 className="text-center font-Inter font-bold text-2xl md:text-4xl md:py-14 py-8">
          4 Reasons To Use CloudWave
        </h1>

        <div className="relative">
          <div className="w-[350px] h-[150px] md:w-[700px] md:h-[300px] mx-auto rounded-xl bg-[#CCDCF6] flex items-center  justify-center"></div>
          <div className="w-[350px] h-[150px] md:w-[730px] md:h-[300px] mx-auto rounded-xl bg-[#1C4F4A] flex items-center  justify-center absolute top-5 md:left-64 "></div>
          <div className="w-[350px] h-[150px] md:w-[760px] md:h-[300px] mx-auto rounded-xl bg-[#FFB130] flex items-center  justify-center absolute top-10 md:left-60"></div>
          <div className="de"></div>

          <div className=" w-[350] h-[180px] md:w-[800px] md:h-[350px] mx-auto rounded-xl bg-[#FC6719] flex items-center  justify-center absolute top-[60px] md:left-[220px]">
            <div className="flex flex-col items-center justify-center px-4 md:px-10 md:py-16 md:gap-4 text-white text-center">
              <img className="w-12 md:w-fit" src={dest} alt="" />
              <h1 className="text-xl md:text-3xl font-bold">
                Advanced Systems
              </h1>
              <p className="text-xs">
                Advanced Systems Engineering consists of solutions (and
                respective development), increasingly relying on intelligent
                components and subsystems to deliver improved performance for
                different and complex.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-28 md:pt-36">
          <img src={next} alt="" />
          <div className="bg-[#1C4F4A] w-40 h-12 my-5 rounded-lg">
            <h1 className="text-white text-center flex justify-center items-center h-full">
              Learn More
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Use;
