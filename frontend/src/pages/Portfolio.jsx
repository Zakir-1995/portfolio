import { useState } from "react";
import PortfolioInfo from "../components/PortfolioInfo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
};
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openinfo, setOpenInfo] = useState(false);
  const [cardId, setCardId] = useState("");

  const portfolioItems = [
    {
      id: 1,
      category: "Web Design",
      title: "Landing Page",
      imgUrl: "/portfolio/webdesign.jpg",
      webUrl: "https://neopremia.onrender.com/",
    },

    {
      id: 2,
      category: "Graphic Design",
      title: "Logo Design",
      imgUrl: "/langley logo.png",
      webUrl: "https://www.behance.net/Zakir_Hossain",
    },
    {
      id: 3,
      category: "Web Development",
      title: "Real Estate Website",
      imgUrl: "/portfolio/webdevelopment.jpg",
      webUrl: "https://estate-mart-front.onrender.com/",
    },
    {
      id: 4,
      category: "Graphic Design",
      title: "Brand Kit",
      imgUrl: "/portfolio/graphic.jpg",
      webUrl: "https://www.behance.net/Zakir_Hossain",
    },
    {
      id: 5,
      category: "Web Design",
      title: "Landing Page",
      imgUrl: "/portfolio/webd.jpg",
      webUrl: "https://stangrentals.netlify.app/",
    },
    {
      id: 6,
      category: "Web Development",
      title: "E-Commerce Website",
      imgUrl: "/portfolio/ecommerce.jpg",
      webUrl: "https://grapnel.onrender.com/",
    },
  ];

  const cardInfo = portfolioItems.find((item)=>item.id ===cardId)

  const categories = [
    "All",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <div
        className={` inset-0 bg-iron  z-40 flex justify-center items-center flex-col   ${
          openinfo ? "fixed " : " hidden"
        }`}
      >
        <PortfolioInfo
          cardInfo={cardInfo}
          onClose={() => setOpenInfo(false)}
          openinfo={openinfo}
        />
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className={`container mx-auto lg:p-6 md:p-4 p-2  border border-iron relative mt-5 ${
          openinfo ? "hidden" : "block"
        }`}
      >
        <div className="overflow-y-scroll py-3 h-full max-h-[62vh] no-scrollbar">
          <ul className="flex gap-1 mt-3 bg-iron/50 px-5 py-1 rounded-full w-fit">
            <li className="text-xs font-semibold text-masala/60 hover:text-masala/100 transition-all duration-150 ease-linear">
              <Link to="/">Home</Link>
            </li>
            <li className="text-xs text-masala">/</li>
            <li className="text-xs text-masala font-semibold">Portfolio</li>
          </ul>
          <h5 className="absolute z-30 -top-3 md:-top-4 left-[50%] -translate-x-[50%] bg-masala px-5 py-1 text-alabastar uppercase md:text-sm text-xs rounded-full">
            Portfolio
          </h5>

          {/* Filter Buttons */}
          <div className="flex flex-wrap  gap-5 my-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap md:text-sm text-xs uppercase hover:text-spicymix transition-all duration-200 ease-linear ${
                  activeFilter === category
                    ? "  text-masala font-bold"
                    : "  text-masala/60 font-medium"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="w-full relative group cursor-pointer "
                onClick={() => {
                  setOpenInfo(true);
                  setCardId(item.id);
                }}
              >
                <img
                  src={item.imgUrl}
                  alt="/"
                  className="w-full object-cover min-h-[260px] rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col group-hover:bg-spicymix group-hover:text-white text-transparent   md:p-6 p-4 border border-masala/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 ease-linear">
                  <h2 className="text-xl font-bold ">{item.title}</h2>
                  <p className=" mt-2">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
