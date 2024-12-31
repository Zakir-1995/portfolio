import { Link } from "react-router-dom";
import { BiCode } from "react-icons/bi";
import { FaCodeCommit } from "react-icons/fa6";
import { RxDiscordLogo } from "react-icons/rx";
import { FaSketch } from "react-icons/fa";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
};
const Services = () => {
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
          Services
        </h5>

        <ul className="flex gap-1 mt-3 bg-iron/50 px-5 py-1 rounded-full w-fit">
          <li className="text-xs font-semibold text-masala/60 hover:text-masala/100 transition-all duration-150 ease-linear">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xs text-masala">/</li>
          <li className="text-xs text-masala font-semibold">Services</li>
        </ul>
        <div className="grid sm:grid-cols-2  grid-cols-1 gap-5 my-5 sm:px-5 px-2 ">
          <div className="border border-iron rounded-md  min-h-[200px] p-5 flex flex-col gap-3 justify-center  cursor-pointer hover:shadow hover:bg-alabastar transition-all duration-150 ease-linear">
            <span className="text-3xl bg-masala rounded-md p-2 w-fit text-alabastar ">
              <FaCodeCommit />
            </span>
            <h4 className="text-base font-semibold text-masala">Web Design</h4>
            <ul className="ml-3 flex flex-col gap-1">
              <li className="list-disc text-masala/60 text-sm font-semibold">
                React
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                TailwindCSS
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                HTML
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                CSS
              </li>
            </ul>
          </div>
          <div className="border border-iron rounded-md  min-h-[200px] p-5 flex flex-col gap-3 justify-center  cursor-pointer hover:shadow hover:bg-alabastar transition-all duration-150 ease-linear">
            <span className="text-3xl bg-masala rounded-md p-2 w-fit text-alabastar">
              <BiCode />
            </span>
            <h4 className="text-base font-semibold text-masala">
              Web Development
            </h4>
            <ul className="ml-3 flex flex-col gap-1">
              <li className="list-disc text-masala/60 text-sm font-semibold">
                MongoDB
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                Express
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                React
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                NodeJS
              </li>
            </ul>
          </div>
          <div className="border border-iron rounded-md  min-h-[200px] p-5 flex flex-col gap-3 justify-center  cursor-pointer hover:shadow hover:bg-alabastar transition-all duration-150 ease-linear">
            <span className="text-3xl bg-masala rounded-md p-2 w-fit text-alabastar">
              <RxDiscordLogo />
            </span>
            <h4 className="text-base font-semibold text-masala">Logo Design</h4>
            <ul className="ml-3 flex flex-col gap-1">
              <li className="list-disc text-masala/60 text-sm font-semibold">
                Wordmark Logos
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                lettermark Logos
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                Pictorial marks Logos
              </li>
            </ul>
          </div>
          <div className="border border-iron rounded-md  min-h-[200px] p-5 flex flex-col gap-3 justify-center  cursor-pointer hover:shadow hover:bg-alabastar transition-all duration-150 ease-linear">
            <span className="text-3xl bg-masala rounded-md p-2 w-fit text-alabastar">
              <FaSketch />
            </span>
            <h4 className="text-base font-semibold text-masala">
              UI/UX Design
            </h4>
            <ul className="ml-3 flex flex-col gap-1">
              <li className="list-disc text-masala/60 text-sm font-semibold">
                Figma
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                PSD Design
              </li>
              <li className="list-disc text-masala/60 text-sm font-semibold">
                Sketch Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
