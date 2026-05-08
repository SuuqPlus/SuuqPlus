import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: 'Ahmed Hassan',
    role: 'Verified Buyer',
    comment: '“Amazing quality products and super fast delivery. The modern sneakers I ordered are even better in person.”',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ahmed'
  },
  {
    name: 'Fatima Ali',
    role: 'Entrepreneur',
    comment: '“The website design is smooth and very easy to use. I love the minimalist aesthetic and the curation of electronics.”',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=fatima'
  },
  {
    name: 'Mohamed Yusuf',
    role: 'Loyal Customer',
    comment: '“Best online shopping experience I’ve had in years. The customer support team was helpful with my accessory sizing.”',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=mohamed'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50/50 -skew-y-3 origin-top-left" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h3 className="text-4xl font-bold mb-4 font-display">
            What Customers Say
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Join over 10,000+ happy customers who trust ShopPro for their modern lifestyle needs and premium shopping experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left border border-gray-50 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-orange-500/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed italic text-lg">
                {review.comment}
              </p>

              <div className="flex items-center gap-4 border-t border-gray-50 pt-8">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-500/20" />
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1">
                    {review.name}
                  </h4>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
