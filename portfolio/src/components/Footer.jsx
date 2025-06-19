import { FaInstagram, FaLinkedin, FaDribbble, FaBehance, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white text-center pt-10 pb-6">
      <div className="text-orange-600 font-bold text-xl mb-6">LOGO</div>

      <ul className="flex justify-center gap-6 text-sm mb-6 text-gray-300">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About me</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact me</a></li>
      </ul>

      <div className="flex justify-center gap-5 mb-6">
        <a href="#"><FaInstagram className="text-gray-400 hover:text-white" /></a>
        <a href="#"><FaLinkedin className="text-gray-400 hover:text-white" /></a>
        <a href="#"><FaDribbble className="text-gray-400 hover:text-white" /></a>
        <a href="#"><FaBehance className="text-gray-400 hover:text-white" /></a>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-gray-300 text-sm">
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>gurmesakedir96@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+251965698844</span>
        </div>
      </div>

      <hr className="border-gray-600 w-3/4 mx-auto mb-2" />

      <p className="text-xs text-gray-500">Developed by Gurmesa FullStack Developer</p>
    </footer>
  );
}
export default Footer;