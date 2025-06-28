import { FaInstagram, FaLinkedin, FaTiktok, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="bg-[#1a1a1a] text-white text-center pt-10 pb-6 px-32">
    <section className="flex felx-row justify-between ">
      <div className="text-orange-600 font-bold text-xl mb-6">LOGO</div>

      <ul className="flex flex-col justify-center gap-4 text-sm mb-6 text-gray-300">
        <li><a href="#" className="hover:text-orange-500">Home</a></li>
        <li><a href="#" className="hover:text-orange-500">About me</a></li>
        <li><a href="#" className="hover:text-orange-500">Services</a></li>
        <li><a href="#" className="hover:text-orange-500">Portfolio</a></li>
        <li><a href="#" className="hover:text-orange-500">Contact me</a></li>
      </ul>

      <div className="thrid-col flex flex-col justify-start gap-5 mb-6">
        <div className="flex gap-5">
        <a href="#"><FaLinkedin className="text-gray-400 hover:text-orange-500" /></a>
        <a href="#"><FaFacebook className="text-gray-400 hover:text-orange-500" /></a>
        <a href="#"><FaInstagram className="text-gray-400 hover:text-orange-500" /></a>
        <a href="#"><FaTiktok className="text-gray-400 hover:text-orange-500" /></a>
        </div>
        <div className="flex flex-col justify-center text-start gap-4 mb-6 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span className="cursor-pointer">gurmesakedir96@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span className="cursor-pointer">+251965698844</span>
          </div>
        </div>
      </div>
    </section>
      <hr className="border-gray-600 w-1.9/2 mx-auto mb-2" />
      <p className="text-xs text-gray-500">Developed by Gurmesa FullStack Developer</p>
  </footer>
  );
}
export default Footer;