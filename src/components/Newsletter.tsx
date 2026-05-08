import { Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-orange-500 rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl shadow-orange-500/30"
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-900/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-bold mb-6 font-display leading-tight">
            Elevate Your <span className="text-slate-900">Lifestyle</span> Today
          </h3>

          <p className="mb-10 text-orange-50 text-lg md:text-xl">
            Join our newsletter and be the first to know about exclusive drops, seasonal sales, and modern design trends.
          </p>

          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 justify-center bg-white/20 backdrop-blur-md p-2 rounded-[2rem] border border-white/30"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-4 rounded-[1.5rem] bg-white text-slate-900 w-full focus:outline-none focus:ring-4 focus:ring-white/20 transition-all font-medium"
              required
            />

            <button className="bg-slate-900 px-10 py-4 rounded-[1.5rem] hover:bg-slate-800 transition-all font-bold flex items-center justify-center gap-2 active:scale-95 shadow-xl">
              Subscribe Now
              <Send className="w-5 h-5" />
            </button>
          </form>
          
          <p className="mt-6 text-sm text-orange-100 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            Join 50,000+ others already subscribed.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
