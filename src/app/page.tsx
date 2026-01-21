'use client';

import { useState } from 'react';
import { CategoryFilter } from '../components/CategoryFilter';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { categories, products } from '../data/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-green-500/30">
      <main className="w-full min-h-screen flex flex-col">
        <Header />

        <div className="grow -mt-6 relative z-20">
          {/* <BrandTicker /> */}

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="max-w-5xl mx-auto w-full px-4 pb-24">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-zinc-500 gap-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <p>Nenhum produto encontrado nesta categoria.</p>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
