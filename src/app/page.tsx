import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { products as allProducts } from '@/lib/products';
import type { Product } from '@/types';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ProductCard } from '@/components/ProductCard';

export default function Home({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const { category } = searchParams;

  const filteredProducts = category
    ? allProducts.filter((p) => p.category === category)
    : allProducts;

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-background flex items-center justify-center text-center p-4">
        <div className="absolute inset-0 bg-primary/20 z-0">
          <Image
            src="https://placehold.co/1800x800.png"
            alt="African market scene"
            fill
            className="object-cover opacity-30"
            priority
            data-ai-hint="african market"
          />
        </div>
        <div className="relative z-10 text-primary-foreground max-w-3xl bg-black/50 p-8 rounded-lg">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-4 text-white">
            EthioGlobal
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 font-body">
            Discover the Heart of Africa, One Artisan at a Time.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section id="products" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-4">Our Collection</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore our curated selection of authentic, handcrafted goods from across the African continent.
          </p>
          
          <CategoryFilter />
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
              {filteredProducts.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
             <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No products found in this category.</p>
                <Button asChild variant="link" className="mt-4">
                    <Link href="/">View All Products</Link>
                </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
