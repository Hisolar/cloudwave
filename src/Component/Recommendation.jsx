import recBg from "../assets/recBg.png";
import recImage from "../assets/recImage.png";

function Recommendation() {
  return (
    <section className="bg-[#F5F3EE] font-Inter text-[#1C4F4A] w-screen min-h-min">
      <div className="container mx-auto px-5">
        <h1 className="py-10 text-center font-bold text-2xl md:text-4xl">
          Recommended by the Greatest
        </h1>
        <div className="recBg">
          <div className="md:flex gap-10 items-center justify-center px-6 py-8 md:px-10 md:py-20">
            <img src={recImage} alt="" />
            <p className="md:text-xl text-white md:pr-40 text-justify">
              "I couldn't believe the transformative impact CloudWave had on our
              business! With their cutting-edge software, we streamlined our
              operations, enhanced productivity, and witnessed remarkable
              growth. The seamless integration and user-friendly interface make
              it a joy to work with. Thank you, CloudWave, for taking our
              business to new heights!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Recommendation;
