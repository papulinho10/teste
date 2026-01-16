
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL, ADDRESS, ADDRESS_SUB, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wine-dark text-ivory pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Section */}
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            {/* ATUALIZADO: Logo muito maior */}
            <div className="h-48 w-48 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
              {/* ⬇️ AQUI FICA A LOGO (RODAPÉ) ⬇️ */}
              <img 
                src={LOGO_URL} 
                alt="Vista Alegre" 
                className="w-full h-full object-contain" 
              />
            </div>
            <p className="text-ivory/50 font-light text-sm leading-relaxed max-w-xs">
              Uma curadoria exclusiva de vinhos no coração de Gramado. Onde a tradição encontra o requinte em cada taça.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Explorar</h4>
            <nav className="flex flex-col items-center md:items-start space-y-4">
              <Link to="/" className="text-sm font-light hover:text-gold transition-colors">Início</Link>
              <Link to="/vinhos" className="text-sm font-light hover:text-gold transition-colors">Nossa Adega</Link>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm font-light hover:text-gold transition-colors"
              >
                Voltar ao Topo
              </button>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Siga-nos</h4>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-sm font-light hover:text-gold transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-wine-light transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Onde Estamos</h4>
            <div className="text-center md:text-left space-y-2">
              <p className="text-sm font-medium">{ADDRESS}</p>
              <p className="text-xs font-light text-ivory/50">{ADDRESS_SUB}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ivory/30 text-center md:text-left">
            &copy; {new Date().getFullYear()} Vista Alegre Gramado.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
