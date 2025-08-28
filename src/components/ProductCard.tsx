import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, StarHalf } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-3 w-3 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-3 w-3 text-gray-300" />);
    }

    return stars;
  };

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
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
              {product.rating && (
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>
              )}
            </div>
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
