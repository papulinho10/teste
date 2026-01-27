
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
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

        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-white/5 pb-12">
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

        {/* ⬇️⬇️⬇️ AVISO / DISCLAIMER ⬇️⬇️⬇️ */}
        <div className="mb-20 bg-wine-dark/30 border border-gold/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-4 max-w-2xl">
                 <h3 className="text-2xl font-serif text-ivory italic">Não encontrou o produto que procura?</h3>
                 <p className="text-ivory/70 font-light leading-relaxed">
                    Nesta página, apresentamos exclusivamente os vinhos da nossa <strong>produção própria</strong>. 
                    Em nossa loja física, oferecemos uma experiência completa com <strong>degustações</strong> e uma vasta seleção de queijos, embutidos e produtos coloniais. Entre em contato para conhecer nossa linha completa!
                 </p>
              </div>
              <button 
                 onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                 className="whitespace-nowrap bg-[#22C55E] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#1fa851] transition-all shadow-lg flex items-center gap-3 hover:-translate-y-1"
              >
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.661 1.433h.05c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                 </svg>
                 Falar com Sommelier
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative">
              {/* 
                 ATUALIZADO:
                 - Removido bg-[#1a0505] e bordas para "diminuir o design" (ficar transparente).
                 - object-contain: Foto inteira, sem cortes.
                 - aspect-[3/4]: Proporção equilibrada para vinhos verticais.
                 - drop-shadow-2xl na imagem para destacar o produto sem caixa.
              */}
              <div className="aspect-[3/4] rounded-[20px] mb-6 relative bg-transparent flex items-center justify-center overflow-visible">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-[2s] drop-shadow-2xl"
                />
                
                {/* Botão flutuante ajustado para o novo design sem borda */}
                <button 
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-4 right-4 bg-ivory text-wine-dark w-12 h-12 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-wine hover:text-white z-20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
