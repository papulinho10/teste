
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-40 pb-32 px-6 bg-wine-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Link Voltar ao Início */}
        <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gold/80 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em] gap-2 group">
              <span className="p-1 rounded-full border border-gold/20 group-hover:border-white/50 transition-colors">
                 <svg className="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                 </svg>
              </span>
              Voltar ao Início
            </Link>
        </div>

        <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px]">A Seleção Vista Alegre</span>
            <h1 className="font-serif text-6xl md:text-8xl text-ivory">Nossa Adega</h1>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-wine text-white shadow-lg' 
                    : 'bg-white/5 text-ivory/60 hover:bg-wine/20 hover:text-ivory'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden rounded-[30px] mb-8 shadow-xl border border-white/5 relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-black/80 via-transparent to-transparent opacity-60" />
                
                <button 
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-6 right-6 bg-ivory text-wine-dark w-14 h-14 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-wine hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4 px-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-2">{product.category}</span>
                  <h3 className="font-serif text-3xl text-ivory group-hover:text-gold transition-colors">{product.name}</h3>
                </div>
                <p className="text-white/40 text-sm font-light leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="pt-6 flex items-center justify-between border-t border-white/5">
                  <span className="text-2xl font-light text-ivory italic">R$ {product.price.toFixed(2)}</span>
                  <button 
                     onClick={() => onAddToCart(product)}
                     className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold hover:text-white transition-colors"
                  >
                    Adicionar +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
