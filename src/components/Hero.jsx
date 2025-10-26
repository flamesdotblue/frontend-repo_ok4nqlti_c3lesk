import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows - don't block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.25)_0%,rgba(59,130,246,0.15)_35%,rgba(251,146,60,0.1)_70%,transparent_80%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 md:pt-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
            We are vibe creators — crafting immersive AI experiences
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
            If you can imagine it,
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-orange-300 bg-clip-text text-transparent">we can build it.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            An AI agency for the future. We design, build, and launch AI chatbots, workflows, agents, automations, and full‑stack platforms — delivering results in days, not months.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium shadow-lg shadow-white/20 hover:shadow-white/40">
              Get a Proposal
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 hover:bg-white/10">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
