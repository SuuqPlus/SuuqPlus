import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-slate-900 flex items-center gap-1"
        >
          Shop<span className="text-orange-500">Pro</span>
        </motion.h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-slate-600">
          {['Home', 'Categories', 'Products', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="hover:text-orange-500 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-700 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-700 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
              3
            </span>
          </button>

          <button className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200">
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>
          
          <button className="md:hidden p-2 text-slate-700">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
