import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen pt-20">
      {/* Brand Story Hero */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Philosophy of <br />
              <span className="text-purple-600">Perfection</span>
            </h1>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Founded in 2012 in the industrial heart of Osaka, Blacklines Motorsport began with a simple mission: to bridge the gap between raw track performance and street-legal refinement.
              </p>
              <p>
                We believe that every modification should serve a purpose. We reject excess for the sake of excess. Our aesthetic is minimal, our engineering is precise, and our results are undeniable. From the winding passes of Hakone to the expressways of Tokyo, our builds are designed to dominate.
              </p>
              <p>
                We specialize in platform-specific tuning for the GT-R, Supra, and NSX heritage lines, applying modern metallurgy and composite materials to legendary chassis.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 border-2 border-zinc-800 z-0 translate-x-4 translate-y-4"></div>
             <img 
              src="https://picsum.photos/id/452/800/1000" 
              alt="Workshop Interior" 
              className="relative z-10 w-full h-[600px] object-cover grayscale brightness-75 shadow-2xl"
             />
          </div>
        </div>
      </section>

      {/* Location & Info */}
      <section className="bg-zinc-900 py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Map Placeholder */}
          <div className="bg-zinc-950 border border-zinc-800 h-96 relative flex items-center justify-center overflow-hidden group">
            {/* Simulated Map */}
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=34.6937,135.5023&zoom=14&size=800x600&style=feature:all|element:all|saturation:-100|lightness:-70&sensor=false')] bg-cover bg-center opacity-50 hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
               <MapPin size={48} className="text-purple-600 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]" />
               <span className="bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">View on Google Maps</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-8 border-b border-zinc-800 pb-4">
              Visit The Lab
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-purple-500 mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase text-sm mb-1">Address</h3>
                  <p className="text-zinc-400">1-4-22 Kaigan, Minato City<br/>Tokyo 105-0022, Japan</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-purple-500 mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase text-sm mb-1">Hours</h3>
                  <div className="text-zinc-400 grid grid-cols-2 gap-4">
                    <span>Mon - Fri</span>
                    <span className="text-right">10:00 - 20:00</span>
                    <span>Saturday</span>
                    <span className="text-right">12:00 - 18:00</span>
                    <span>Sunday</span>
                    <span className="text-right">Closed for Racing</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-purple-500 mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase text-sm mb-1">Contact</h3>
                  <p className="text-zinc-400">+81 3-5555-0199</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-purple-500 mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase text-sm mb-1">Inquiries</h3>
                  <p className="text-zinc-400">builds@blacklines.jp</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;