import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/10 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-white"
          >
            <Rocket className="h-6 w-6 text-purple-400" />
            <span className="font-semibold tracking-tight">Flames AI Agency</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
            <a href="#why" className="text-white/80 hover:text-white transition">Why Us</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          </nav>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            <Sparkles className="h-4 w-4" />
            Start a Project
          </motion.a>
        </div>
      </div>
    </header>
  );
}
