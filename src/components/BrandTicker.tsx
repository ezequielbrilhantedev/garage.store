export function BrandTicker() {
  const brands = [
    "VONIXX", "INTENSE", "CADILLAC", "EASYTECH", "NASCAR", "SOFT99", "3M", "MEGUIARS"
  ];

  return (
    <div className="w-full bg-zinc-950/50 border-y border-zinc-800/50 overflow-hidden py-3 mb-6">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-zinc-600 text-xs font-bold tracking-[0.2em] items-center">
          {brands.map((brand, i) => (
            <span key={i}>{brand}</span>
          ))}
          {brands.map((brand, i) => (
            <span key={`dup-${i}`}>{brand}</span>
          ))}
          {brands.map((brand, i) => (
            <span key={`dup2-${i}`}>{brand}</span>
          ))}
          {brands.map((brand, i) => (
            <span key={`dup3-${i}`}>{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
