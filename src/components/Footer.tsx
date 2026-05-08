import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400 py-24 pt-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 md:gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-bold text-white mb-6 font-display">
            Shop<span className="text-orange-500">Pro</span>
          </h2>
          <p className="mb-8 leading-relaxed">
            Premium e-commerce platform for the modern lifestyle. We curate the finest products to elevate your everyday experience with style and quality.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-display text-lg uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {['Home', 'Products', 'Collections', 'About Us', 'Contact', 'Blog'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-display text-lg uppercase tracking-wider">
            Shopping
          </h4>
          <ul className="space-y-4">
            {['Payments', 'Shipping', 'Returns', 'Size Guide', 'Gift Cards', 'FAQ'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-display text-lg uppercase tracking-wider">
            Contact Us
          </h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-orange-500 shrink-0" />
              <span>123 Design Street, Creative Valley, New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-orange-500 shrink-0" />
              <span>+1 (555) 000-0000</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-orange-500 shrink-0" />
              <span>support@shoppro.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm font-medium">
          © {currentYear} ShopPro. Handcrafted with passion by ShopPro Team.
        </p>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
