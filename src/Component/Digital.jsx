import digital from "../assets/digital.png";
function Digital() {
  return (
    <section className="bg-[#F5F3EE] font-Inter text-white w-screen h-fit py-16">
      <div className="container mx-auto px-5">
        <div className="bg-[#1C4F4A] w-full h-auto rounded-lg md:flex md:justify-center items-center px-10 py-5 md:py-12">
          <div className="px-5 py-10 md:py-20 ">
            <h1 className="text2xl md:text-4xl font-bold py-2">
              Lets build your next digital adventure
            </h1>
            <button className="bg-[#FC6719] outline-none rounded-md px-3 py-1 mx-auto text-sm">
              See the price
            </button>
          </div>
          <img src={digital} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Digital;
