"use client";

import Link from "next/link";
import { Star, StarHalf, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTopRatedProducts, getFeaturedProducts, getBestSellers } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function TopRatedSection() {
  const topRatedProducts = getTopRatedProducts();
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellers();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl font-headline font-bold text-gray-900">
              Top Rated Products
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved products, handpicked by thousands of satisfied customers
          </p>
        </div>

        {/* Top Rated Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {topRatedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    <Star className="h-3 w-3 mr-1" />
                    Top Rated
                  </Badge>
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating || 0)}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ProductCard product={product} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured & Best Sellers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Products */}
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <CardTitle className="text-2xl font-headline">Featured Products</CardTitle>
              </div>
              <CardDescription>
                Handpicked items showcasing the best of African craftsmanship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {featuredProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{product.name}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {renderStars(product.rating || 0)}
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Best Sellers */}
          <Card className="border-2 border-green-200">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-5 w-5 text-green-500" />
                <CardTitle className="text-2xl font-headline">Best Sellers</CardTitle>
              </div>
              <CardDescription>
                Our most popular products loved by customers worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bestSellers.slice(0, 3).map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{product.name}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {renderStars(product.rating || 0)}
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/#products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


