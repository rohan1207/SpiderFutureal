import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Eye, Target, Award } from "lucide-react";

export default function WhoAreWe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "image1.jpg",
    "image7.jpg",
    "image3.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "realestate.jpg",
    "shop.webp",
    "img6.webp",
  ];

  const cards = [
    {
      icon: <Briefcase className="text-white" size={20} />,
      title: "About Us",
      description:
        "We deliver turnkey solutions for diverse sectors with global insight and local knowledge.",
    },
    {
      icon: <Eye className="text-white" size={20} />,
      title: "Vision",
      description:
        "To revolutionize turnkey project delivery—blending innovation, precision, and empathy.",
    },
    {
      icon: <Target className="text-white" size={20} />,
      title: "Mission",
      description:
        "To deliver seamless solutions that create value and set new benchmarks in quality.",
    },
    {
      icon: <Award className="text-white" size={20} />,
      title: "Values",
      description:
        "Excellence, integrity, innovation, and client-centricity guide our approach.",
    },
  ];

  // Combined slide interval - syncs both images and cards
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the maximum number of unique slides needed
      const totalItems = Math.max(images.length, cards.length);
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get the current card and image based on active index
  const currentCard = activeIndex % cards.length;
  const currentImage = activeIndex % images.length;

  return (
    <section className="relative py-12 px-4 md:px-16 overflow-hidden h-screen flex items-center">
      {/* Background image carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence>
          {images.map((image, index) => (
            currentImage === index && (
              <motion.div
                key={image}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    filter: "brightness(0.6)", // Lighter overlay
                  }}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-indigo-900/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who Are We?
          </h2>
          <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-8">
            We specialise in turnkey solutions for healthcare, industrial, hospitality, 
            office spaces and educational sectors with global experience and local expertise.
          </p>
        </motion.div>

        {/* Desktop layout (2x2 grid) */}
        <div className="mt-8 hidden md:grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:bg-white hover:scale-105 transition-all duration-300"
            >
              <div className="w-10 h-10 mb-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-600 text-xs">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile swiper layout */}
        <div className="mt-6 md:hidden relative">
          <div className="overflow-hidden px-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentCard * 100}%)` }}
            >
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="min-w-full px-2"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
                    <div className="w-10 h-10 mb-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                    <p className="text-gray-600 text-xs">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Single set of navigation dots for both mobile and desktop */}
        <div className="flex justify-center mt-6 gap-1">
          {/* Show dots based on the max number of either images or cards */}
          {Array.from({ length: Math.max(images.length, cards.length) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex % Math.max(images.length, cards.length) === index ? "bg-white scale-125" : "bg-white/40"
              }`}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}