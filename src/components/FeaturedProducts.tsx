import { ShoppingCart, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: 'Modern Sneakers',
    price: 120,
    category: 'Fashion',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },
  {
    id: 2,
    name: 'Smart Phone X1',
    price: 899,
    category: 'Electronics',
    rating: 4.9,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  },
  {
    id: 3,
    name: 'Noise Cancel Headset',
    price: 199,
    category: 'Accessories',
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 font-display"
            >
              Featured Products
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500"
            >
              Hand-picked selection of our most popular items. Quality materials meets modern design for your everyday lifestyle.
            </motion.p>
          </div>

          <button className="bg-slate-900 border-2 border-slate-900 text-white px-8 py-3 rounded-xl hover:bg-transparent hover:text-slate-900 transition-all font-bold whitespace-nowrap">
            View All Products
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {product.category}
                </div>
                <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:scale-110 transition-all shadow-sm">
                  <Heart className="w-5 h-5" />
                </button>
                
                {/* Overlay with Quick View */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
                   <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-colors">
                     Quick View
                   </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-orange-500 fill-orange-500' : 'text-gray-200'}`} 
                    />
                  ))}
                  <span className="text-xs text-gray-400 font-medium ml-1">({product.reviews})</span>
                </div>
                
                <h4 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {product.name}
                </h4>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Price</span>
                    <span className="text-slate-900 text-2xl font-bold font-display">
                      ${product.price}
                    </span>
                  </div>

                  <button className="bg-orange-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all active:scale-90 group/btn">
                    <ShoppingCart className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
