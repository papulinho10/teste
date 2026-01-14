
import { Product } from './types';

export const WHATSAPP_NUMBER = '5554996844704';
export const INSTAGRAM_URL = 'https://www.instagram.com/adegavistaalegregramado/';
export const INSTAGRAM_HANDLE = '@adegavistaalegregramado';
export const ADDRESS = 'Av. das Hortênsias, 5485';
export const ADDRESS_SUB = 'Carniel, Gramado - RS, 95670-000';
export const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.167823564123!2d-50.8491512!3d-29.3521512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519310c85c8e31d%3A0xe5a1b3f7f8f9f0f!2sAv.%20das%20Hort%C3%AAnsias%2C%205485%20-%20Carniel%2C%20Gramado%20-%20RS%2C%2095670-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr';

// URL otimizada da logo
export const LOGO_URL = 'https://raw.githubusercontent.com/lucas-felix-dev/vista-alegre-assets/main/logo-vista-alegre-circular.png';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cabernet Sauvignon Reserva',
    description: 'Encorpado, com notas de frutas vermelhas e carvalho francês.',
    price: 149.90,
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400',
    category: 'Tinto'
  },
  {
    id: '2',
    name: 'Chardonnay Premium',
    description: 'Fresco e frutado, perfeito para acompanhar peixes e massas leves.',
    price: 119.50,
    imageUrl: 'https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?auto=format&fit=crop&q=80&w=400',
    category: 'Branco'
  },
  {
    id: '3',
    name: 'Merlot Grand Cru',
    description: 'Elegante, com taninos aveludados e final persistente.',
    price: 189.00,
    imageUrl: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400',
    category: 'Tinto'
  },
  {
    id: '4',
    name: 'Rosé de Provence Style',
    description: 'Delicado, com aromas de morango e flores silvestres.',
    price: 98.00,
    imageUrl: 'https://images.unsplash.com/photo-1558001373-7b93ee48fffb?auto=format&fit=crop&q=80&w=400',
    category: 'Rosé'
  },
  {
    id: '5',
    name: 'Espumante Brut Nature',
    description: 'Método tradicional, perlage fina e notas de panificação.',
    price: 135.00,
    imageUrl: 'https://images.unsplash.com/photo-1594498653385-d5172b532c00?auto=format&fit=crop&q=80&w=400',
    category: 'Espumante'
  },
  {
    id: '6',
    name: 'Pinot Noir Select',
    description: 'Leve e complexo, com toques de cereja e especiarias.',
    price: 155.00,
    imageUrl: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=400',
    category: 'Tinto'
  },
];
