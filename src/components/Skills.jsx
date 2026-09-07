import { content } from "../Content";
import { BiCodeAlt } from "react-icons/bi";

const Skills = () => {
  const { skills } = content;

  return (
    <section className="relative py-24 overflow-hidden" id="skills">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-80 h-80 bg-[#ee2c76]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#ee2c76]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee2c76]/10 border border-[#ee2c76]/30 text-[#ee2c76] text-xs font-semibold uppercase tracking-wider mb-4">
            <BiCodeAlt className="text-base" /> Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3" data-aos="fade-down">
            {skills.title}
          </h2>
          <p className="text-[#ee2c76] font-semibold uppercase tracking-widest text-sm" data-aos="fade-down">
            {skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="group relative flex flex-col items-center justify-center gap-3 p-6 bg-[#0f0f0f] border border-white/10 rounded-3xl cursor-default overflow-hidden
                hover:border-[#ee2c76]/50 hover:bg-[#ee2c76]/5 transition-all duration-400"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#ee2c76]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-white/10 border border-white/10 group-hover:border-[#ee2c76]/40 flex items-center justify-center transition-all duration-300">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Name + Tag */}
              <div className="relative text-center">
                <p className="text-white font-semibold text-sm leading-tight">{skill.name}</p>
                {skill.para && (
                  <p className="text-[#ee2c76] text-[11px] font-medium mt-0.5">{skill.para}</p>
                )}
              </div>

              {/* Bottom line indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ee2c76] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

