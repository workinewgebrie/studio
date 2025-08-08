import { CartView } from "@/components/CartView";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-headline text-center mb-4">Shopping Cart</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
        Review your items, update quantities, and proceed to checkout.
      </p>
      <Separator className="mb-8" />
      <CartView />
    </div>
  );
}
