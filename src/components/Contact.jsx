import { createElement } from "react";
import { content } from "../Content";
import person from '../../public/11.png';

const Contact = () => {
  const { Contact } = content;

  return (
    <section className="relative py-24 overflow-hidden" id="contact">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-[#ee2c76]/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ee2c76]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* Left — Text + social links */}
          <div className="flex-1 flex flex-col gap-8" data-aos="fade-right">

            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee2c76]/10 border border-[#ee2c76]/30 text-[#ee2c76] text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ee2c76] animate-pulse" />
                Let's connect
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2" data-aos="fade-down">
                {Contact.title}
              </h2>
              <p className="text-[#ee2c76] font-semibold uppercase tracking-widest text-sm" data-aos="fade-down">
                {Contact.subtitle}
              </p>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Contact.social_media.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="group flex flex-col items-center justify-center gap-3 p-5
                    bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden relative
                    hover:border-[#ee2c76]/50 transition-all duration-400 cursor-pointer"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ee2c76]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ee2c76] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#ee2c76]/40 flex items-center justify-center transition-all duration-300">
                    <span className="text-white text-xl group-hover:text-[#ee2c76] group-hover:scale-110 transition-all duration-300">
                      {createElement(item.icon)}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="relative text-slate-400 text-xs font-medium group-hover:text-white transition-colors duration-300 text-center truncate w-full px-1">
                    {item.text}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative flex-shrink-0" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl z-10" />
            <div className="absolute -inset-1 bg-gradient-to-br from-[#ee2c76]/20 to-transparent rounded-3xl blur-xl" />
            <img
              src={person}
              alt="Contact"
              className="relative max-w-xs lg:max-w-sm w-full object-cover rounded-3xl z-10"
            />
          </div>

        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 <span className="text-[#ee2c76] font-semibold">Maryem Mostafa</span>. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">Designed & Built with ❤️</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

