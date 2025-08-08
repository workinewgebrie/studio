"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['All', 'clothing', 'crafts', 'accessories'];

export function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleFilter = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category.toLowerCase() === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={
            (!currentCategory && category.toLowerCase() === 'all') || currentCategory === category
              ? 'default'
              : 'outline'
          }
          className={cn(
            'capitalize rounded-full',
            ((!currentCategory && category.toLowerCase() === 'all') || currentCategory === category) && 'bg-primary text-primary-foreground'
          )}
          onClick={() => handleFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
