import { FaFigma, FaFileDownload } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro } from "react-icons/si";

const skills = [
  { name: "Figma", icon: <FaFigma size={30} />, percentage: 100 },
  { name: "Adobe XD", icon: <SiAdobexd size={30} />, percentage: 100 },
  { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={30} />, percentage: 85 },
  { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={30} />, percentage: 60 },
  { name: "Adobe Premiere", icon: <SiAdobepremierepro size={30} />, percentage: 70 },
];

const About = () => {
  return (
    <section className="bg-neutral-900 text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
      <p className="text-center text-sm text-gray-400 mb-8">User Interface And User Experience And Also Video Editing</p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <img
          src="../.././src/assets/gurmu.jpg"
          alt="profile"
          className="w-64 h-auto rounded-lg grayscale"
        />

        <div className="max-w-xl text-justify">
          <p className="text-gray-300 leading-7 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Culpa autem, voluptatem unde distinctio ad libero? Rem at 
            cumque quam voluptatum excepturi libero harum amet saepe, 
            maxime ullam voluptatem nemo in!
            A software engineer, the modern-day architect of digital realms,
             navigates the ethereal landscapes of code.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Culpa autem, voluptatem unde distinctio ad libero? Rem at 
            cumque quam voluptatum excepturi libero harum amet saepe, 
            maxime ullam voluptatem nemo in!
            A software engineer, the modern-day architect of digital realms,
             navigates the ethereal landscapes of code...
            (✂️ You can paste full description here)
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-orange-600">
            <FaFileDownload />
            Download CV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-4 border-orange-500">
              {skill.icon}
            </div>
            <p className="mt-2 text-sm font-semibold">{skill.percentage}%</p>
            <p className="text-xs text-gray-400">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;