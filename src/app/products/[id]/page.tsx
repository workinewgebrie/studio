import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AddToCart } from '@/components/AddToCart';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            data-ai-hint={`${product.category} product`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Badge variant="secondary" className="w-fit capitalize">{product.category}</Badge>
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl">{product.name}</h1>
          <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <Separator />
          <div>
            <h2 className="text-xl font-bold font-headline mb-2">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
          <Separator />
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
