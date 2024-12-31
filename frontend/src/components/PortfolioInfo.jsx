import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PortfolioInfo = ({ cardInfo, onClose, openinfo }) => {
  return (
    <div
      className={`bg-alabastar lg:max-w-[70%] md:max-w-[80%] max-w-[90%] mx-5 w-full overflow-y-scroll no-scrollbar max-h-[95vh] h-full rounded-md shadow p-3 relative transition-all duration-700 ease-linear ${
        openinfo ? "mt-0 opacity-100 visible" : "mt-40 opacity-0 invisible"
      }`}
    >
      <button
        className="border border-masala rounded-full w-5 h-5 text-xs font-semibold text-masala absolute right-4 top-4"
        onClick={() => onClose()}
      >
        X
      </button>
      <div className="w-full lg:min-h-[400px] md:min-h-[350px] sm:min-h-[300px] min-h-[250px] h-full">
        <img
          src={cardInfo?.imgUrl}
          alt="/"
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <div className="px-2 my-3">
        <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-lg  font-semibold text-masala">
          {cardInfo?.title}
        </h3>
        <Link
          to={cardInfo?.webUrl}
          target="_blank"
          className="text-sm mt-2 inline-block  text-masala"
        >
          <span className="text-masala font-bold text-lg">Website Link:</span>{" "}
          <span className="text-lg text-masala hover:underline hover:text-spicymix">{cardInfo?.webUrl}</span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioInfo;
