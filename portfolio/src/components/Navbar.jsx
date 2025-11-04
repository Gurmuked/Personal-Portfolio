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


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-neutral-900">
      <div className="text-orange-600 font-bold text-[28px]">LOGO</div>
      <ul className="flex gap-8 flex-1 justify-center">
        {navLinks.map((item) => (
          <li key={item.label}>
            <button
             onClick={() => handleScroll(item.to)}
              className={`text-[22px] ${
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
      <button className="bg-orange-600 hover:bg-orange-700 text-white text-[22px] px-4 py-1 rounded transition-colors">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;