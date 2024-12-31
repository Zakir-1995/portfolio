import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const testimonials = [
  {
    id: 1,
    name: "Stuart F.",
    position: "CEO at HighSpeed",
    message:
      "Great to work with. Absolutely love it! Highly recommend to anyone looking for quality and support.",
    image: "/stuartF.webp", // Replace with actual images
  },
  {
    id: 2,
    name: "Mike C",
    position: "Ceo at Gospel",
    message:
      "This was a beautifully designed flyer, far better than any other entry. He took the time to go to our website, notice our coloring and theme, and incorporate that, and our logo into the flyer. Truly a marvelous work. I highly recommend him!",
    image: "/mike.webp",
  },
  {
    id: 3,
    name: "Anthony D.",
    position: "Owner of Bongo",
    message:
      "Great designer and amazing communication skills, always on top of it and changed any minor edits without hesitation. Highly recommend anyone looking for a graphic designer! Most definitely will be working with Md Zakir H. for future projects of mine.. thank you again!",
    image: "/Anthony.webp",
  },
  {
    id: 4,
    name: "Yanni Fikaris.",
    position: "CEO",
    message:
      "perfect project completion! great job!!! This service is amazing! It completely transformed the way I approach my business.",
    image: "/yanni.webp",
  },
  {
    id: 5,
    name: "Samuel Joshua V",
    position: "Managing Director",
    message:
      "Md Zakir went above and beyond to meet the contest/project specifications. I would recommend and make use of his services again.",
    image: "/joshu.webp",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

    useEffect(() => {
      const interval = setInterval(nextTestimonial, 8000); // Change slide every 5 seconds
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full md:max-w-4xl mx-auto md:px-4 px-1 py-8">
      <div className="relative w-full overflow-hidden ">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="text-center md:px-6 px-1  "
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="md:text-lg text-base text-masala font-semibold">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-masala">
              {testimonials[currentIndex].position}
            </p>
            <p className="mt-4 md:text-sm text-xs text-masala">
              {testimonials[currentIndex].message}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center md:mt-10 mt-5 space-x-4">
        <button
          onClick={prevTestimonial}
          className="md:text-3xl sm:text-2xl text-xl hover:bg-spicymix hover:text-alabastar transition-all duration-150 ease-linear  rounded-full"
        >
          <CiCircleChevLeft />
        </button>
        <button
          onClick={nextTestimonial}
          className="md:text-3xl sm:text-2xl text-xl hover:bg-spicymix hover:text-alabastar transition-all duration-150 ease-linear  rounded-full"
        >
          <CiCircleChevRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
