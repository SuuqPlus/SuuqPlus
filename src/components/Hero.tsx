import { ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-orange-400 font-semibold mb-4 tracking-widest uppercase text-sm"
          >
            Spring Collection 2026
          </motion.p>

          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-display">
            Discover Modern Products For Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Lifestyle</span>
          </h2>

          <p className="text-gray-400 mb-10 text-lg md:text-xl leading-relaxed max-w-lg">
            Shop premium fashion, electronics, accessories, and more
            with fast delivery and secure payments. Join the elite community of modern shoppers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-orange-500/20 group">
              Shop Now
              <ShoppingBag className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
            </button>

            <button className="border border-white/20 hover:border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 overflow-hidden relative">
              Explore
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm text-gray-400 border-t border-white/10 pt-8">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-10 h-10 rounded-full border-2 border-slate-900" />
              ))}
            </div>
            <p><span className="text-white font-bold">12k+</span> Happy Customers</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-orange-500/20 rounded-3xl blur-2xl group-hover:bg-orange-500/30 transition-colors" />
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="premium product"
            className="rounded-3xl shadow-2xl w-full h-[500px] md:h-[600px] object-cover relative z-10 transform hover:scale-[1.02] transition-transform duration-500"
          />
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl z-20 hidden lg:block text-slate-900"
          >
            <p className="text-xs font-bold text-gray-500 uppercase">Featured</p>
            <p className="font-display font-bold text-lg">Modern Minimalist Watch</p>
            <p className="text-orange-500 font-bold">$249.00</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
