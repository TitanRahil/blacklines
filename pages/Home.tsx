import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Plus, Minus, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { SERVICE_DATA, HERO_IMAGE, FAQ_ITEMS } from '../constants';

const Home: React.FC = () => {
  const { hash } = useLocation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Handle scrolling to anchor tags
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Slight delay to ensure render
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Hero Car" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-60 grayscale-[30%]"
          />
          {/* Vignette and darkening */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/70"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
           <div className="inline-block mb-4 px-3 py-1 border border-purple-500/50 rounded-full bg-purple-900/20 backdrop-blur-sm">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em]">Established 2012</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
            BLACKLINES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-zinc-500">MOTORSPORT</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl font-light tracking-wide max-w-xl mb-10 md:ml-2">
            Japanese Precision. Performance Engineering. <br/>
            Redefining the limit between street and circuit.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 md:ml-2">
             <Link 
              to="/services/engine-tuning" 
              className="px-8 py-4 bg-purple-600 text-white font-bold uppercase tracking-widest hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your Build <ArrowUpRight size={18} />
            </Link>
            <a 
              href="#about"
              className="px-8 py-4 border border-zinc-500 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Visit Workshop
            </a>
          </div>
        </div>
      </section>

      {/* Modifications Overview Section */}
      <section id="modifications" className="py-24 bg-zinc-950 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-900 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-2">Modifications</h2>
              <p className="text-zinc-500">Comprehensive tuning services for every aspect of your vehicle.</p>
            </div>
            <div className="hidden md:block text-right">
               <span className="text-purple-500 font-mono text-sm">01 / 06</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(SERVICE_DATA).map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group relative h-96 overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
              >
                {/* Card Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.heroImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="w-10 h-[2px] bg-purple-500 mb-6 w-0 group-hover:w-12 transition-all duration-500"></div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm line-clamp-2 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-purple-400 text-xs font-bold uppercase tracking-widest gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">Frequently Asked</h2>
            <p className="text-zinc-500">Common questions about our process, warranties, and parts.</p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border transition-all duration-300 ${isOpen ? 'border-purple-500 bg-zinc-900/30' : 'border-zinc-800 bg-transparent hover:border-zinc-700'}`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`text-lg font-bold tracking-wide ${isOpen ? 'text-white' : 'text-zinc-400'}`}>
                      {item.question}
                    </span>
                    <span className={`ml-4 ${isOpen ? 'text-purple-500' : 'text-zinc-600'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-dashed border-zinc-800/50 mt-2">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-zinc-900 relative scroll-mt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Philosophy of <br />
                <span className="text-purple-600">Perfection</span>
              </h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  Founded in 2012 in the industrial heart of Osaka, Blacklines Motorsport began with a simple mission: to bridge the gap between raw track performance and street-legal refinement.
                </p>
                <p>
                  We believe that every modification should serve a purpose. We reject excess for the sake of excess. Our aesthetic is minimal, our engineering is precise, and our results are undeniable.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Phone className="text-purple-500 mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold uppercase text-sm mb-1">Contact</h3>
                    <p className="text-zinc-400 text-sm">+81 3-5555-0199</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-purple-500 mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold uppercase text-sm mb-1">Inquiries</h3>
                    <p className="text-zinc-400 text-sm">builds@blacklines.jp</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
               <div className="flex items-start bg-zinc-950 p-6 border border-zinc-800">
                  <Clock className="text-purple-500 mt-1 mr-4 shrink-0" />
                  <div className="w-full">
                    <h3 className="text-white font-bold uppercase text-sm mb-4">Opening Hours</h3>
                    <div className="text-zinc-400 grid grid-cols-2 gap-2 text-sm">
                      <span>Mon - Fri</span>
                      <span className="text-right">10:00 - 20:00</span>
                      <span>Saturday</span>
                      <span className="text-right">12:00 - 18:00</span>
                      <span>Sunday</span>
                      <span className="text-right">Closed</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start bg-zinc-950 p-6 border border-zinc-800">
                  <MapPin className="text-purple-500 mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold uppercase text-sm mb-2">Location</h3>
                    <p className="text-zinc-400 text-sm">1-4-22 Kaigan, Minato City<br/>Tokyo 105-0022, Japan</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Working Map */}
          <div className="w-full h-[500px] border border-zinc-800 bg-zinc-950 relative group">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=1-4-22%20Kaigan%2C%20Minato%20City%2C%20Tokyo&t=m&z=15&output=embed&iwloc=near"
              className="filter grayscale invert-[0.9] hue-rotate-180 contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
              title="Blacklines Motorsport Location"
            ></iframe>
            <div className="absolute top-4 left-4 bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-white border border-zinc-800 pointer-events-none">
              Tokyo Workshop
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-zinc-900 w-full"></div>
    </>
  );
};

export default Home;