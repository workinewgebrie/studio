import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="aspect-square relative w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={`${product.category} product`}
            />
          </div>
        </CardHeader>
        <div className="flex flex-col flex-grow p-4">
          <CardTitle className="text-lg font-headline leading-tight mb-2 flex-grow">
            {product.name}
          </CardTitle>
          <CardContent className="p-0">
            <p className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </p>
          </CardContent>
        </div>
        <CardFooter className="p-4 pt-0 mt-auto">
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" tabIndex={-1}>
            View Details
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
