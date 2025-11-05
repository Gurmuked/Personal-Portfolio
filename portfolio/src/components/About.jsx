import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import profileImg from "../assets/about.avif"; // replace with your image path

export default function About() {
  const skills = [
    { name: "HTML", percent: 97 },
    { name: "Tailwind", percent: 80 },
    { name: "JavaScript", percent: 70 },
    { name: "React", percent: 75 },
    { name: "Node.js", percent: 80 },
    { name: "MongoDB", percent: 90 },
  ];
  const [fills, setFills] = useState(skills.map(() => 0));
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
  }, [started]);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center bg-neutral-900 text-white overflow-hidden px-6 md:px-16"
    >
      {/* Subtle ambient orbs (toned down) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute pt-6 top-4 left-6 w-56 h-56 bg-red-500/12 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-24 right-6 w-56 h-56 bg-green-500/12 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 bg-yellow-500/12 rounded-full blur-[160px]"></div>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-wide"
      >
        About Me
      </motion.h2>

      <div className="w-full flex justify-center mb-6">
        <div className="relative w-full max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-gray-400 text-center mb-4 text-base md:text-lg"
          >
            Develop from scratch to make real-world things and solve real-world problems.
          </motion.p>

          {/* static underline with moving glowing bar */}
          <div className="relative h-1 mt-2 rounded overflow-hidden bg-neutral-700">
            <span
              aria-hidden
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-orange-500/80 to-transparent blur-sm"
              style={{ animation: 'glow-slide 2.6s linear infinite' }}
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
        {/* Profile Image with subtle decorative rings */}
        <motion.div
          initial={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0"
        >
          {/* Subtle outer glow */}
          <div className="absolute -inset-3 rounded-full" aria-hidden>
            <div className="w-full h-full rounded-full bg-yellow-400/18 blur-2xl"></div>
          </div>

          {/* Thin decorative ring (non-solid, gentle) */}
          <div
            aria-hidden
            className="absolute -inset-1 rounded-full pointer-events-none"
            style={{
              background:
                "conic-gradient(from 200deg at 50% 50%, rgba(255,170,0,0.28) 0deg, rgba(255,170,0,0.08) 80deg, transparent 140deg, rgba(255,170,0,0.18) 220deg, rgba(255,170,0,0.06) 300deg)",
              mixBlendMode: "screen",
            }}
          />

          {/* Image: use object-contain and pull image up so top (hair) is visible */}
          <div className="relative w-full h-full rounded-full overflow-hidden flex items-start justify-center p-2 bg-neutral-800">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full rounded-full"
              style={{ objectFit: "contain", objectPosition: "50% 12%" }}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-gray-300 leading-relaxed text-base md:text-lg"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem,
            voluptatem unde distinctio ad libero? Rem at cumque quam voluptatem
            excepturi libero harum amet saepe, maxime ullam voluptatem nemo in!
            A software engineer crafts well-considered solutions that bring ideas
            to life across web and mobile platforms.
          </p>

          {/* Skill circles (SVG rings, smaller, animated fill in yellow) */}
          <div ref={skillsRef} className="w-full flex justify-center mt-2">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
              {skills.map((s, i) => {
                const pct = fills[i] ?? 0;
                // SVG circle uses a 100-unit circumference for easy percent math
                const dash = 100;
                const offset = Math.max(0, dash - (dash * pct) / 100);

                return (
                  <div key={s.name} className="flex flex-col items-center py-6 px-4">
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                          d="M18 2.0845
                             a 15.9155 15.9155 0 0 1 0 31.831
                             a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.06)"
                          strokeWidth="2.8"
                        />
                        <path
                          d="M18 2.0845
                             a 15.9155 15.9155 0 0 1 0 31.831
                             a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#FBBF24"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                            strokeDasharray={`${dash} ${dash}`}
                            strokeDashoffset={offset}
                        />
                      </svg>

                      <div className="absolute flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 bg-neutral-800 rounded-full flex items-center justify-center text-sm font-semibold text-white/90">
                          {Math.round(pct)}%
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-300 text-center">{s.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
