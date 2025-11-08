// ...existing code...
import React, { useRef, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/gurmu.jpg";
import contactImg from "../assets/contact.png";

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
      className="scroll-mt-20 flex flex-col md:flex-row items-center justify-between px-16 py-16 bg-cover bg-center h-[90vh] relative"
      style={{ backgroundImage: `url(${contactImg})` }}
    >
      {/* dark overlay so content reads on top of the image */}
      <div aria-hidden className="absolute inset-0 bg-black/60" />
      {/* Left Content */}
      <div
        ref={leftRef}
        className={`relative z-10 flex-1 flex flex-col gap-4 transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <div className="py-4">
          <p className="text-[#F3F4F6] text-[14px] md:text-[18px] mb-2">Hello! I am</p>
          <h2 className="text-[#F3F4F6] text-3xl font-semibold">Gurmesa Kedir</h2>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
          Software <span className="text-[#F3F4F6]">Developer</span>
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
          <button className="bg-orange-600 hover:bg-orange-700 text-black px-12 py-2 rounded shadow-[0_0_20px_rgba(250,204,21,0.3)]">
            Hire Me
          </button>
          <button className="border border-gray-600 text-[#F3F4F6] px-12 py-2 rounded hover:bg-gray-800">
            Download CV
          </button>
        </div>
      </div>

      {/* Right Image with non-solid yellow ring + glow */}
<div
  ref={rightRef}
  className={`relative z-10 flex-1 flex items-center justify-center mt-8 md:mt-0 transition-all duration-700 ease-out transform ${
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
          "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.95) 0%, rgba(34,197,94,0.12) 60%, transparent 90%)",
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
          "radial-gradient(circle at 50% 50%, rgba(250,204,21,0.95) 0%, rgba(250,204,21,0.12) 60%, transparent 90%)",
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
          "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.95) 0%, rgba(239,68,68,0.12) 60%, transparent 90%)",
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
    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#111827] z-20">
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
