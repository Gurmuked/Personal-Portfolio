import React, { useState } from "react";

const categories = [
  "All",
  "Website Development",
  "App Mobile Development",
  "Java Development",
];

const projects = [
  {
    image: "../../src/assets/pr.webp",
    name: "Name Project",
    category: "Categories",
  },
  {
    image: "../../src/assets/pr.webp",
    name: "Name Project",
    category: "Categories",
  },
  {
    image: "../../src/assets/pr.webp",
    name: "Name Project",
    category: "Categories",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [selected, setSelected] = useState("All");

  // Filter logic (if you want to filter by category)
  // const filtered = selected === "All" ? projects : projects.filter(p => p.category === selected);
  // For now, show all as in the screenshot
  const filtered = projects;

  return (
  <section id="portfolio" className="scroll-mt-12 px-8 py-16 bg-[#111827]/10 h-[95vh]">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white font-bold mb-6">Portfolio</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg flex flex-col hover:shadow-2xl transition-shadow"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <div className="text-white font-semibold text-lg">
                {project.name}
              </div>
              <div className="text-gray-400 text-sm">{project.category}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
