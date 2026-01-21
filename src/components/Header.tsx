import { Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  return (
    <div className="relative w-full overflow-hidden bg-zinc-950 pb-12 pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-green-900 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Profile Image with Glow */}
        <div className="group relative mb-6">
          <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-green-500 to-emerald-600 opacity-75 blur transition duration-500 group-hover:opacity-100" />
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-zinc-900 bg-zinc-900">
            <Image
              src="/img/ezequiel_perfil.jpeg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Title/Name */}
        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
          Ezequiel Garage Store
        </h1>
        {/* <div className="flex items-center gap-1 text-zinc-400 text-sm mb-6">
          <MapPin size={14} />
          <span>Garagem & Estética Automotiva</span>
        </div> */}

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          <a
            href="https://www.instagram.com/foxbranco085/"
            className="p-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="p-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
          >
            <Youtube size={20} />
          </a>
        </div>

        {/* Featured Link */}
        {/* <div className="w-full max-w-sm">
          <a
            href="#"
            className="group relative flex items-center justify-center w-full overflow-hidden rounded-xl bg-linear-to-r from-green-600 to-emerald-600 p-px focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#a7f3d0_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-zinc-950/90 px-8 py-4 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-zinc-950/70">
              GRUPO VIP DE PROMOÇÕES
            </span>
          </a>
        </div> */}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-zinc-950 to-transparent" />
    </div>
  );
}
