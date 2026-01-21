export function Footer() {
  return (
    <footer className="w-full py-8 bg-zinc-950 border-t border-zinc-900 text-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">
          Ezequiel Garage Store &copy; {new Date().getFullYear()}
        </p>
        <p className="text-zinc-600 text-[10px]">
          Qualidade e Estética Automotiva
        </p>
      </div>
    </footer>
  );
}
