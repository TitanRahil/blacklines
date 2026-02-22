import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-zinc-950 min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 text-center">
          Frequently Asked
        </h1>
        <p className="text-zinc-500 text-center mb-16">Common questions about our process, warranties, and parts.</p>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border transition-all duration-300 ${isOpen ? 'border-purple-500 bg-zinc-900/30' : 'border-zinc-800 bg-transparent hover:border-zinc-700'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
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
    </div>
  );
};

export default FAQ;