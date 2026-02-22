import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Instagram, Twitter, Youtube } from 'lucide-react';
import { BRAND_NAME, BRAND_SUBTITLE } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
    
    // Only scroll to top if there is no hash (anchor) in the URL
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Modifications', path: '/#modifications' },
    { name: 'About Us', path: '/#about' },
    { name: 'FAQ', path: '/#faq' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="group flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-purple-500 transition-colors">
              {BRAND_NAME}
            </span>
            <span className="text-xs font-medium tracking-[0.3em] text-zinc-500 group-hover:text-zinc-300 transition-colors">
              {BRAND_SUBTITLE}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest hover:text-purple-400 transition-colors relative group ${
                  location.pathname === link.path && !location.hash ? 'text-purple-500' : 'text-zinc-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
            <Link to="/#about" className="ml-4 px-5 py-2 border border-zinc-700 text-xs font-bold uppercase tracking-widest hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-zinc-950 z-40 transform transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-bold uppercase tracking-widest text-zinc-400 hover:text-purple-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-black text-white mb-4 tracking-tighter">{BRAND_NAME}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Precision tuning and modifications for the discerning enthusiast. Japan-born, globally respected.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-purple-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-purple-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-purple-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300 mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/engine-tuning" className="text-zinc-500 hover:text-purple-500 text-sm transition-colors">Engine Tuning</Link></li>
              <li><Link to="/services/wheels" className="text-zinc-500 hover:text-purple-500 text-sm transition-colors">Wheels</Link></li>
              <li><Link to="/services/wraps" className="text-zinc-500 hover:text-purple-500 text-sm transition-colors">Wraps & PPF</Link></li>
              <li><Link to="/services/spoilers" className="text-zinc-500 hover:text-purple-500 text-sm transition-colors">Spoilers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/#about" className="text-zinc-500 hover:text-purple-500 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/#faq" className="text-zinc-500 hover:text-purple-500 text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/#about" className="text-zinc-500 hover:text-purple-500 text-sm transition-colors">Location</Link></li>
              <li><Link to="/#about" className="text-zinc-500 hover:text-purple-500 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300 mb-6">Newsletter</h4>
            <p className="text-zinc-500 text-xs mb-4">Subscribe for build logs and exclusive drops.</p>
            <div className="flex">
              <input type="email" placeholder="ENTER EMAIL" className="bg-zinc-900 border-none text-white text-xs px-4 py-3 focus:ring-1 focus:ring-purple-500 w-full" />
              <button className="bg-purple-600 px-4 hover:bg-purple-700 transition-colors text-white">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 flex justify-between items-center text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Blacklines Motorsport. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400">Privacy</a>
            <a href="#" className="hover:text-zinc-400">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;