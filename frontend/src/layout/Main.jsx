import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
const Main = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center mx-5 overflow-hidden relative">
      <motion.div
        className="w-32 h-32 bg-spicymix/50 rounded-full absolute top-12 right-12 -z-10"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360, 720],
          borderRadius: ["50%", "20%", "50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="w-20 h-20 bg-masala/50 rounded-full absolute bottom-5 left-10 -z-10"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -360, -720],
          borderRadius: ["50%", "20%", "50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className=" max-w-6xl w-full my-10 bg-alabastar shadow min-h-[87vh] p-5 rounded-md ">
        <Navbar />
        <div className="">
          <AnimatePresence mode="wait">
            <Outlet location={location} key={location.pathname} />
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
