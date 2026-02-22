import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SERVICE_DATA } from '../constants';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? SERVICE_DATA[id] : null;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover grayscale-[50%] brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <Link to="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-6 text-sm uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            {service.title}
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Sub-categories Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
            <div className="h-px bg-purple-600 w-12 mr-4"></div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-200">Available Options</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {service.subCategories.map((sub, index) => (
            <div key={index} className="group flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-zinc-900">
                <img 
                  src={sub.image} 
                  alt={sub.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 border border-zinc-800 transition-colors duration-300 group-hover:border-purple-500/30 pointer-events-none"></div>
                {/* Interactive overlay hint */}
                 <div className="absolute bottom-4 right-4 bg-purple-600 text-white p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                   <ArrowLeft size={20} className="rotate-180" />
                 </div>
              </div>
              
              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {sub.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4 group-hover:border-purple-500 transition-colors">
                  {sub.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Ready to upgrade your {service.title}?</h2>
          <p className="text-zinc-400 mb-8">Consult with our engineering team to find the perfect specification for your build.</p>
          <Link to="/about" className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;