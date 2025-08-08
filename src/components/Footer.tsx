import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-headline text-lg mb-2">EthioGlobal</h3>
            <p className="text-muted-foreground text-sm">
              Connecting you to the heart of African craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-muted-foreground" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-muted-foreground" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-muted-foreground" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} EthioGlobal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
