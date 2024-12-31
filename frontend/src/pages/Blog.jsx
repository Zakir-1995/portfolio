import { useEffect, useState } from "react";
import BlogInfo from "../components/BlogInfo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Blog = () => {
  const [openinfo, setOpenInfo] = useState(false);
  const [cardId, setCardId] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const getAllBlog = async () => {
      setLoading(true)
      const res = await fetch(
        "https://portfolio-backend-tgzk.onrender.com/api/blog/blogs"
      );
      const data = await res.json();
      if (data.success) {
         setLoading(false)
        setBlogs(data.data);
      }
    };
    getAllBlog();
  }, []);

  const cardInfo = blogs?.find((item) => item._id === cardId);

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
  };

  return (
    <>
      <div
        className={` inset-0 bg-iron  z-40 flex justify-center items-center flex-col   ${
          openinfo ? "fixed " : " hidden"
        }`}
      >
        <BlogInfo
          cardInfo={cardInfo}
          onClose={() => setOpenInfo(false)}
          openinfo={openinfo}
        />
      </div>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="container mx-auto lg:px-6 md:px-4 px-2 py-5 relative border border-iron mt-5"
      >
        <div className="max-h-[60vh] overflow-y-scroll no-scrollbar  ">
          <h5 className="absolute z-30 -top-3 md:-top-4 left-[50%] -translate-x-[50%] bg-masala px-5 py-1 text-alabastar uppercase md:text-sm text-xs rounded-full">
            Latest Blog
          </h5>
          <div className="flex items-center justify-between gap-5">
            <ul className="flex gap-1 mt-3 bg-iron/50 px-5 py-1 rounded-full w-fit">
              <li className="text-xs font-semibold text-masala/60 hover:text-masala/100 transition-all duration-150 ease-linear">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xs text-masala">/</li>
              <li className="text-xs text-masala font-semibold">Blog</li>
            </ul>
        
          </div>
          {loading ? (
        <div className="flex justify-center items-center w-full h-full">
        <p>Loading...</p>
        </div>
          ) : (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div
                  className="w-full h-56 overflow-hidden cursor-pointer"
                  onClick={() => {
                    setOpenInfo(true);
                    setCardId(blog._id);
                  }}
                >
                  <img
                    src={blog.image?.url}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 hover:rotate-2 transition-all duration-500 ease-linear"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="text-xl font-semibold text-masala cursor-pointer hover:text-spicymix line-clamp-2"
                    onClick={() => {
                      setOpenInfo(true);
                      setCardId(blog._id);
                    }}
                  >
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 text-masala/80">
                    {blog.date.split("T")[0]}
                  </p>
                  <div className="text-gray-700 mb-4 text-masala line-clamp-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog?.description,
                      }}
                    />
                  </div>
                  <button
                    onClick={() => {
                      setOpenInfo(true);
                      setCardId(blog._id);
                    }}
                    className="text-spicymix hover:underline text-sm font-medium"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
