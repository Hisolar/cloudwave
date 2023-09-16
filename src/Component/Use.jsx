import dest from "../assets/dest.png";
import next from "../assets/next.png";
function Use() {
  return (
    <section className="bg-[#F5F3EE] font-Inter text-[#1C4F4A] w-screen h-screen">
      <div className="container mx-auto px-5">
        <h1 className="text-center font-Inter font-bold text-2xl md:text-4xl py-14">
          4 Reasons To Use CloudWave
        </h1>

        <div className="relative">
          <div className="w-[700px] h-[300px] mx-auto rounded-xl bg-[#CCDCF6] flex items-center  justify-center"></div>
          <div className="w-[730px] h-[300px] mx-auto rounded-xl bg-[#1C4F4A] flex items-center  justify-center absolute top-5 left-64 "></div>
          <div className="w-[760px] h-[300px] mx-auto rounded-xl bg-[#FFB130] flex items-center  justify-center absolute top-10 left-60"></div>

          <div className="w-[800px] h-[350px] mx-auto rounded-xl bg-[#FC6719] flex items-center  justify-center absolute top-[60px] left-[220px]">
            <div className="flex flex-col items-center justify-center px-10 py-16 gap-4 text-white text-center">
              <img src={dest} alt="" />
              <h1 className="text-xl md:text-3xl font-bold">
                Advanced Systems
              </h1>
              <p>
                Advanced Systems Engineering consists of solutions (and
                respective development), increasingly relying on intelligent
                components and subsystems to deliver improved performance for
                different and complex.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-36">
          <img src={next} alt="" />
          <div className="bg-[]"></div>
        </div>
      </div>
    </section>
  );
}
export default Use;
