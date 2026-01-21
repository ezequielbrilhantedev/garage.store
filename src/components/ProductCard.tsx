import { ExternalLink, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl p-4 border border-zinc-800/50 hover:border-green-500/30 hover:bg-zinc-800/50 transition-all duration-300 flex items-center gap-5 overflow-hidden">
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

      <div className="relative w-20 h-20 shrink-0 bg-white/5 rounded-xl p-2 flex items-center justify-center border border-zinc-700/50 group-hover:border-green-500/20 transition-colors">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-1 drop-shadow-xl"
        />
      </div>

      <div className="grow flex flex-col gap-3 min-w-0">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-sm font-bold text-zinc-100 leading-tight line-clamp-2 group-hover:text-green-400 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="grow bg-zinc-100 hover:bg-green-500 hover:text-white text-zinc-900 text-xs font-bold py-2.5 px-4 rounded-lg text-center uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <ShoppingBag size={14} className="group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            Comprar
          </a>

          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all border border-zinc-700"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
