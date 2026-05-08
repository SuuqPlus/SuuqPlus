import { Laptop, Watch, Shirt, Home, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  { name: 'Fashion', icon: Shirt, color: 'bg-blue-50 text-blue-600', count: '1.2k Items' },
  { name: 'Electronics', icon: Laptop, color: 'bg-purple-50 text-purple-600', count: '840 Items' },
  { name: 'Accessories', icon: Watch, color: 'bg-orange-50 text-orange-600', count: '520 Items' },
  { name: 'Home', icon: Home, color: 'bg-green-50 text-green-600', count: '1.8k Items' },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-display"
          >
            Shop By Categories
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Explore our diverse range of curated collections, from high-end fashion to cutting-edge electronics and home essentials.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gray-50 p-8 rounded-3xl text-center hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gray-100 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className={`w-20 h-20 ${cat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform shadow-sm`}>
                <cat.icon className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-xl mb-1 relative z-10">{cat.name}</h4>
              <p className="text-sm text-gray-400 mb-6">{cat.count}</p>
              
              <div className="flex items-center justify-center gap-2 text-orange-500 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
