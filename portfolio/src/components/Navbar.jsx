import React from "react";
const navLinks = [
  { label: "Home", to: "home", },
  { label: "About me", to: "about" },
  { label: "Services", to: "service" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Contact me", to: "contact" },
];


const handleScroll = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


const Navbar = ({ bgMode, toggleBg }) => {
  return (
    <>
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-2 bg-[#040826]">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-orange-600">
        <img src=".././src/assets/logo.png" alt="logo" className="w-full h-full object-cover text-orange-600" />
      </div>
      <ul className="flex gap-8 flex-1 justify-center">
        {navLinks.map((item) => (
          <li key={item.label}>
            <button
             onClick={() => handleScroll(item.to)}
              className={`text-[20px] ${
                item.active
                  ? "text-orange-500 font-semibold"
                  : "text-gray-300 hover:text-orange-400"
              } transition-colors`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleBg}
          aria-pressed={bgMode === 'particles'}
          title="Toggle background (particles / image)"
          className="text-sm bg-neutral-800/30 hover:bg-neutral-800/50 text-gray-200 px-3 py-1 rounded transition-colors inline-flex items-center gap-2"
        >
          {bgMode === 'particles' ? (
              <>
                {/* Particle icon: three dots */}
                <svg className="w-4 h-4 text-orange-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="6" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="8" r="2" fill="currentColor" />
                  <circle cx="18" cy="16" r="2" fill="currentColor" />
                </svg>
              </>
            ) : (
              <>
                {/* Color icon: sun */}
                <svg className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.22 4.22l1.42 1.42" />
                    <path d="M18.36 18.36l1.42 1.42" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M4.22 19.78l1.42-1.42" />
                    <path d="M18.36 5.64l1.42-1.42" />
                  </g>
                </svg>
              </>
            )}
        </button>

        <button className="bg-orange-600 hover:bg-orange-700 text-white text-[22px] px-4 py-1 rounded transition-colors">
          Hire Me
        </button>
      </div>
      </nav>
      {/* spacer to prevent content being hidden behind the fixed navbar */}
      <div aria-hidden className="h-16" />
    </>
  );
};

export default Navbar;