import {
  Car,
  Droplets,
  Home,
  Lightbulb,
  Wrench,
} from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  affiliateLink: string;
}

export interface Category {
  id: string;
  label: string;
  icon?: any;
}

export const categories: Category[] = [
  { id: 'all', label: 'TODOS' },
  { id: 'externa', label: 'EXTERNA', icon: Car },
  { id: 'ferramentas', label: 'FERRAMENTAS', icon: Wrench },
  {
    id: 'iluminacao',
    label: 'ILUMINAÇÃO',
    icon: Lightbulb,
  },
  { id: 'interna', label: 'INTERNA', icon: Home },
  { id: 'vonixx', label: 'VONIXX', icon: Droplets },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Pulverizador Borrifador Alta Pressão Snow Foam 2l + Bico',
    category: 'externa',
    imageUrl:
      'https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m533p1c377gl42.avif', // Replace with actual images later
    affiliateLink:
      'https://s.shopee.com.br/40Zvaz9QBg?share_channel_code=1',
  },
  {
    id: '2',
    name: 'CORDA TAMPA COMBUSTÍVEL',
    category: 'externa',
    imageUrl: 'https://via.placeholder.com/150',
    affiliateLink: '#',
  },
  {
    id: '3',
    name: 'METAL POLISH VONIXX',
    category: 'vonixx',
    imageUrl: 'https://via.placeholder.com/150',
    affiliateLink: '#',
  },
  {
    id: '4',
    name: 'VÁLVULA BYPASS VONIXX',
    category: 'vonixx',
    imageUrl: 'https://via.placeholder.com/150',
    affiliateLink: '#',
  },
  {
    id: '5',
    name: 'KIT DE TRAVA PARA TAPETE',
    category: 'interna',
    imageUrl: 'https://via.placeholder.com/150',
    affiliateLink: '#',
  },
  {
    id: '6',
    name: 'ALICATE DE DECAPAGEM DE FIOS',
    category: 'ferramentas',
    imageUrl: 'https://via.placeholder.com/150',
    affiliateLink: '#',
  },
  {
    id: '7',
    name: 'LED QUEBRA SOL',
    category: 'iluminacao',
    imageUrl: 'https://via.placeholder.com/150',
    affiliateLink: '#',
  },
  {
    id: '8',
    name: 'ILUMINAÇÃO ZONA PÉ',
    category: 'iluminacao',
    imageUrl: 'https://via.placeholder.com/150',
    affiliateLink: '#',
  },
  {
    id: '9',
    name: 'EMBLEMA TRASEIRO NOVO VOLKSWAGEN',
    category: 'externa',
    imageUrl: 'https://via.placeholder.com/150',
    affiliateLink: '#',
  },
];
