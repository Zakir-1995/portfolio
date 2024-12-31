import { Fade } from "react-awesome-reveal";
import { useTypewriter } from "react-simple-typewriter";
import {
  FaLinkedin,
  FaSquareBehance,
  FaSquareDribbble,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
};

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Developer ", "Freelancer"],
    loop: 0,
  });

  
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="w-full h-[72vh] flex flex-col items-center justify-center overflow-hidden relative "
      >
        <motion.div
          className="w-20 h-20 bg-gradient-to-b from-iron/20 to-alabastar shadow  rounded-full absolute z-10 left-56 top-10"
          animate={{
            y: [0, -50, 0], // Moves up (-50px) and back to original position (0px)
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5, // Total duration for one up-and-down cycle
            repeat: Infinity, // Infinite animation loop
            ease: "easeInOut", // Smooth transition
          }}
        />
        <motion.div
          className="w-8 h-8 bg-gradient-to-b from-iron/20 to-alabastar shadow  rounded-full absolute z-10 right-60 top-20"
          animate={{
            y: [0, -50, 0], // Moves up (-50px) and back to original position (0px)
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7, // Total duration for one up-and-down cycle
            repeat: Infinity, // Infinite animation loop
            ease: "easeInOut", // Smooth transition
          }}
        />
        <motion.div
          className="w-5 h-5 bg-gradient-to-b from-iron/20 to-alabastar shadow  rounded-full absolute z-10 left-60 top-40"
          animate={{
            y: [0, 50, 0], // Moves up (-50px) and back to original position (0px)
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7, // Total duration for one up-and-down cycle
            repeat: Infinity, // Infinite animation loop
            ease: "easeInOut", // Smooth transition
          }}
        />
        <motion.div
          className="w-12 h-12 bg-gradient-to-b from-iron/20 to-alabastar shadow  rounded-full absolute z-10  top-2"
          animate={{
            y: [0, 50, 0], // Moves up (-50px) and back to original position (0px)
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7, // Total duration for one up-and-down cycle
            repeat: Infinity, // Infinite animation loop
            ease: "easeInOut", // Smooth transition
          }}
        />
        <motion.div
          className="w-10 h-10   bg-gradient-to-b from-iron/20 to-alabastar shadow rounded-full absolute z-10  bottom-14"
          animate={{
            y: [0, 50, 0], // Moves up (-50px) and back to original position (0px)
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7, // Total duration for one up-and-down cycle
            repeat: Infinity, // Infinite animation loop
            ease: "easeInOut", // Smooth transition
          }}
        />
        <motion.div
          className="w-28 h-28 bg-gradient-to-b from-iron/20 to-alabastar shadow  rounded-full absolute z-10 left-40 bottom-20"
          animate={{
            y: [0, 50, 0], // Moves up (-50px) and back to original position (0px)
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8, // Total duration for one up-and-down cycle
            repeat: Infinity, // Infinite animation loop
            ease: "easeInOut", // Smooth transition
          }}
        />
        <motion.div
          className="w-36 h-36 bg-gradient-to-b from-iron/20 to-alabastar shadow  rounded-full absolute z-10 right-40 bottom-10"
          animate={{
            y: [0, -50, 0], // Moves up (-50px) and back to original position (0px)
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9, // Total duration for one up-and-down cycle
            repeat: Infinity, // Infinite animation loop
            ease: "easeInOut", // Smooth transition
          }}
        />
        <div className=" flex flex-col items-center gap-5 relative z-20">
          <div className="relative">
            <div className=" bg-alabastar shadow border border-iron/60 absolute sm:w-24 w-20 sm:h-24 h-20 rounded-full top-[50%] -translate-y-[50%] -left-12 -z-10" />
            <div className=" bg-alabastar shadow absolute border border-iron/60  sm:w-12 w-9 sm:h-12 h-9 rounded-full top-[50%] -translate-y-[50%] -left-16 -z-20" />
            <div className="bg-alabastar shadow border border-iron/60  absolute sm:w-24 w-20 sm:h-24 h-20 rounded-full top-[50%] -translate-y-[50%] -right-12 -z-10" />
            <div className=" bg-alabastar shadow absolute sm:w-12 w-9 border border-iron/60  sm:h-12 h-9 rounded-full top-[50%] -translate-y-[50%] -right-16 -z-20" />
            <img
              src="/profile_img.jpg"
              alt="/"
              className="sm:w-40 w-32 rounded-full bg-alabastar shadow p-2 border border-iron/60 "
            />
          </div>
          <Fade cascade>
            <div className="flex-col flex gap-3 items-center">
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-masala uppercase">
                Md Zakir Hossain{" "}
              </h1>
              <span className="text-sm lg:text-xl md:text-lg sm:text-base font-DM font-bold text-masala">
                I{"'"}m a {text}
                <span className="font-light text-masala/90"> |</span>
              </span>
            </div>
          </Fade>
        </div>
        <div className="absolute flex  sm:flex-col flex-row items-end bottom-3  sm:justify-end justify-center w-full h-full gap-3 z-10">
          <span className="lg:text-xl md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
            <Link to="https://github.com/Zakir-1995" target="_blank">
              {" "}
              <FaSquareGithub />
            </Link>
          </span>
          <span className="lg:text-xl md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
            <Link to="https://x.com/mdzakir79195269" target="_blank">
              {" "}
              <FaSquareTwitter />
            </Link>
          </span>
          <span className="lg:text-xl md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
            <Link
              to="https://www.linkedin.com/in/md-zakir-hossain-203a88148/"
              target="_blank"
            >
              {" "}
              <FaLinkedin />
            </Link>
          </span>
          <span className="lg:text-xl md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
            <Link
              to="https://www.facebook.com/profile.php?id=100016443198762"
              target="_blank"
            >
              {" "}
              <FaSquareFacebook />
            </Link>
          </span>
          <span className="lg:text-xl md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
            <Link to="https://www.behance.net/Zakir_Hossain" target="_blank">
              {" "}
              <FaSquareBehance />
            </Link>
          </span>
          <span className="lg:text-xl md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
            <Link to="https://dribbble.com/Zakir-hossain_1995" target="_blank">
              <FaSquareDribbble />
            </Link>
          </span>
        </div>
        <div className="absolute left-0 flex sm:flex-col flex-row justify-center sm:justify-start w-full items-end sm:items-start sm:bottom-0  h-full gap-3 sm:top-5 -top-10 z-20">
          <span>
            <img src="/Tailwind CSS.png" alt="/" className="w-6" />
          </span>
          <span>
            <img src="/MongoDB.png" alt="/" className="w-6" />
          </span>
          <span>
            <img src="/Express.png" alt="/" className="w-6" />
          </span>
          <span>
            <img src="/React.png" alt="/" className="w-6" />
          </span>
          <span>
            <img src="/Node.js.png" alt="/" className="w-6" />
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
