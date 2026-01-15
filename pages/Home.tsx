
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL, ADDRESS, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL, MAP_URL } from '../constants';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Se houver um estado indicando para rolar para o contato (vindo de outra página)
    if (location.state && (location.state as any).scrollToContact) {
      const contactSection = document.getElementById('contato');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Pequeno delay para garantir que a renderização ocorreu
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col bg-wine-black">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1920" 
              className="w-full h-full object-cover opacity-30" 
              alt="Wine Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wine-black/50 via-wine-black/20 to-wine-black" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="mb-8 relative group animate-fade-in">
            <div className="absolute inset-0 bg-gold/30 blur-[80px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
            <div className="relative h-40 w-40 md:h-56 md:w-56 p-0 bg-white border border-gold/20 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden transform hover:scale-105 transition-transform duration-700 flex items-center justify-center">
              {/* ⬇️ AQUI FICA A LOGO GRANDE (TELA INICIAL) ⬇️ */}
              <img 
                src={LOGO_URL} 
                alt="Vista Alegre" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-7xl text-ivory mb-8 font-light leading-tight tracking-tight">
            Momentos que <br/> <span className="italic text-gold">Amadurecem.</span>
          </h1>
          
          <Link 
            to="/vinhos" 
            className="bg-wine hover:bg-wine-light text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.3em] text-[9px] transition-all duration-500 shadow-[0_10px_40px_rgba(94,25,20,0.6)] border border-white/5"
          >
            Nossa Adega
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 bg-wine-black overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 relative group">
             <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-gold/20" />
             <div className="aspect-[3/4] overflow-hidden rounded-[40px] shadow-2xl border border-white/5 bg-wine-dark/20 relative">
                <div className="absolute inset-0 bg-wine-black/10 z-10 pointer-events-none" />
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-[2.5s]"
                  poster="https://images.unsplash.com/photo-1553830591-2f39e38a013c?auto=format&fit=crop&q=80&w=1000"
                >
                  {/* Vídeo de exemplo. Substitua a URL abaixo pelo vídeo oficial da Vista Alegre quando disponível */}
                  <source src="https://videos.pexels.com/video-files/6982842/6982842-hd_1080_1920_25fps.mp4" type="video/mp4" />
                </video>
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-10">
            <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px]">A Arte do Terroir</span>
            <h2 className="font-serif text-5xl md:text-7xl text-ivory leading-tight">
              Onde cada taça <br/> conta uma história.
            </h2>
            <p className="text-ivory/60 leading-relaxed font-light text-lg max-w-lg">
              A Vista Alegre, em Gramado, reúne o melhor dos sabores da Serra Gaúcha em um só lugar. Vinhos selecionados, queijos coloniais, embutidos, geleias artesanais, cachaças e facas especiais fazem parte de uma curadoria pensada para quem valoriza qualidade, tradição e experiências únicas. Um espaço acolhedor para degustar, presentear e levar para casa produtos que transformam momentos em boas memórias.
            </p>
            <div className="pt-6">
                <Link to="/vinhos" className="text-gold font-bold uppercase tracking-[0.2em] text-xs border-b-2 border-gold/30 pb-3 hover:border-gold hover:text-ivory transition-all">
                  Nossos Produtos
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-24 px-6 bg-[#0B0303] text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-ivory font-light">Entre em Contato</h2>
          <p className="text-white/40 mb-16 text-lg max-w-2xl mx-auto font-light">
            Reserve sua experiência exclusiva em nossa adega e descubra sabores inesquecíveis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-wine-dark/40 p-12 rounded-[2.5rem] border border-white/5 flex flex-col items-center space-y-6 transition-all hover:bg-wine-dark/60 hover:-translate-y-2 shadow-lg">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98 1 4.29L1.81 21.3a1 1 0 001.29 1.29L8.41 21c1.31.64 2.75 1 4.29 1 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-ivory">WhatsApp</h3>
              <p className="text-xl font-bold text-ivory/90">(54) 99684-4704</p>
              <button 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                className="bg-[#22C55E] text-white px-10 py-3 rounded-full flex items-center gap-2 hover:brightness-110 transition-all font-bold uppercase tracking-widest text-[10px] shadow-lg"
              >
                Conversar Agora
              </button>
            </div>

            <div className="bg-wine-dark/40 p-12 rounded-[2.5rem] border border-white/5 flex flex-col items-center space-y-6 transition-all hover:bg-wine-dark/60 hover:-translate-y-2 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(238,42,123,0.3)]">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,5A1,1 0 0,1 20,6A1,1 0 0,1 19,7A1,1 0 0,1 18,6A1,1 0 0,1 19,5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-ivory">Instagram</h3>
              <p className="text-xl font-bold text-ivory/90">{INSTAGRAM_HANDLE}</p>
              <button 
                onClick={() => window.open(INSTAGRAM_URL, '_blank')}
                className="bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] text-white px-10 py-3 rounded-full flex items-center gap-2 hover:brightness-110 transition-all font-bold uppercase tracking-widest text-[10px] shadow-lg"
              >
                Seguir Perfil
              </button>
            </div>

            <div className="bg-wine-dark/40 p-12 rounded-[2.5rem] border border-white/5 flex flex-col items-center space-y-6 transition-all hover:bg-wine-dark/60 hover:-translate-y-2 shadow-lg">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-ivory">Endereço</h3>
              <p className="text-lg font-bold text-center text-ivory/90">{ADDRESS}</p>
              <button 
                onClick={() => window.open(`https://maps.google.com/?q=${ADDRESS}`, '_blank')}
                className="bg-[#3B82F6] text-white px-10 py-3 rounded-full flex items-center gap-2 hover:brightness-110 transition-all font-bold uppercase tracking-widest text-[10px] shadow-lg"
              >
                Ver no Mapa
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Nossa Localização - Mapa Colorido */}
      <section className="py-24 px-6 bg-[#0B0303] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-ivory font-light italic">Nossa Localização</h2>
          <p className="text-white/40 mb-16 text-lg max-w-3xl mx-auto font-light">
            No coração de Gramado, um endereço que é sinônimo de sofisticação e acessibilidade.
          </p>

          <div className="w-full h-[500px] rounded-none overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 bg-wine-dark/20 relative group">
             <iframe 
                src={MAP_URL}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
