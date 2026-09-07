import { motion } from "framer-motion";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section className="relative py-16 overflow-hidden" id="hire">
      {/* Pink gradient ambient lights */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[#ee2c76]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ee2c76]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end gap-10 min-h-[520px]">

          {/* Left — text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col gap-7 z-10 pb-8"
          >
            {/* Role pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee2c76]/10 border border-[#ee2c76]/30 text-[#ee2c76] text-xs font-semibold uppercase tracking-wider w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#ee2c76] animate-pulse" />
              {hero.title}
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                {hero.firstName}{' '}
                <span className="bg-gradient-to-r from-[#ee2c76] to-[#f43f5e] bg-clip-text text-transparent">
                  {hero.LastName}
                </span>
              </h2>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <motion.a
                href={hero.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 35px rgba(238,44,118,0.5)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl font-bold text-white w-fit
                  bg-gradient-to-r from-[#ee2c76] to-[#f43f5e]
                  shadow-[0_4px_30px_rgba(238,44,118,0.4)]
                  transition-shadow duration-300 group"
              >
                {hero.btnText}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-4">
              {hero.hero_content.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 120 }}
                  whileHover={{ y: -6, scale: 1.04, borderColor: "rgba(238,44,118,0.5)" }}
                  className="flex flex-col items-center justify-center min-w-[130px] px-6 py-4
                    bg-[#0f0f0f]/90 backdrop-blur-md border border-white/10 rounded-3xl
                    hover:bg-[#ee2c76]/5 transition-colors duration-300 group cursor-default shadow-lg"
                >
                  <span
                    className="text-3xl font-black group-hover:scale-110 transition-transform duration-300"
                    style={{ color: '#ee2c76' }}
                  >
                    {item.count}
                  </span>
                  <p className="text-slate-400 text-xs text-center mt-1 leading-snug">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — image with animations */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-shrink-0 self-end"
          >
            {/* Pulsing glow beneath the character */}
            <motion.div
              animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#ee2c76]/25 rounded-full blur-3xl pointer-events-none"
            />

            {/* Floating highlight badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 140 }}
              className="absolute bottom-40 -left-4 lg:-left-8 z-20"
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-[#ee2c76]/40 shadow-[0_8px_25px_rgba(238,44,118,0.25)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#ee2c76] animate-ping" />
                <span className="text-xs font-bold text-white tracking-wide">Clean Code & UI</span>
              </motion.div>
            </motion.div>

            {/* Avatar with gentle idle float */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={hero.image}
                alt={`${hero.firstName} ${hero.LastName}`}
                className="relative w-[380px] lg:w-[500px] object-contain object-bottom drop-shadow-2xl block"
                style={{ maxHeight: '540px' }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

