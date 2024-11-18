import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "/sponsor_logos/ankermakelogo.png",
    "/sponsor_logos/polymakerlogo.png",
    "/sponsor_logos/qualcommlogo.png",
    "/sponsor_logos/twclogo.png",
    "/sponsor_logos/scslogo.png"
  ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[currentIndex]}
          className="aspect-w-16 aspect-h-9 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>
      </AnimatePresence>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        ›
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

