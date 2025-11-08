
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
  <section id="contact" className="scroll-mt-12 px-8 py-16 bg-[#111827]/10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#F3F4F6] mb-8">Let's Connect</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="text-left">
            <h3 className="text-xl font-bold text-[#F3F4F6] mb-4">Get In Touch</h3>
            <p className="text-[#F3F4F6]/80 mb-6 max-w-md">
              I'm always open to discussing new opportunities, collaborations, or just
              having a chat about technology and design.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1"><FaEnvelope /></span>
                <div>
                  <div className="text-[#F3F4F6]">gurmesakedir96@gmail.com</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1"><FaPhoneAlt /></span>
                <div>
                  <div className="text-[#F3F4F6]">+251965698844</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1"><FaMapMarkerAlt /></span>
                <div>
                  <div className="text-[#F3F4F6]">Shashemene, 01</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Contact form card */}
          <div className="w-full">
            <div className="max-w-md mx-auto bg-[#111827]/30 border border-red-700/20 rounded-lg p-6 backdrop-blur-sm shadow-lg">
              <form className="space-y-4">
                <input
                  aria-label="Your Name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#111827]/40 text-[#F3F4F6] placeholder:text-[#F3F4F6]/60 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-[#FACC15]"
                />

                <input
                  aria-label="Your Email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#111827]/40 text-[#F3F4F6] placeholder:text-[#F3F4F6]/60 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-[#FACC15]"
                />

                <textarea
                  aria-label="Your Message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-[#111827]/40 text-[#F3F4F6] placeholder:text-[#F3F4F6]/60 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-[#FACC15]"
                />

                <div className="pt-2">
                  <button type="button" className="w-full py-2 rounded text-black font-semibold  bg-orange-600 hover:bg-orange-700 shadow-[0_0_20px_rgba(250,204,21,0.3)] transition">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
