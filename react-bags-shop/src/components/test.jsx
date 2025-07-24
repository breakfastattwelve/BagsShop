import { useState } from 'react';
import arrowRight from "../assets/rightArrow.png";
import arrowLeft from "../assets/leftArrow.png";
import slides from '../data/slides';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-[1320px] relative p-10">
        
        {/* Main Image */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
          <img 
            src={slides[currentSlide].image} 
            alt="slide image" 
            className="w-full h-full object-cover transition-all duration-500"
          />
          
          {/* Text Overlay*/}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight whitespace-pre-line">
                {slides[currentSlide].title}
              </h1>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-10">
            <button 
              onClick={prevSlide}
              className="bg-black backdrop-blur-sm text-white p-3 rounded hover:scale-80 transition-transform duration-300"
            >
              <img src={arrowLeft} alt="Previous" />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-black backdrop-blur-sm text-white p-3 rounded hover:scale-80 transition-transform duration-300"
            >
              <img src={arrowRight} alt="Next" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-6 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
