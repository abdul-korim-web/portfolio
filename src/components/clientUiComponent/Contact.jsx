

import React from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#050816] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-3">
            CONTACT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project idea or want to collaborate? Feel free to
            contact me anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xl">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      Email
                    </p>

                    <h4 className="text-white font-medium">
                      abdulkorimwebdeveloper@gmail.com
                    </h4>
                  </div>
                </div>


                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-xl">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      Phone
                    </p>

                    <h4 className="text-white font-medium">
                      +880 1617-465389
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xl">
                    <FaWhatsapp />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      WhatsApp
                    </p>

                    <h4 className="text-white font-medium">
                      +880 1617-465389
                    </h4>
                  </div>
                </div>
              </div>


              <div className="flex items-center gap-4 mt-10">
                <a
                target="_blank"
                  href="https://github.com/abdul-korim-web"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  <FaGithub size={20} />
                </a>

                <a
                target="_blank"
                  href="https://www.linkedin.com/in/abdul-korim-webdeveloper"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>


          <form className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-6">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-14 px-5 rounded-xl bg-[#0B1120] border border-white/10 text-white outline-none focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 px-5 rounded-xl bg-[#0B1120] border border-white/10 text-white outline-none focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full p-5 rounded-xl bg-[#0B1120] border border-white/10 text-white outline-none focus:border-indigo-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              Send Message
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;