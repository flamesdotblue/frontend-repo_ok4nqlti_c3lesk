import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-2xl font-semibold">Let’s build your AI advantage</h4>
          <p className="mt-3 text-white/80 max-w-md">
            Share your vision. We’ll turn it into a product that feels inevitable.
          </p>
        </motion.div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          <input type="text" placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <textarea placeholder="What are you imagining?" rows={3} className="sm:col-span-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button className="sm:col-span-2 inline-flex justify-center rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
            Request proposal
          </button>
        </motion.form>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Flames AI Agency. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
