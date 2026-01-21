import { Category } from '../data/products';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 py-4 mb-6">
      <div className="flex overflow-x-auto gap-2 px-4 pb-2 scrollbar-hide no-scrollbar w-full max-w-5xl mx-auto items-center sm:justify-center">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 border
                ${isSelected
                  ? 'bg-green-600 border-green-500 text-white shadow-[0_0_15px_-3px_rgba(34,197,94,0.4)] translate-y-[-1px]'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-800'}
              `}
            >
              {Icon && <Icon size={14} className={isSelected ? 'text-green-100' : 'text-zinc-500'} />}
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
