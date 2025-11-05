// ...existing code...
import React, { useRef, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/gurmu.jpg";

const Hero = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-between px-16 py-16 bg-neutral-900 h-[90vh]"
    >
      {/* Left Content */}
      <div
        ref={leftRef}
        className={`flex-1 flex flex-col gap-4 md:pl-12 py-8 transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <div className="py-4">
          <p className="text-gray-400 text-[14px] md:text-[18px] mb-2">Hello! I am</p>
          <h2 className="text-white text-3xl font-semibold">Gurmesa Kedir</h2>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
          Software <span className="text-white">Developer</span>
        </h1>

        <div className="flex gap-4 mt-4">
          <a aria-label="linkedin" href="#" className="text-gray-400 hover:text-orange-500">
            <FaLinkedin size={18} />
          </a>
          <a aria-label="facebook" href="#" className="text-gray-400 hover:text-orange-500">
            <FaFacebook size={18} />
          </a>
          <a aria-label="instagram" href="#" className="text-gray-400 hover:text-orange-500">
            <FaInstagram size={18} />
          </a>
          <a aria-label="tiktok" href="#" className="text-gray-400 hover:text-orange-500">
            <FaTiktok size={18} />
          </a>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-2 rounded">
            Hire Me
          </button>
          <button className="border border-gray-600 text-gray-200 px-12 py-2 rounded hover:bg-gray-800">
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Image with non-solid yellow ring + glow */}
<div
  ref={rightRef}
  className={`flex-1 flex items-center justify-center mt-8 py-6 md:mt-0 transition-all duration-700 ease-out transform ${
    visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
  }`}
>
  <div className="relative w-80 h-80 flex items-center justify-center rounded-full">
    
    {/* Outer green glow */}
    <div
      aria-hidden
      className="absolute -inset-12 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(0, 128, 0, 0.95) 0%, rgba(0, 128, 0, 0.2) 60%, transparent 90%)",
        filter: "blur(40px)",
        zIndex: 0,
      }}
    />

    {/* Middle yellow glow */}
    <div
      aria-hidden
      className="absolute -inset-10 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(255, 205, 0, 0.95) 0%, rgba(255, 205, 0, 0.2) 60%, transparent 90%)",
        filter: "blur(32px)",
        zIndex: 1,
      }}
    />

    {/* Inner red glow */}
    <div
      aria-hidden
      className="absolute -inset-8 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(206, 17, 38, 0.95) 0%, rgba(206, 17, 38, 0.2) 60%, transparent 90%)",
        filter: "blur(24px)",
        zIndex: 2,
      }}
    />

    {/* Subtle white ring */}
    <div
      className="absolute -inset-1 rounded-full pointer-events-none"
      style={{
        border: "3px solid rgba(255,255,255,0.3)",
        boxShadow: "0 0 18px rgba(255,255,255,0.08)",
        mixBlendMode: "screen",
        zIndex: 10,
      }}
    />

    {/* Profile image */}
    <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-800 z-20">
      <img
        src={profileImg}
        alt="Profile"
        className="w-full h-full object-cover object-center"
      />
    </div>
  </div>
</div>


    </section>
  );
};

export default Hero;