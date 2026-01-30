
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL, ADDRESS, ADDRESS_SUB, ADDRESS_2, ADDRESS_SUB_2, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL, MAP_URL } from '../constants';

// --- Componente Interno para o Card de Avaliação (Para gerenciar o estado 'Ler mais' individualmente) ---
const ReviewCard: React.FC<{ name: string; text: string }> = ({ name, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200; // Quantidade de caracteres antes de cortar
  const shouldTruncate = text.length > maxLength;

  return (
    <div className="bg-wine-dark/30 backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 flex flex-col items-start space-y-4 shadow-lg hover:bg-wine-dark/50 transition-all duration-500 group h-full">
      {/* Estrelas */}
      <div className="flex gap-1 text-gold">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      
      {/* Texto */}
      <div className="flex-grow">
        <p className="text-ivory/70 font-light leading-relaxed text-sm md:text-base">
          <span className="text-gold text-2xl leading-none mr-2 font-serif">"</span>
          {isExpanded || !shouldTruncate ? text : `${text.slice(0, maxLength)}...`}
        </p>
      </div>

      {/* Rodapé do Card: Nome + Botão */}
      <div className="w-full pt-4 border-t border-white/5 flex flex-col items-start gap-2">
        <h4 className="font-serif text-xl text-ivory font-bold">{name}</h4>
        
        {shouldTruncate && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold hover:text-white transition-colors flex items-center gap-1 mt-2"
          >
            {isExpanded ? 'Ler menos' : 'Ler mais'}
            <svg 
              className={`w-3 h-3 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

const reviewsData = [
  {
    name: "Polly Almeida",
    text: "Fui super bem recebida na Adega Vista Alegre! O atendimento feito pelo Nemias foi excepcional — atencioso, educado e muito prestativo. Tive degustações deliciosas de geleias, salames (inclusive o de carne de javali), além de vinhos e sucos da Serra Gaúcha. O local oferece uma variedade incrível de produtos artesanais de produtores locais, todos de excelente qualidade. Ambiente acolhedor, experiência completa e atendimento impecável. Super recomendo a visita! 🍷🧀✨"
  },
  {
    name: "Felipe Rocha",
    text: "A Vinícola Vista Alegre oferece uma experiência completa, acolhedora e cheia de sabor. A degustação de queijos e vinhos é um verdadeiro destaque: rótulos de excelente qualidade harmonizados com queijos deliciosos, tudo apresentado com atenção e conhecimento pelos anfitriões. O ambiente é agradável, organizado e transmite a autenticidade da produção local. Outro diferencial é a variedade de produtos à venda, incluindo lâminas, couros e facas artesanais — itens belíssimos e de ótima qualidade, que dão um charme extra à visita. Um passeio que combina tradição, gastronomia e cultura gaúcha de forma impecável. Vale muito a pena conhecer!"
  },
  {
    name: "Fernanda Medeiro",
    text: "De todas as degustações que já participei, essa foi, sem dúvida, a melhor. Os atendentes foram extremamente atenciosos e não mediram esforços para agradar o grupo em que eu estava. Queijos e vinhos de excelente qualidade, servidos à vontade, em um ambiente acolhedor e bem organizado. Um grande diferencial é que não há qualquer pressão para comprar…o que torna a experiência ainda mais agradável. Curiosamente, justamente por serem produtos tão saborosos e de alta qualidade, as pessoas acabam comprando espontaneamente. Uma experiência que recomendo!"
  }
];

const Home: React.FC = () => {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=vin%C3%ADcola+vista+alegre+gramado&sca_esv=83277d8885f8cf32&rlz=1C1ONGR_enBR1153BR1153&biw=1536&bih=703&aic=0&sxsrf=ANbL-n4WS62gFLIC89sm6eTiVxjx79nOyQ%3A1769803148963&ei=jA19adjDOva91sQPoZu9mQc&oq=vin%C3%ADcola+em+gramado+-+vista+alegre+avalia%C3%A7%C3%B5es&gs_lp=Egxnd3Mtd2l6LXNlcnAiMHZpbsOtY29sYSBlbSBncmFtYWRvIC0gdmlzdGEgYWxlZ3JlIGF2YWxpYcOnw7VlcyoCCAAyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEdI6iJQAFgAcAF4AZABAJgBAKABAKoBALgBAcgBAJgCAaACCZgDAIgGAZAGCJIHATGgBwCyBwC4BwDCBwMyLTHIBwaACAA&sclient=gws-wiz-serp";

  useEffect(() => {
    if (location.state && (location.state as any).targetId) {
      const targetId = (location.state as any).targetId;
      const section = document.getElementById(targetId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.state && (location.state as any).scrollToContact) {
       const contactSection = document.getElementById('contato');
       if (contactSection) {
         setTimeout(() => {
           contactSection.scrollIntoView({ behavior: 'smooth' });
         }, 100);
       }
    }
  }, [location]);

  // Lógica de Autoplay Robusta para Mobile
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Força atributos vitais diretamente no DOM para contornar limitações do React/Mobile
    videoElement.muted = true;
    videoElement.playsInline = true;
    videoElement.autoplay = true;
    videoElement.setAttribute('muted', '');
    videoElement.setAttribute('playsinline', '');
    videoElement.setAttribute('autoplay', '');

    const attemptPlay = async () => {
      try {
        videoElement.muted = true; // Redundância necessária
        await videoElement.play();
      } catch (err) {
        console.warn('Autoplay prevented by browser:', err);
        // Não fazemos nada se falhar, o IntersectionObserver tentará novamente
      }
    };

    // Tenta tocar imediatamente
    attemptPlay();

    // Monitora visibilidade para pausar/tocar (Performance)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Se visível, tenta tocar novamente
            if (videoElement.paused) {
              attemptPlay();
            }
          } else {
            // Se não visível, pausa
            if (!videoElement.paused) {
              videoElement.pause();
            }
          }
        });
      },
      {
        threshold: 0.1, // Baixo limiar para ativar logo
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
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
              loading="eager" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wine-black/50 via-wine-black/20 to-wine-black" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="mb-0 relative group animate-fade-in">
            <div className="relative h-56 w-56 md:h-80 md:w-80 p-0 bg-transparent rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-700 flex items-center justify-center">
              <img 
                src={LOGO_URL} 
                alt="Vista Alegre" 
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-7xl text-ivory mb-8 font-light leading-tight tracking-tight italic">
            Viva Sua <br/> <span className="text-gold">Melhor Safra</span>
          </h1>
          
          <Link 
            to="/vinhos" 
            className="bg-wine hover:bg-wine-light text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.3em] text-[9px] transition-all duration-500 shadow-[0_10px_40px_rgba(94,25,20,0.6)] border border-white/5"
          >
            Conheça nossos vinhos
          </Link>
        </div>
      </section>

      {/* Intro Section - VIDEO FIX */}
      <section className="py-32 px-6 bg-wine-black overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 relative group">
             <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-gold/20" />
             <div className="aspect-[9/16] md:aspect-[3/4] overflow-hidden rounded-[40px] shadow-2xl border border-white/5 bg-wine-dark/20 relative group/video">
                {/* 
                  VIDEO TAG OTIMIZADA:
                  - poster: Imagem de fundo caso o vídeo demore a carregar.
                  - playsInline, autoPlay, muted, loop: Atributos padrão HTML5.
                */}
                <video 
                  ref={videoRef}
                  src="https://files.catbox.moe/5nq54t.mp4" 
                  className="w-full h-full object-cover rounded-[40px]" 
                  poster="https://i.postimg.cc/5t2yqCPK/imagem-para-site.jpg"
                  muted // Atributo booleano direto
                  playsInline // Atributo booleano direto
                  autoPlay // Atributo booleano direto
                  loop
                  preload="auto"
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

      {/* Seção Parada Perfeita */}
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
                <img 
                  src="https://i.postimg.cc/5t2yqCPK/imagem-para-site.jpg" 
                  alt="Vista panorâmica da Serra Gaúcha com tábua de frios e vinho" 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[1.5s]"
                  loading="lazy"
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

      {/* Seção de Experiência de Degustação - ADICIONADO ID 'convite' */}
      <section id="convite" className="py-24 px-6 bg-gradient-to-b from-[#0F0404] to-[#2D090E] border-t border-white/5 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-wine/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] animate-pulse">
             Convite Especial
          </span>

          <h2 className="font-serif text-3xl md:text-5xl text-ivory leading-tight">
            Viva uma Experiência Exclusiva de <br/>
            <span className="italic text-gold">Degustações</span> em Gramado
          </h2>

          <p className="text-xl md:text-2xl text-ivory/90 font-light italic">
            "Descubra sabores únicos em um ambiente acolhedor. Vinhos selecionados, atendimento especializado e uma experiência que vai além da degustação."
          </p>

          <div className="w-24 h-px bg-gold/30 mx-auto my-6" />

          <p className="text-ivory/60 leading-relaxed font-light text-lg max-w-2xl mx-auto">
            Embarque em uma jornada sensorial única no coração de Gramado. Nossa degustação premium oferece vinhos selecionados e harmonizações exclusivas. Devido à alta demanda, recomendamos que você agende sua visita com antecedência para garantir um atendimento especial.
          </p>

          <div className="pt-8">
            <button
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma degustação na Adega Vista Alegre.`, '_blank')}
              className="bg-[#22C55E] hover:bg-[#1fa851] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-[0_10px_40px_rgba(34,197,94,0.2)] hover:-translate-y-1 flex items-center gap-3 mx-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.661 1.433h.05c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Garanta sua visita no WhatsApp
            </button>
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
