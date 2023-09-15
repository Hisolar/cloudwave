import { AiTwotoneMail } from "react-icons/ai";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
function OurTeam() {
  return (
    <section className="bg-[#F5F3EE] font-Inter text-[#1C4F4A] w-screen h-full pt-10">
      <div className="container mx-auto px-5">
        <h1 className="font-bold  text-center text-2xl md:text-4xl py-5">
          Introducing Our Remarkable Team
        </h1>

        <div className="grid md:grid-cols-3 place-items-center gap-12">
          <Team
            img={team1}
            name="Ethan Michael"
            position="UI UX Designer"
            email="ethan.carter@example.com"
          />
          <Team
            img={team2}
            name="Lucas Alexander"
            position="Professional QA Tester"
            email="alexander.patel@example.com"
          />
          <Team
            img={team3}
            name="Mia Isabella"
            position="Senior Marketer"
            email="mia.brown@example.com"
          />
          <Team
            img={team4}
            name="Olivia Grace"
            position="Full Stack Developer"
            email="olivia.williams@example.com"
          />
          <Team
            img={team5}
            name="Noah Thompson"
            position="UI UX Designer"
            email="noah.thompson@example.com"
          />
          <Team
            img={team6}
            name="Emma Lee"
            position="Professional QA Tester"
            email="emma.lee@example.com"
          />
        </div>
      </div>
    </section>
  );
}
export default OurTeam;

function Team(Props) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <img src={Props.img} alt="" />
      <h1 className="text-2xl font-bold">{Props.name}</h1>
      <p>{Props.position}</p>
      <div className="flex items-center gap-2">
        <AiTwotoneMail />
        <h1>{Props.email}</h1>
      </div>
    </div>
  );
}
