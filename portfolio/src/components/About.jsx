import React, { useEffect, useState, useRef } from "react";
// framer-motion removed for this section to avoid unused import. Replace with plain elements.
import { FaDownload } from "react-icons/fa";
import profileImg from "../assets/about.JPG"; // replace with your image path

const SKILLS = [
  { name: "HTML", percent: 97 },
  { name: "Tailwind", percent: 80 },
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 75 },
  { name: "Node.js", percent: 80 },
  { name: "MongoDB", percent: 90 },
];

export default function About() {
  const skills = SKILLS;
  const [fills, setFills] = useState(SKILLS.map(() => 0));
  const [started, setStarted] = useState(false);
  const skillsRef = useRef(null);

  // Observe when the skills grid enters the viewport, then start the animation once
  useEffect(() => {
    if (!skillsRef.current) return;
    const node = skillsRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            obs.disconnect(); // run only once
          }
        });
      },
      { threshold: 0.35 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [skillsRef]);

  // Run the rAF-driven animation when 'started' becomes true
  useEffect(() => {
    if (!started) return;

    const rafs = [];
    const duration = 900; // ms for each fill animation
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    skills.forEach((s, i) => {
      const delay = 120 * i; // keep a small stagger once visible
      const startTime = performance.now() + delay;

      const tick = (now) => {
        const elapsed = now - startTime;
        if (elapsed < 0) {
          rafs[i] = requestAnimationFrame(tick);
          return;
        }

        const progress = Math.min(1, elapsed / duration);
        const eased = easeOutCubic(progress);
        const value = eased * s.percent;

        setFills((prev) => {
          const next = [...prev];
          next[i] = value;
          return next;
        });

        if (progress < 1) {
          rafs[i] = requestAnimationFrame(tick);
        }
      };

      rafs[i] = requestAnimationFrame(tick);
    });

    return () => {
      rafs.forEach((id) => {
        if (id) cancelAnimationFrame(id);
      });
    };
  }, [started, skills]);

  return (
    <section
      id="about"
      className="scroll-mt-14 relative flex flex-col items-center justify-center bg-[#111827]/10 text-[#F3F4F6] overflow-hidden px-6 py-4 md:px-16"
      /* scroll-mt-16 ensures this section is scrolled into view below the fixed navbar */
    >

      

      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-wide">
        About <span className="text-orange-500">Me</span>
      </h2>

      <div className="w-full flex justify-center mb-6">
        <div className="relative w-full max-w-2xl">
          <p className="text-gray-400 text-center mb-4 text-base md:text-lg">
            Develop from scratch to make real-world things and solve real-world problems.
          </p>

          {/* static underline with moving glowing bar */}
          <div className="relative h-1 mt-2 rounded overflow-hidden bg-neutral-700">
            <span
              aria-hidden
              className="absolute top-0 left-0 h-full w-2/3 blur-lg"
              style={{
                background:
                  'linear-gradient(90deg, rgba(239,68,68,0.18) 0%, rgba(239,68,68,0.98) 12%, rgba(251,191,36,0.98) 50%, rgba(16,185,129,0.98) 88%, rgba(16,185,129,0.18) 100%)',
                animation: 'glow-slide 2.6s linear infinite',
                mixBlendMode: 'normal',
                filter: 'drop-shadow(0 0 10px rgba(251,191,36,0.18))',
                willChange: 'transform',
              }}
            />
          </div>

          <style>{`
            @keyframes glow-slide {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(200%); }
            }
          `}</style>
        </div>
      </div>

      {/* (animation removed) */}

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 z-10 w-full max-w-5xl">
        {/* Profile Image (rectangle) */}
        <div className="relative w-[300px] max-w-md overflow-hidden rounded-2xl shadow-2xl flex-shrink-0 self-center mx-auto md:mx-0">
          {/* Subtle outer glow */}
          <div className="absolute -inset-3 rounded-2xl" aria-hidden>
            <div className="w-full h-full rounded-2xl bg-yellow-400/12 blur-2xl" />
          </div>

          {/* Decorative overlay */}
          <div
            aria-hidden
            className="absolute -inset-1 rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
              mixBlendMode: "screen",
            }}
          />

          {/* Image: rectangular */}
          <div className="relative w-[300px] h-[380px] overflow-hidden bg-neutral-800 rounded-2xl">
            <img
              src={profileImg}
              alt="Profile"
              className="w-[300px] h-full object-cover items-center"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex-1 flex flex-col space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
          <div>
            <p>
              I'm a passionate web and mobile app developer with a keen eye for creating scalable,
              user-friendly applications. With years of experience in building real-world projects,
              I specialize in transforming ideas into elegant digital solutions.
            </p>

            <p className="mt-4">
              My expertise spans across frontend and backend development, mobile app creation, and
              UI/UX design. I thrive on solving complex problems and delivering high-quality code
              that makes a difference.
            </p>
          </div>

          <div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-md"
            >
              <FaDownload />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
