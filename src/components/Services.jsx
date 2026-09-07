import { content } from "../Content";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Services = () => {
  const { services } = content;

  return (
    <section className="relative py-24 overflow-hidden" id="services">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#ee2c76]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee2c76]/10 border border-[#ee2c76]/30 text-[#ee2c76] text-xs font-semibold uppercase tracking-wider mb-4">
            <HiOutlineBadgeCheck className="text-base" /> Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3" data-aos="fade-down">
            {services.title}
          </h2>
          <p className="text-[#ee2c76] font-semibold uppercase tracking-widest text-sm" data-aos="fade-down">
            {services.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.service_content.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative flex flex-col gap-4 p-6 bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden hover:border-[#ee2c76]/40 transition-all duration-500 cursor-default"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ee2c76]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ee2c76] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Logo */}
              <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#ee2c76]/30 transition-all duration-300">
                <img src={item.logo} alt={item.title} className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <div className="relative flex-1 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ee2c76]/10 border border-[#ee2c76]/20 text-[#ee2c76] text-[10px] font-bold uppercase tracking-wider w-fit">
                  <HiOutlineBadgeCheck className="text-xs" /> Certificate
                </span>
                <h6 className="text-white font-bold text-sm leading-snug">{item.title}</h6>
                <p className="text-slate-400 text-xs leading-relaxed">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

