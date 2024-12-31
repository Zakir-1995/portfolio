import { Link } from "react-router-dom";
import SkillBar from "../components/SkillBar";
import TestimonialCarousel from "../components/TestmonialCarousel";
import { motion } from "framer-motion";
const skills = [
  { skill: "React", percentage: 90 },
  { skill: "JavaScript", percentage: 85 },
  { skill: "TailwindCSS", percentage: 95 },
  { skill: "Express", percentage: 75 },
  { skill: "NodeJS", percentage: 73 },
  { skill: "MongoDB", percentage: 87 },
];

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-[70vh] border border-iron px-5 relative mt-5 "
    >
      <div className="overflow-y-scroll h-full py-3 no-scrollbar">
        <h5 className="absolute z-30 -top-3 md:-top-4 left-[50%] -translate-x-[50%] bg-masala px-5 py-1 text-alabastar uppercase md:text-sm text-xs rounded-full">
          About Me
        </h5>

        <ul className="flex gap-1 mt-3 bg-iron/50 px-5 py-1 rounded-full w-fit">
          <li className="text-xs font-semibold text-masala/60 hover:text-masala/100 transition-all duration-150 ease-linear">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xs text-masala">/</li>
          <li className="text-xs text-masala font-semibold">About</li>
        </ul>

        <p className="mt-5 md:text-sm text-xs text-masala">
          My name is Md Zakir Hossain and I am a Web Developer, and I{"'"}m very
          passionate and dedicated to my work. With 6 years experience as a
          professional Web Designer and Web Developer, I have acquired the
          skills and knowledge necessary to make your project a success. I enjoy
          every step of the design process, from discussion and collaboration.
          Thanks a lot for your attention and your trust!
        </p>
        <div className="mt-10 relative border border-iron p-5">
          <div className="flex items-center gap-2 mb-5 absolute -top-4 bg-alabastar px-2 py-1 ">
            {" "}
            <h4 className="lg:text-lg md:text-base  text-sm font-semibold text-masala uppercase whitespace-nowrap">
              {" "}
              Personal Details
            </h4>
          </div>
          <div className="lg:max-w-[80%] w-full flex lg:flex-row flex-col py-5 justify-between lg:gap-10 gap-2">
            <ul className="flex flex-col gap-2">
              <li className="md:text-sm text-xs w-fit font-semibold text-masala">
                <span className="font-normal">Name:</span>{" "}
                <span>Md Zakir Hossain</span>
              </li>
              <li className="md:text-sm  text-xs w-fit font-semibold text-masala">
                <span className="font-normal">Email:</span>{" "}
                <span>rodela892013@gmail.com</span>
              </li>
              <li className="md:text-sm  text-xs w-fit font-semibold text-masala">
                <span className="font-normal">Phone:</span>{" "}
                <span>+880 1719017325</span>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-2">
              <li className="md:text-sm  text-xs w-fit font-semibold text-masala">
                <span className="font-normal">Address:</span>{" "}
                <span>Jabra,Tora,Ghior,Manikgonj,Dhaka, Bangladesh</span>
              </li>
              <li className="md:text-sm  text-xs w-fit font-semibold text-masala">
                <span className="font-normal">Age:</span> <span>38</span>
              </li>
              <li className="md:text-sm  text-xs w-fit font-semibold text-masala">
                <span className="font-normal">Job:</span>{" "}
                <span>Web Developer</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 relative border border-iron md:p-5 p-1">
          <div className="flex items-center gap-2 mb-5 absolute -top-4 bg-alabastar px-3 py-1">
            {" "}
            <h4 className="lg:text-lg md:text-base  text-sm font-semibold text-masala uppercase whitespace-nowrap">
              {" "}
              Knowledge
            </h4>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:p-5 p-2">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 relative border border-iron md:p-5 p-1">
          <div className="flex items-center gap-2 mb-5 absolute -top-4 bg-alabastar px-3 py-1">
            {" "}
            <h4 className="lg:text-lg md:text-base  text-sm font-semibold text-masala uppercase whitespace-nowrap">
              {" "}
              Testimonial
            </h4>
          </div>
          <div className=" bg-gray-100 flex items-center justify-center">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
