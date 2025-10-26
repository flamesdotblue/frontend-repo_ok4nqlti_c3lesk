import { motion } from 'framer-motion';
import { Bot, GitBranch, Zap, Code2 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    desc: 'Conversational assistants that feel human. Multilingual, on-brand tones, tool usage, and real data connections.'
  },
  {
    icon: GitBranch,
    title: 'AI Workflows',
    desc: 'Orchestrated pipelines that process data, trigger actions, and integrate with your stack end-to-end.'
  },
  {
    icon: Zap,
    title: 'AI Agents & Automations',
    desc: 'Autonomous agents that plan, execute, and learn. From lead gen to operations — automate what matters.'
  },
  {
    icon: Code2,
    title: 'Full‑Stack Development',
    desc: 'From concept to production-grade apps. Modern frontends, robust APIs, and scalable infra.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Value prop / Why Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
            Vibe creators • Results in days, not months
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Build momentum fast with production‑ready AI
          </h2>
          <p className="mt-4 text-white/80">
            We blend strategy, product design, and engineering to turn your ideas into living, breathing experiences.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-orange-400/10" />
              <div className="relative">
                <s.icon className="h-8 w-8 text-purple-300" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          id="why"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-orange-400/10 p-8 text-center"
        >
          <p className="text-sm uppercase tracking-widest text-white/70">Our promise</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold">
            Prototype to launch in days — not months
          </h3>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            We ship fast with a quality bar that feels premium. Short cycles, tight collaboration, and transparent progress.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium shadow-lg shadow-white/20 hover:shadow-white/40">
              Book a discovery call
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 hover:bg-white/10">
              See case studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
