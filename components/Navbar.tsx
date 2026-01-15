
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar o menu automaticamente ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleContactClick = () => {
    setIsMenuOpen(false); // Garante que o menu feche
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contato');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'py-2 px-4' : 'py-4 px-6'
    }`}>
      {/* Barra Principal */}
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 rounded-full relative z-50 ${
        isScrolled || isMenuOpen ? 'bg-wine-dark/90 backdrop-blur-md border border-white/5 px-4 py-1.5 shadow-xl' : 'bg-transparent'
      }`}>
        <Link to="/" className="flex items-center group">
          <div className={`relative transition-all duration-500 rounded-full overflow-hidden bg-white shadow-lg group-hover:scale-105 border border-white ${
            isScrolled ? 'h-8 w-8' : 'h-10 w-10'
          }`}>
            {/* ⬇️ AQUI FICA A LOGO (BARRA DE NAVEGAÇÃO) ⬇️ */}
            <img 
              src={LOGO_URL} 
              alt="Vista Alegre Logo" 
              className="w-full h-full object-contain scale-[1.6] transform transition-transform"
            />
          </div>
          <div className={`flex flex-col ml-3 transition-all duration-500 ${isScrolled ? 'opacity-0 scale-90 translate-x-[-10px] w-0' : 'opacity-100'}`}>
            <span className="text-ivory font-serif uppercase tracking-[0.2em] text-[9px] font-bold">Vista Alegre</span>
            <span className="text-gold/60 text-[7px] uppercase tracking-[0.1em]">Vinhos Finos</span>
          </div>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-[9px] font-bold uppercase tracking-[0.2em] text-ivory/80 hover:text-white transition-colors">Início</Link>
          <Link to="/vinhos" className="text-[9px] font-bold uppercase tracking-[0.2em] text-ivory/80 hover:text-white transition-colors">Adega</Link>
          <button 
            onClick={handleContactClick}
            className="text-[9px] font-bold uppercase tracking-[0.2em] text-ivory/80 hover:text-white transition-colors"
          >
            Contato
          </button>
        </div>

        {/* Ações (Carrinho + Menu Mobile) */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenCart}
            className="group relative flex items-center text-ivory"
          >
            <div className={`rounded-full bg-white/5 flex items-center justify-center group-hover:bg-wine transition-all border border-white/5 ${
               isScrolled ? 'w-8 h-8' : 'w-9 h-9'
            }`}>
              <svg className="w-4 h-4 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-wine-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-black shadow-lg animate-bounce-short">
                {cartCount}
              </span>
            )}
          </button>

          {/* Botão Menu Mobile (Hambúrguer) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-ivory rounded-full bg-white/5 flex items-center justify-center border border-white/5 transition-colors active:bg-wine ${
               isScrolled ? 'w-8 h-8' : 'w-9 h-9'
            }`}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      <div className={`absolute top-full left-0 right-0 mt-2 px-4 md:hidden transition-all duration-300 transform origin-top ${
        isMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-wine-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col space-y-4 text-center">
          <Link 
            to="/" 
            className="text-xs font-bold uppercase tracking-[0.2em] text-ivory hover:text-gold py-2 border-b border-white/5"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/vinhos" 
            className="text-xs font-bold uppercase tracking-[0.2em] text-ivory hover:text-gold py-2 border-b border-white/5"
            onClick={() => setIsMenuOpen(false)}
          >
            Nossa Adega
          </Link>
          <button 
            onClick={handleContactClick}
            className="text-xs font-bold uppercase tracking-[0.2em] text-ivory hover:text-gold py-2"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
