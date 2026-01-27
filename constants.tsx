
import { Product } from './types';

export const WHATSAPP_NUMBER = '5554996844704';
export const INSTAGRAM_URL = 'https://www.instagram.com/adegavistaalegregramado/';
export const INSTAGRAM_HANDLE = '@adegavistaalegregramado';
export const ADDRESS = 'Av. das Hortênsias, 5485';
export const ADDRESS_SUB = 'Carniel, Gramado - RS, 95670-000';
export const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.167823564123!2d-50.8491512!3d-29.3521512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519310c85c8e31d%3A0xe5a1b3f7f8f9f0f!2sAv.%20das%20Hort%C3%AAnsias%2C%205485%20-%20Carniel%2C%20Gramado%20-%20RS%2C%2095670-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr';

// ⬇️⬇️⬇️ LOGO CONFIGURADA ⬇️⬇️⬇️
export const LOGO_URL = 'https://i.postimg.cc/yd6qthqV/logo.png';

export const PRODUCTS: Product[] = [
  // --- VINHOS (PRODUÇÃO PRÓPRIA) ---
  {
    id: 'wine-col-suave',
    name: 'Vinhos Coloniais Suaves',
    description: 'O sabor da tradição da Serra Gaúcha. Vinhos de mesa suaves, doces e frutados, perfeitos para momentos descontraídos.',
    price: 60.00,
    imageUrl: 'https://i.postimg.cc/50hc7s1t/vinhos-coloniais-suave.png',
    category: 'Coloniais'
  },
  {
    id: 'wine-col-seco',
    name: 'Vinhos Coloniais Secos',
    description: 'A autenticidade da uva em sua forma mais pura. Vinhos de mesa secos, com paladar marcante e rústico.',
    price: 60.00,
    imageUrl: 'https://i.postimg.cc/BvbdJrnD/vinhos-coloniais-seco.png',
    category: 'Coloniais'
  },
  {
    id: 'wine-branco-moscato',
    name: 'Vinho Branco Moscato Giallo',
    description: 'Leveza e frescor. Um vinho aromático, ideal para harmonizar com dias de sol e pratos leves.',
    price: 150.00,
    imageUrl: 'https://i.postimg.cc/7ZYRNF7B/vinhos-branco.png',
    category: 'Vinhos Brancos'
  },
  {
    id: 'wine-branco-chardonnay',
    name: 'Vinho Branco Chardonnay',
    description: 'A rainha das uvas brancas. Notas frutadas e elegância, vinificado com excelência para paladares exigentes.',
    price: 170.00,
    imageUrl: 'https://i.postimg.cc/qqTb6S4C/vinhos-brancos-2.png',
    category: 'Vinhos Brancos'
  },
  {
    id: 'wine-reserva',
    name: 'Linha Reserva',
    description: 'Maturação equilibrada. Vinhos com passagem por carvalho, trazendo complexidade e elegância ao paladar.',
    price: 150.00,
    imageUrl: 'https://i.postimg.cc/DZKdxGH2/vinhos-reservas.png',
    category: 'Reserva'
  },
  {
    id: 'wine-grand-reserva',
    name: 'Vinhos Grand Reserva',
    description: 'A máxima expressão do nosso terroir. Vinhos de guarda, estruturados e com longo envelhecimento.',
    price: 250.00,
    imageUrl: 'https://i.postimg.cc/HLbb8xx2/vinhos-grand-reserva.png',
    category: 'Grand Reserva'
  },
  {
    id: 'wine-cuvee',
    name: 'Cuvée Blend Elegante 6 Uvas',
    description: 'Uma obra-prima da enologia. A harmonia perfeita entre 6 variedades de uvas nobres em um blend exclusivo e sofisticado.',
    price: 350.00,
    imageUrl: 'https://i.postimg.cc/4yxc0Q1q/vinhos-brand-elegante-6-uvas.png',
    category: 'Especiais'
  },

  // --- EMPÓRIO E IGUARIAS ---
  {
    id: 'queijo-artesanal',
    name: 'Queijos Artesanais',
    description: 'Queijos finos com processos de maturação especiais, resultando em sabores complexos e texturas únicas.',
    price: 85.00,
    imageUrl: 'https://i.postimg.cc/BQQ6xvYJ/quiejos-artesanal.png',
    category: 'Queijos'
  },
  {
    id: 'queijo-colonial',
    name: 'Queijos Coloniais',
    description: 'A tradição da serra em sua mesa. Queijos produzidos artesanalmente, com sabor suave e maciez incomparável.',
    price: 95.00,
    imageUrl: 'https://i.postimg.cc/QC6j6p6c/queijos-coloniais.png',
    category: 'Queijos'
  },
  {
    id: 'salame-artesanal',
    name: 'Salames Artesanais',
    description: 'Embutidos de alta qualidade, temperados com especiarias selecionadas e curados no tempo certo.',
    price: 49.90,
    imageUrl: 'https://i.postimg.cc/W4RTfpns/salames-artesanal.png',
    category: 'Embutidos'
  },
  {
    id: 'suco-integral',
    name: 'Sucos Integrais',
    description: 'O puro sumo da uva. Integral, sem adição de açúcares ou conservantes, preservando todo o sabor e saúde da fruta.',
    price: 35.00,
    imageUrl: 'https://i.postimg.cc/sDvzjG6L/sucos-integral.png',
    category: 'Sucos'
  },
  {
    id: 'geleias',
    name: 'Geleias Especiais',
    description: 'Doçura natural e pedaços de fruta. Nossas geleias são perfeitas para acompanhar pães, queijos e torradas.',
    price: 50.00,
    imageUrl: 'https://i.postimg.cc/Cx8VDTV7/catalogo-de-geleias.png',
    category: 'Geleias'
  }
];
