import slide1 from "../assets/slide1.png";
import arrowRight from "../assets/rightArrow.png";
import arrowLeft from "../assets/leftArrow.png";


function Hero() {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-[1320px] relative p-10">
        
        {/* Main Image */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
          <img 
            src={slide1} 
            alt="bagHeader" 
            className="w-full h-full object-cover"
          />
          
          {/* Text Overlay*/}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                This<br />
                season's<br />
                latest
              </h1>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-10">
            <button className="bg-black backdrop-blur-sm text-white p-3 rounded hover:scale-80 transition-transform duration-300">
              <img src={arrowLeft} alt="Previous" className="" />
            </button>
            <button className="bg-black backdrop-blur-sm text-white p-3 rounded hover:scale-80 transition-transform duration-300">
              <img src={arrowRight} alt="Next" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
