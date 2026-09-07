import { content } from "../Content";
import { MdLocationOn, MdWork } from "react-icons/md";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const Hireme = () => {
  const { Hireme } = content;

  const experiences = [
    Hireme.exp10,
    Hireme.exp9,
    Hireme.exp7,
    Hireme.exp8,
    Hireme.exp5,
    Hireme.exp6,
    Hireme.exp,
    Hireme.exp2,
    Hireme.exp3,
    Hireme.exp4,
  ].filter(Boolean);

  return (
    <section className="relative py-24 overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ee2c76]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ee2c76]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee2c76]/10 border border-[#ee2c76]/30 text-[#ee2c76] text-xs font-semibold uppercase tracking-wider mb-4">
            <HiAcademicCap className="text-base" /> Education & Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3" data-aos="fade-down">
            {Hireme.title}
          </h2>
          <p className="text-[#ee2c76] font-semibold uppercase tracking-widest text-sm" data-aos="fade-down">
            {Hireme.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Image + Education Card */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={Hireme.image1}
                alt="Maryem"
                className="w-full object-cover max-h-[420px] group-hover:scale-105 transition-transform duration-700 md:block hidden"
              />
              <img
                src={Hireme.image2}
                alt="Maryem"
                className="w-full object-cover max-h-[380px] group-hover:scale-105 transition-transform duration-700 md:hidden"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ee2c76] flex items-center justify-center shrink-0">
                  <MdLocationOn className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Location</p>
                  <p className="text-slate-300 text-xs">{Hireme.city}</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="relative bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 overflow-hidden" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#ee2c76]/10 rounded-full blur-2xl -translate-y-10 translate-x-10" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ee2c76] to-[#f43f5e] flex items-center justify-center shrink-0 shadow-lg">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-bold text-base mb-1">{Hireme.para}</h5>
                  <p className="text-slate-400 text-sm mb-1">{Hireme.pare2}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-[#ee2c76]/10 border border-[#ee2c76]/30 text-[#ee2c76] text-xs font-semibold rounded-full">
                      {Hireme.years}
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full">
                      GPA {Hireme.Grade}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Final Project</p>
                    <p className="text-white text-sm font-medium">{Hireme.final}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Experience Timeline */}
          <div data-aos="fade-left">
            <div className="relative bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#ee2c76]/10 rounded-full blur-2xl -translate-y-10 -translate-x-10" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ee2c76] to-[#f43f5e] flex items-center justify-center shadow-lg">
                  <FaBriefcase className="text-white text-xl" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg">Work Experience</h5>
                  <p className="text-slate-400 text-sm">Roles & Contributions</p>
                </div>
              </div>

              <div className="relative flex flex-col gap-0">
                <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#ee2c76] via-[#ee2c76]/30 to-transparent rounded-full" />

                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                    className="relative flex items-start gap-5 pl-8 pb-5 group"
                  >
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#ee2c76] border-2 border-black group-hover:scale-125 transition-transform duration-200" />
                    <div className="flex-1 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-[#ee2c76]/30 rounded-2xl px-4 py-3 transition-all duration-300 cursor-default">
                      <p className="text-slate-200 text-sm font-medium leading-relaxed">{exp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-4 pr-2">
              <img src={Hireme.image3} alt="" className="w-24 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
