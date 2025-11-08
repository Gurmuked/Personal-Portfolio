import { FaInstagram, FaLinkedin, FaTiktok, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="bg-[#040826] text-white text-center pt-10 pb-6 px-32">
      <hr className="border-gray-600 w-1.9/2 mx-auto mb-2" />
      <div className="flex flex-row justify-between">
      <p className="text-xs text-gray-400">Developed by Gurmesa FullStack Developer</p>
      <p className="text-xs text-gray-400">&copy; 2025 All Rights Reserved</p>
      </div>
  </footer>
  );
}
export default Footer;