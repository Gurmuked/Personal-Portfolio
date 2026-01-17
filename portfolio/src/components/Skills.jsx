import React from "react";

const SkillBar = ({ label, percent, color = "bg-teal-400" }) => (
  <div className="mb-3">
    <div className="flex items-center justify-between mb-1">
      <span className="text-sm text-gray-300">{label}</span>
      <span className="text-sm text-gray-400">{percent}%</span>
    </div>
    <div className="w-full h-2 rounded bg-gray-800" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
      <div className={`${color} h-2 rounded`} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-gray-200">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Technical <span className="text-orange-500">Skills</span>
        </h2>
        <p className="text-gray-400 mt-2">Expertise across the full development stack</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Frontend */}
        <div className="bg-[#0b1220] p-6 rounded-xl shadow-md border border-gray-800">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8M8 8h8" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Frontend</h3>
          </div>
          <SkillBar label="HTML/CSS" percent={95} color="bg-rose-400" />
          <SkillBar label="JavaScript" percent={90} color="bg-amber-400" />
          <SkillBar label="React" percent={88} color="bg-sky-500" />
          <SkillBar label="Tailwind CSS" percent={92} color="bg-blue-500" />
        </div>

        {/* Backend */}
        <div className="bg-[#0b1220] p-6 rounded-xl shadow-md border border-gray-800">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3m10-6v4a1 1 0 01-1 1h-3M3 17v-4a1 1 0 011-1h3m10 6v-4a1 1 0 00-1-1h-3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Backend</h3>
          </div>
          <SkillBar label="Node.js" percent={85} color="bg-emerald-500" />
          <SkillBar label="PHP" percent={80} color="bg-violet-500" />
          <SkillBar label="MySQL" percent={87} color="bg-fuchsia-500" />
          <SkillBar label="MongoDB" percent={83} color="bg-orange-400" />
        </div>

        {/* Mobile */}
        <div className="bg-[#0b1220] p-6 rounded-xl shadow-md border border-gray-800">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16v-4a4 4 0 018 0v4M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Mobile</h3>
          </div>
          <SkillBar label="Android (Java)" percent={86} color="bg-lime-400" />
          <SkillBar label="React Native" percent={78} color="bg-blue-400" />
        </div>

        {/* Tools */}
        <div className="bg-[#0b1220] p-6 rounded-xl shadow-md border border-gray-800">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-pink-600 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.39 18.39A9 9 0 1118.39 2.39" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Tools</h3>
          </div>
          <SkillBar label="Git" percent={90} color="bg-red-400" />
          <SkillBar label="Figma" percent={55} color="bg-pink-400" />
          <SkillBar label="Postman" percent={88} color="bg-amber-400" />
          <SkillBar label="VS Code" percent={95} color="bg-sky-500" />
          <SkillBar label="photoshop" percent={55} color="bg-pink-400" />
        </div>
      </div>
    </section>
  );
}
