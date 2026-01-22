import { Car, Droplets, Wrench } from 'lucide-react';

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
  { id: 'limpeza', label: 'LIMPEZA', icon: Car },
  { id: 'ferramentas', label: 'FERRAMENTAS', icon: Wrench },
  {
    id: 'vonixx',
    label: 'PRODUTOS VONIXX',
    icon: Droplets,
  },
  { id: 'acessorios', label: 'ACESSÓRIOS', icon: Droplets },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Pulverizador Borrifador Alta Pressão Snow Foam 2l + Bico',
    category: 'limpeza',
    imageUrl:
      'https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m533p1c377gl42.avif', // Replace with actual images later
    affiliateLink:
      'https://s.shopee.com.br/40Zvaz9QBg?share_channel_code=1',
  },
  {
    id: '2',
    name: 'Lavadora de Alta Pressão Potente Compacta 1200W Porta Detergente Lav1300 Vonder',
    category: 'limpeza',
    imageUrl:
      'https://down-br.img.susercontent.com/file/sg-11134201-7reou-m83egtsfqg7rd7_tn.webp',
    affiliateLink:
      'https://s.shopee.com.br/4LCrzhC5Ou?share_channel_code=1',
  },
  {
    id: '3',
    name: 'Lavadora de Alta Pressão Portátil Recarregável Para Carros E Jardins Linha Premium Pistola Lava Jato',
    category: 'limpeza',
    imageUrl:
      'https://down-tx-br.img.susercontent.com/br-11134207-81z1k-meydtnv6q9dza1.avif',
    affiliateLink:
      'https://s.shopee.com.br/3qGVPJ325y?share_channel_code=1',
  },
  {
    id: '4',
    name: 'Encosto Descanso Braço Apoio Fox CrossFox SpaceFox Space Cross Preto Cinza Grafite Couro Ecológico',
    category: 'acessorios',
    imageUrl:
      'https://down-cvs-br.img.susercontent.com/2324d51219029ea50b2fca03a39100e7.avif',
    affiliateLink:
      'https://s.shopee.com.br/5VP1feJSba?share_channel_code=1',
  },
  {
    id: '5',
    name: 'Kit 05 Flanela Microfibra Automotiva 30x40 30x60 600GSM Premium Para Lavagem de Carro',
    category: 'limpeza',
    imageUrl:
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mi4k9q7nbi82c5_tn.webp',
    affiliateLink:
      'https://s.shopee.com.br/AKU58y0mgN?share_channel_code=1',
  },
  {
    id: '6',
    name: 'Multimídia Som De Carro Universal Carplay Android e IOS Tela 7 Câmera de Ré',
    category: 'ferramentas',
    imageUrl:
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m0n7yljiovq82c_tn.webp',
    affiliateLink:
      'https://s.shopee.com.br/7fTDJ6j4K7?share_channel_code=1',
  },
  {
    id: '7',
    name: 'Kit Shampoo V-Floc Cera Tok Final Sintra Fast Intense Vonixx',
    category: 'vonixx',
    imageUrl:
      'https://down-tx-br.img.susercontent.com/br-11134207-81z1k-mg9c6ja2ez9j6f.avif',
    affiliateLink:
      'https://s.shopee.com.br/AAAYwrybqa?share_channel_code=1',
  },
  {
    id: '8',
    name: 'Kit 2 Panos Mágico Microfibra Grande Preto 60x40cm Anti Risco Automotivo Lava Seco Não Solta Fiapos',
    category: 'limpeza',
    imageUrl:
      'https://down-tx-br.img.susercontent.com/sg-11134201-7rdy2-m1h00h7v9s20cc.avif',
    affiliateLink:
      'https://s.shopee.com.br/4fpiP0kAvs?share_channel_code=1',
  },
  {
    id: '9',
    name: 'Scanner Automotivo Bluetooth Obd2 Android - Entrega Imediata',
    category: 'ferramentas',
    imageUrl:
      'https://down-bs-br.img.susercontent.com/br-11134207-7r98o-m9q8epeua03mcf.avif',
    affiliateLink:
      'https://s.shopee.com.br/W0aRZ7myf?share_channel_code=1',
  },
  {
    id: '10',
    name: 'Jogo Palhetas Limpador de Parabrisa Silicone Chuva Vw Gol Fox Polo Virtus Nivus T-cros Parati',
    category: 'externa',
    imageUrl:
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7qsqzn75w76fa_tn.webp',
    affiliateLink:
      'https://s.shopee.com.br/8AQ1Zlxhm4?share_channel_code=1',
  },
  {
    id: '11',
    name: 'Kit Limpar Hidratar Couro Vonixx Higicouro + Hidracouro + Toalha Microfibra + Aplicador',
    category: 'vonixx',
    imageUrl:
      'https://down-bs-br.img.susercontent.com/br-11134207-7r98o-lrixjgylzi8df7.avif',
    affiliateLink:
      'https://s.shopee.com.br/AUnwMGWVcU?share_channel_code=1',
  },
  {
    id: '12',
    name: 'Bolsa Ferramentas, Automotivas, Organizadora, Multiuso, Carros',
    category: 'acessorios',
    imageUrl:
      'https://down-bs-br.img.susercontent.com/br-11134207-81z1k-mhqpqoay8qv593.avif',
    affiliateLink:
      'https://s.shopee.com.br/7AXUO479HD?share_channel_code=1',
  },
  {
    id: '13',
    name: '3D Liga De Alumínio Rline Emblema Volante Do Carro Adesivo Acessórios Para Volkswagen GTI Polo Golf ',
    category: 'acessorios',
    imageUrl:
      'https://down-tx-br.img.susercontent.com/sg-11134201-7rd3t-m7q01w4wfjul94.avif',
    affiliateLink:
      'https://s.shopee.com.br/2VlfvuMvau?share_channel_code=1',
  },
];
