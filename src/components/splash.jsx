import { motion } from 'framer-motion';
import { HiCode, HiSparkles, HiArrowDown } from 'react-icons/hi';
import { MdOutlineDesignServices } from 'react-icons/md';

const Splash = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 py-12">

      {/* Animated background glowing orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ee2c76]/25 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] bg-[#ee2c76]/20 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ee2c76]/10 rounded-full blur-[90px]"
        />
      </div>

      {/* Subtle modern grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 max-w-6xl mx-auto w-full my-auto">

        {/* Left — Photo with Floating Badges & Animations */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          {/* Pulsing Aura */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.65, 0.35],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-tr from-[#ee2c76]/40 via-[#f43f5e]/20 to-transparent blur-3xl pointer-events-none"
          />

          {/* Avatar Container with Entrance & Idle Float */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100, duration: 0.8 }}
            className="relative"
          >
            {/* Idle floating motion wrapper */}
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [-0.5, 0.5, -0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <img
                src="/7.png"
                alt="Maryem"
                className="relative w-[240px] sm:w-[290px] lg:w-[360px] object-contain drop-shadow-[0_20px_45px_rgba(238,44,118,0.35)]"
              />
            </motion.div>

            {/* Floating Badge 1 — Full Stack (Top Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 140 }}
              className="absolute top-4 -right-4 lg:-right-6 z-20"
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
              >
                <span className="p-1 rounded-md bg-[#ee2c76]/20 text-[#ee2c76]">
                  <HiCode className="w-3.5 h-3.5" />
                </span>
                <div className="text-left">
                  <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wider leading-none">Developer</p>
                  <p className="text-xs font-bold text-white leading-tight">Full Stack</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Badge 2 — UI/UX Design (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 140 }}
              className="absolute bottom-6 -left-4 lg:-left-6 z-20"
            >
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
              >
                <span className="p-1 rounded-md bg-[#ee2c76]/20 text-[#ee2c76]">
                  <MdOutlineDesignServices className="w-3.5 h-3.5" />
                </span>
                <div className="text-left">
                  <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wider leading-none">Creative</p>
                  <p className="text-xs font-bold text-white leading-tight">UI / UX Design</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-xl">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ee2c76]/10 border border-[#ee2c76]/30 text-[#ee2c76] text-xs font-semibold uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee2c76] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee2c76]" />
            </span>
            Available for work
          </motion.div>

          {/* Greeting & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="space-y-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Hi, I'm{' '}
              <span className="relative inline-block bg-gradient-to-r from-[#ee2c76] via-[#ff6b9d] to-[#ee2c76] bg-clip-text text-transparent">
                Maryem
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-300 tracking-wide">
              Welcome To My Portfolio
            </p>
          </motion.div>

          {/* Bio paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            My favorite hobby is drawing and that's why I decided to learn web design.
            I love looking and digging into trees and the sky, and analysis systems, programming too.
            At the end… just dream, try, and go there with all your possibilities.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(238,44,118,0.5)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('hire')}
              className="px-6 py-2.5 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-[#ee2c76] to-[#f43f5e] shadow-[0_4px_20px_rgba(238,44,118,0.4)] flex items-center gap-2 cursor-pointer"
            >
              <HiSparkles className="w-4 h-4" />
              About Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('projects')}
              className="px-6 py-2.5 rounded-xl font-semibold text-slate-200 text-sm border border-white/15 bg-white/5 backdrop-blur-sm hover:border-[#ee2c76]/50 transition-colors cursor-pointer"
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Animated Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-2 flex items-center gap-2.5 cursor-pointer group"
            onClick={() => scrollTo('hire')}
          >
            <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1 group-hover:border-[#ee2c76]/60 transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1.5 rounded-full bg-[#ee2c76]"
              />
            </div>
            <span className="text-slate-500 text-xs uppercase tracking-widest group-hover:text-slate-300 transition-colors flex items-center gap-1">
              Scroll down <HiArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Splash;