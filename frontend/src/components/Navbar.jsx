import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation()

  return (
    <div className="flex justify-between items-center">
      <button
        className="text-xl text-masala hover:bg-masala hover:text-alabastar transition-all duration-150 ease-linear border border-masala rounded-full p-1 z-20 relative"
        onClick={() => setMenuOpen(true)}
      >
        <HiMenuAlt4 />
      </button>
      <Link to="/contact">
        <button className="border border-masala px-5 py-1 rounded-full text-sm uppercase text-masala hover:bg-masala hover:text-alabastar transition-all duration-150 ease-linear z-20 relative">
          Contact Me
        </button>
      </Link>
      <div
        className={`fixed z-50 top-0  h-screen max-w-[200px] w-full bg-spicymix transition-all duration-500 ${
          menuOpen
            ? "left-0 opacity-100 visible pointer-events-auto"
            : "-left-[100%] opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          className="absolute left-[50%] -translate-x-[50%] top-10 text-lg text-alabastar border border-alabastar p-[6px] rounded-md hover:rounded-full transition-all duration-300 ease-out"
          onClick={() => setMenuOpen(false)}
        >
          <TfiClose />
        </button>
        <ul className=" flex flex-col justify-center items-center gap-10 w-full  h-full">
          <li
            className={`text-sm font-medium text-alabastar/80 hover:text-alabastar transition-all duration-150 ease-linear uppercase pb-1  ${
              location.pathname === "/"
                ? "border-b border-alabastar text-alabastar/100"
                : ""
            }`}
           
          >
            <Link to="/"  onClick={() => setMenuOpen(false)}> Home</Link>
          </li>
          <li
            className={`text-sm font-medium text-alabastar/80 hover:text-alabastar transition-all duration-150 ease-linear uppercase pb-1  ${
              location.pathname === "/about"
                ? "border-b border-alabastar text-alabastar/100"
                : ""
            }`}
        
          >
            <Link to="/about"  onClick={() => setMenuOpen(false)}> About</Link>
          </li>
          <li
            className={`text-sm font-medium text-alabastar/80 hover:text-alabastar transition-all duration-150 ease-linear uppercase pb-1  ${
              location.pathname === "/services"
                ? "border-b border-alabastar text-alabastar/100"
                : ""
            }`}
          
          >
            <Link to="/services"  onClick={() => setMenuOpen(false)}> Services</Link>
          </li>
          <li
            className={`text-sm font-medium text-alabastar/80 hover:text-alabastar transition-all duration-150 ease-linear uppercase pb-1  ${
              location.pathname === "/portfolio"
                ? "border-b border-alabastar text-alabastar/100"
                : ""
            }`}
    
          >
            <Link to="/portfolio"  onClick={() => setMenuOpen(false)}> Portfolio</Link>
          </li>
          <li
            className={`text-sm font-medium text-alabastar/80 hover:text-alabastar transition-all duration-150 ease-linear uppercase pb-1  ${
              location.pathname === "/blog"
                ? "border-b border-alabastar text-alabastar/100"
                : ""
            }`}
         
          >
            <Link to="/blog"  onClick={() => setMenuOpen(false)}> Blog</Link>
          </li>
          <li
            className={`text-sm font-medium text-alabastar/80 hover:text-alabastar transition-all duration-150 ease-linear uppercase pb-1  ${
              location.pathname === "/contact"
                ? "border-b border-alabastar text-alabastar/100"
                : ""
            }`}
           
          >
            <Link to="/contact"  onClick={() => setMenuOpen(false)}> Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
