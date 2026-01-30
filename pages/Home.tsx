
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL, ADDRESS, ADDRESS_SUB, ADDRESS_2, ADDRESS_SUB_2, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL, MAP_URL } from '../constants';

const Home: React.FC = () => {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

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

  // Lógica de Play/Pause baseada na rolagem (Intersection Observer)
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Vídeo entrou na tela (50% visível) -> Play
            videoElement.play().catch((err) => {
                console.log('Autoplay prevent:', err);
            });
          } else {
            // Vídeo saiu da tela -> Pause
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Dispara quando 50% do vídeo estiver visível
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col bg-wine-black">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1920" 
              className="w-full h-full object-cover opacity-30" 
              alt="Wine Background"
              loading="eager" // Carregamento prioritário para a imagem principal
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wine-black/50 via-wine-black/20 to-wine-black" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* ATUALIZADO: mb-0 para diminuir espaçamento entre logo e título */}
          <div className="mb-0 relative group animate-fade-in">
            <div className="relative h-56 w-56 md:h-80 md:w-80 p-0 bg-transparent rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-700 flex items-center justify-center">
              {/* ⬇️ AQUI FICA A LOGO GRANDE (TELA INICIAL) ⬇️ */}
              <img 
                src={LOGO_URL} 
                alt="Vista Alegre" 
                className="w-full h-full object-contain"
                loading="eager"
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
             {/* 
                ATUALIZADO PARA MOBILE: 
                - aspect-[9/16] no mobile para ocupar a tela verticalmente (formato Stories/Reels).
                - md:aspect-[3/4] no desktop para manter a elegância.
             */}
             <div className="aspect-[9/16] md:aspect-[3/4] overflow-hidden rounded-[40px] shadow-2xl border border-white/5 bg-wine-dark/20 relative group/video">
                {/* 
                  VIDEO ATUALIZADO
                  - Removido controls (tira os 3 pontos).
                  - Play/Pause controlado pelo IntersectionObserver no useEffect.
                  - muted controlado pelo state (inicia true/mudo).
                */}
                <video 
                  ref={videoRef}
                  src="https://files.catbox.moe/5nq54t.mp4" 
                  className="w-full h-full object-cover rounded-[40px]" 
                  muted={isMuted}
                  loop
                  playsInline
                />
                
                {/* Botão Customizado de Mute/Unmute */}
                <button 
                  onClick={toggleMute}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-wine transition-all duration-300 border border-white/10 z-20"
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
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

      {/* NOVA SEÇÃO: Parada Perfeita */}
      <section className="py-24 px-6 bg-[#0F0404] border-t border-white/5 relative overflow-hidden">
        {/* Background Decorative Bloom */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-wine/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
          
          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">Localização Privilegiada</span>
              <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-none">
                Uma Parada Perfeita <br/> 
                <span className="text-white/30 italic">Durante o Passeio</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-ivory/70 font-light leading-relaxed">
              <p>
                A Vista Alegre está localizada em pontos estratégicos de Gramado, dentro do Parque dos Bondinhos e na avenida principal, próxima a atrações turísticas como museus e o Super Carros, integrando-se naturalmente ao roteiro da cidade.
              </p>
              <p>
                É o lugar ideal para fazer uma pausa, degustar um bom vinho, saborear produtos da serra e relaxar em um ambiente acolhedor, transformando a visita em um momento agradável e memorável.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
             <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group">
                <div className="absolute inset-0 bg-wine-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* ⬇️ IMAGEM DA PARADA PERFEITA ⬇️ */}
                <img 
                  src="https://i.postimg.cc/5t2yqCPK/imagem-para-site.jpg" 
                  alt="Vista panorâmica da Serra Gaúcha com tábua de frios e vinho" 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[1.5s]"
                  loading="lazy" // Carregamento tardio para melhorar performance
                />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-wine-dark border border-white/10 p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <span className="block text-gold text-2xl font-serif font-bold">Gramado</span>
                <span className="block text-ivory/60 text-xs uppercase tracking-widest mt-1">Serra Gaúcha</span>
             </div>
          </div>

        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-24 px-6 bg-[#0B0303] text-white scroll-mt-24 border-t border-white/5">
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
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-ivory">Nossas Lojas</h3>
              
              <div className="flex flex-col gap-4 w-full px-2">
                <div className="text-center">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-1">Gramado</span>
                    <p className="text-lg font-bold text-ivory/90 leading-tight">{ADDRESS}</p>
                </div>
                <div className="w-12 h-px bg-white/10 mx-auto"></div>
                <div className="text-center">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-1">Canela</span>
                    <p className="text-lg font-bold text-ivory/90 leading-tight">{ADDRESS_2}</p>
                </div>
              </div>

              <button 
                onClick={() => window.open(`https://maps.google.com/?q=${ADDRESS}`, '_blank')}
                className="bg-[#3B82F6] text-white px-10 py-3 rounded-full flex items-center gap-2 hover:brightness-110 transition-all font-bold uppercase tracking-widest text-[10px] shadow-lg mt-2"
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
