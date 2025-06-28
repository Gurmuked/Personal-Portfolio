import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Animate only when 90% of the section is in view
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const percentVisible = visibleHeight / rect.height;
        if (percentVisible <= 0.9) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-neutral-900 min-h-[80vh]"
    >
      {/* Left Content */}
      <div
        className={`flex-1 flex flex-col gap-6 transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
      >
        <div>
          <p className="text-gray-400 text-xl mb-1">Hello! I am</p>
          <h2 className="text-white text-2xl font-semibold">Gurmesa Kedir</h2>
        </div>
        <h1 className="text-5xl font-bold text-orange-500 mb-2">
          Software<span className="text-white"> Developer</span>
        </h1>
        {/* Social Icons */}
        <div className="flex gap-4 mb-4">
            <FaLinkedin className="text-gray-400 hover:text-orange-500 text-xl"/>
            <FaFacebook className="text-gray-400 hover:text-orange-500 text-xl"/>
            <FaInstagram className="text-gray-400 hover:text-orange-500 text-xl"/>
            <FaTiktok className="text-gray-400 hover:text-orange-500 text-xl"/>
        </div>
        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition-colors">
            Hire Me
          </button>
          <button className="border border-gray-400 text-gray-200 px-6 py-2 rounded hover:bg-gray-800 transition-colors">
            Download CV
          </button>
        </div>
        {/* Stats */}
        <div className="flex gap-6 mt-4">
          <div className="bg-neutral-800 rounded p-4 text-center">
            <div className="text-orange-500 text-xl font-bold">5+</div>
            <div className="text-gray-300 text-sm">Experiences</div>
          </div>
          <div className="bg-neutral-800 rounded p-4 text-center">
            <div className="text-orange-500 text-xl font-bold">20+</div>
            <div className="text-gray-300 text-sm">Project done</div>
          </div>
          <div className="bg-neutral-800 rounded p-4 text-center">
            <div className="text-orange-500 text-xl font-bold">80+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
        </div>
      </div>
      {/* Right Image */}
      <div
        className={`flex-1 flex justify-center mt-10 md:mt-0 transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
      >
        <div className="relative w-80 h-80 rounded-full overflow-hidden bg-neutral-800 flex items-center justify-center">
          <img
            src="../../src/assets/gurmu.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
