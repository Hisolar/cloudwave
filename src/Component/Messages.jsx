import hw1 from "../assets/hw1.png";
import hw2 from "../assets/hw2.png";
import hw3 from "../assets/hw3.png";
function Messages() {
  return (
    <section className="bg-[#F5F3EE] text-[#1C4F4A] w-screen h-full">
      <div className="container mx-auto px-5 ">
        <h1 className="text-2xl font-bold text-center">How We Work</h1>
        <div className="md:flex items-center justify-between">
          <div className="flex flex-col gap-2 py-3">
            <h1 className="text-xl md:text-4xl font-bold">Get started</h1>
            <p className="text-smmd:text-2xl w-full md:w-10/12 ">
              Our world is becoming more and more obsessed with comparison and
              validation.
            </p>
          </div>
          <img src={hw1} alt="" />
        </div>
        <div className="md:flex items-center justify-between">
          <div className="flex flex-col gap-2 py-3">
            <h1 className="text-xl md:text-4xl font-bold">Configuration</h1>
            <p className="text-sm md:text-2xlw-full md:w-10/12">
              Configuration management can be used to maintain an understanding
              of the status of system components.
            </p>
          </div>
          <img src={hw2} alt="" />
        </div>
        <div className="md:flex items-center justify-between">
          <div className="flex flex-col gap-2 py-3 ">
            <h1 className="text-xl md:text-4xl font-bold">Solution</h1>
            <p className="text-sm md:text-2xl w-full md:w-10/12 ">
              Solution, in chemistry, a homogenous mixture of two or more
              substances in relative.
            </p>
          </div>
          <img src={hw3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Messages;
