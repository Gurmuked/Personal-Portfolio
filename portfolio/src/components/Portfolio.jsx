import React, { useState } from "react";
import imgPlaceholder from "../assets/about.avif";
import { FaExternalLinkAlt } from "react-icons/fa";

const categories = ["All", "Website Development", "App Mobile Development"];

const projects = [
  {
    image: imgPlaceholder,
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Website Development",
  },
  {
    image: imgPlaceholder,
    name: "Fitness Tracker App",
    description: "Cross-platform mobile app for tracking workouts and nutrition goals",
    tags: ["Flutter", "Firebase", "Dart"],
    category: "App Mobile Development",
  },
  {
    image: imgPlaceholder,
    name: "Real Estate Portal",
    description: "Property listing platform with advanced search and filtering capabilities",
    tags: ["React", "Tailwind", "Express"],
    category: "Website Development",
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" ? projects : projects.filter((p) => p.category === selected);

  return (
    <section id="portfolio" className="scroll-mt-12 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-white font-bold mb-6">Portfolio</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded font-medium transition-colors ${
                selected === cat
                  ? "bg-orange-700 text-white"
                  : "bg-[#111827] text-gray-300 hover:bg-orange-700 hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((p, idx) => (
            <article key={idx} className="bg-[#0b1220] rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-44 bg-neutral-900">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-white text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-200">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    Live Demo
                  </a>

                  <button className="w-10 h-10 rounded-full bg-[#071025] border border-gray-800 flex items-center justify-center text-gray-300">
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
