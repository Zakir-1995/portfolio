import { useState } from "react";
import { toast } from "react-toastify";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSquareBehance,
  FaSquareDribbble,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareTwitter,
} from "react-icons/fa6";
import Map from "../components/Map";
const Contact = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:8080/api/contact/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
    
      const fetchData = await response.json();

      if (fetchData.success) {
          setLoading(false);
        navigate("/");
        toast.success(fetchData.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(fetchData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center border border-iron relative mt-5 w-full">
      <div className="max-h-[70vh] overflow-y-scroll no-scrollbar w-full ">
        <h5 className="absolute z-30 -top-3 md:-top-4 left-[50%] -translate-x-[50%] bg-masala px-5 py-1 text-alabastar uppercase md:text-sm text-xs rounded-full">
          Contact Us
        </h5>
        <div className="h-[70vh] mt-10 md:px-10 px-2">
          <div className="border border-iron p-2 w-full h-full shadow relative z-10">
            {" "}
            <Map />
          </div>
        </div>
        <div className="w-full p-6 md:grid grid-cols-12 md:gap-10 space-y-10 md:space-y-0">
          <form
            onSubmit={handleSubmit}
            className="mt-4 w-full  mx-auto md:col-span-7 "
          >
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-masala">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 text-masala  border border-iron rounded-md focus:border-spicymix focus:outline-none"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-masala">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 text-masala  border border-iron rounded-md focus:border-spicymix focus:outline-none"
                required
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-masala">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 mt-2 text-masala  border border-iron rounded-md focus:border-spicymix focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="max-w-[300px] px-4 py-2 font-semibold text-sm uppercase text-white bg-masala rounded-md hover:bg-spicymix"
            >
              {loading ? "Sending..." : "  Send Message"}
            </button>
          </form>
          <div className="md:col-span-5 ">
            <h6 className="text-masala font-semibold  lg:text-lg md:text-base text-sm uppercase">
              Address
            </h6>
            <div className="my-2 flex flex-col gap-10">
              <p className="text-masala/90 ">
                Jabra, Tora, Ghior, Manikgonj, Dhaka, Bangladesh
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-5">
                  <span className="text-spicymix text-base ">
                    <FaPhone />
                  </span>
                  <span className="text-sm font-medium text-masala">
                    +880 1719017325
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-spicymix text-xl ">
                    <FiMail />
                  </span>
                  <span className="text-sm font-medium text-masala">
                    rodela892013@gmail.com
                  </span>
                </div>
              </div>
              <div className="">
                <p className="text-masala text-lg font-semibold"> Follow Me</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
                    <Link to="https://github.com/Zakir-1995" target="_blank">
                      {" "}
                      <FaSquareGithub />
                    </Link>
                  </span>
                  <span className="md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
                    <Link to="https://x.com/mdzakir79195269" target="_blank">
                      {" "}
                      <FaSquareTwitter />
                    </Link>
                  </span>
                  <span className="md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
                    <Link
                      to="https://www.linkedin.com/in/md-zakir-hossain-203a88148/"
                      target="_blank"
                    >
                      {" "}
                      <FaLinkedin />
                    </Link>
                  </span>
                  <span className="md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
                    <Link
                      to="https://www.facebook.com/profile.php?id=100016443198762"
                      target="_blank"
                    >
                      {" "}
                      <FaSquareFacebook />
                    </Link>
                  </span>
                  <span className="md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
                    <Link
                      to="https://www.behance.net/Zakir_Hossain"
                      target="_blank"
                    >
                      {" "}
                      <FaSquareBehance />
                    </Link>
                  </span>
                  <span className="md:text-lg sm:text-base text-sm text-masala hover:text-spicymix transition-all duration-150 ease-linear">
                    <Link
                      to="https://dribbble.com/Zakir-hossain_1995"
                      target="_blank"
                    >
                      <FaSquareDribbble />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
