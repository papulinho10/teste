
import { Product } from './types';

export const WHATSAPP_NUMBER = '5554996844704';
export const INSTAGRAM_URL = 'https://www.instagram.com/adegavistaalegregramado/';
export const INSTAGRAM_HANDLE = '@adegavistaalegregramado';
export const ADDRESS = 'Av. das Hortênsias, 5485';
export const ADDRESS_SUB = 'Carniel, Gramado - RS, 95670-000';
export const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.167823564123!2d-50.8491512!3d-29.3521512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519310c85c8e31d%3A0xe5a1b3f7f8f9f0f!2sAv.%20das%20Hort%C3%AAnsias%2C%205485%20-%20Carniel%2C%20Gramado%20-%20RS%2C%2095670-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr';

// ⬇️⬇️⬇️ LOGO CONFIGURADA ⬇️⬇️⬇️
// A logo agora usa um caminho direto para evitar erros de importação.
// Certifique-se de que o arquivo "logo.png" existe na pasta "images".
export const LOGO_URL = './images/logo.png';

export const PRODUCTS: Product[] = [
  // --- VINHOS ---
  {
    id: '1',
    name: 'Cabernet Sauvignon Reserva',
    description: 'Encorpado, com notas de frutas vermelhas e carvalho francês.',
    price: 149.90,
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400',
    category: 'Vinhos'
  },
  {
    id: '2',
    name: 'Chardonnay Premium',
    description: 'Fresco e frutado, perfeito para acompanhar peixes e massas leves.',
    price: 119.50,
    imageUrl: 'https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?auto=format&fit=crop&q=80&w=400',
    category: 'Vinhos'
  },
  {
    id: '3',
    name: 'Merlot Grand Cru',
    description: 'Elegante, com taninos aveludados e final persistente.',
    price: 189.00,
    imageUrl: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400',
    category: 'Vinhos'
  },
  {
    id: '4',
    name: 'Rosé de Provence Style',
    description: 'Delicado, com aromas de morango e flores silvestres.',
    price: 98.00,
    imageUrl: 'https://images.unsplash.com/photo-1558001373-7b93ee48fffb?auto=format&fit=crop&q=80&w=400',
    category: 'Vinhos'
  },
  {
    id: '5',
    name: 'Espumante Brut Nature',
    description: 'Método tradicional, perlage fina e notas de panificação.',
    price: 135.00,
    imageUrl: 'https://images.unsplash.com/photo-1594498653385-d5172b532c00?auto=format&fit=crop&q=80&w=400',
    category: 'Espumantes'
  },
  {
    id: '6',
    name: 'Pinot Noir Select',
    description: 'Leve e complexo, com toques de cereja e especiarias.',
    price: 155.00,
    imageUrl: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=400',
    category: 'Vinhos'
  },

  // --- QUEIJOS ---
  {
    id: '7',
    name: 'Queijo Colonial Serrano',
    description: 'Produção artesanal da Serra Gaúcha, textura macia e sabor suave.',
    price: 45.90,
    imageUrl: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400',
    category: 'Queijos'
  },
  {
    id: '8',
    name: 'Parmesão Capa Preta 12 Meses',
    description: 'Maturado por 12 meses, sabor intenso e cristais de tirosina.',
    price: 89.00,
    imageUrl: 'https://images.unsplash.com/photo-1634487359989-3e98679d20c5?auto=format&fit=crop&q=80&w=400',
    category: 'Queijos'
  },

  // --- EMBUTIDOS ---
  {
    id: '9',
    name: 'Salame Artesanal Italiano',
    description: 'Receita tradicional de família, curado naturalmente.',
    price: 38.00,
    imageUrl: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=400',
    category: 'Embutidos'
  },
  {
    id: '10',
    name: 'Copa Lombo Maturada',
    description: 'Sabor marcante e textura delicada, ideal para tábuas de frios.',
    price: 65.00,
    imageUrl: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=400',
    category: 'Embutidos'
  },

  // --- GELEIAS ---
  {
    id: '11',
    name: 'Geleia de Frutas Vermelhas',
    description: 'Feita com frutas orgânicas selecionadas, sem conservantes.',
    price: 28.50,
    imageUrl: 'https://images.unsplash.com/photo-1571506538622-d3cf4eec01ae?auto=format&fit=crop&q=80&w=400',
    category: 'Geleias'
  },
  {
    id: '12',
    name: 'Geleia de Pimenta Defumada',
    description: 'Agridoce com toque picante, perfeita para acompanhar queijos e carnes.',
    price: 32.00,
    imageUrl: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=400',
    category: 'Geleias'
  },

  // --- CACHAÇAS ---
  {
    id: '13',
    name: 'Cachaça Extra Premium Carvalho',
    description: 'Envelhecida 5 anos em barris de carvalho, notas de baunilha.',
    price: 180.00,
    imageUrl: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&q=80&w=400',
    category: 'Cachaças'
  },
  {
    id: '14',
    name: 'Cachaça Prata da Serra',
    description: 'Pura e cristalina, ideal para caipirinhas gourmet.',
    price: 60.00,
    imageUrl: 'https://images.unsplash.com/photo-1566922572579-24285b7b9896?auto=format&fit=crop&q=80&w=400',
    category: 'Cachaças'
  },

  // --- FACAS ---
  {
    id: '15',
    name: 'Faca Artesanal Damasco 8"',
    description: 'Aço damasco 67 camadas, cabo em madeira nobre e bainha de couro.',
    price: 890.00,
    imageUrl: 'https://images.unsplash.com/photo-1593163351633-c2156eb14995?auto=format&fit=crop&q=80&w=400',
    category: 'Facas Especiais'
  },
  {
    id: '16',
    name: 'Conjunto Churrasco Gaúcho',
    description: 'Faca 10" e garfo trinchante, aço cirúrgico, acabamento premium.',
    price: 450.00,
    imageUrl: 'https://images.unsplash.com/photo-1588267202359-7d0446e5ca45?auto=format&fit=crop&q=80&w=400',
    category: 'Facas Especiais'
  }
];
