import type { Product } from '@/types';

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Kente Cloth Scarf",
    price: 45.99,
    description: "Handwoven Kente cloth scarf with traditional Ghanaian patterns. Made from premium cotton with vibrant colors and intricate designs.",
    image: "https://pngimg.com/image/56161",
    category: "clothing",
    currency: "USD",
    rating: 4.8,
    reviews: 127,
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Beaded Maasai Necklace",
    price: 32.50,
    description: "Authentic Maasai beaded necklace crafted by Kenyan artisans. Features traditional beadwork patterns in red, blue, and white.",
    image: "https://pngimg.com/image/56161",
    category: "accessories",
    currency: "USD",
    rating: 4.9,
    reviews: 89,
    featured: true,
    bestSeller: true
  },
  {
    id: 3,
    name: "Ethiopian Coffee Set",
    price: 78.00,
    description: "Traditional Ethiopian coffee ceremony set including handcrafted clay cups, jebena (coffee pot), and serving tray.",
    category: "crafts",
    image: "https://placehold.co/600x600.png",
    currency: "USD",
    rating: 4.7,
    reviews: 156,
    featured: true,
    bestSeller: false
  },
  {
    id: 4,
    name: "Ankara Print Dress",
    price: 65.00,
    description: "Beautiful Ankara print dress with modern cut and traditional African patterns. Perfect for special occasions and everyday wear.",
    image: "https://i.pinimg.com/736x/59/90/25/5990250f12fbcb2a2f114e4aabcd205d.jpg",
    category: "clothing",
    currency: "USD",
    rating: 4.6,
    reviews: 203,
    featured: false,
    bestSeller: true
  },
  {
    id: 5,
    name: "Moroccan Leather Bag",
    price: 120.00,
    description: "Handcrafted Moroccan leather bag with intricate embossing and traditional tanning methods. Features adjustable strap and multiple compartments.",
    category: "accessories",
    image: "https://placehold.co/600x600.png",
    currency: "USD",
    rating: 4.5,
    reviews: 67,
    featured: false,
    bestSeller: false
  },
  {
    id: 6,
    name: "Nigerian Adire Fabric",
    price: 28.99,
    description: "Authentic Nigerian Adire fabric with traditional indigo dyeing techniques. Perfect for clothing, home decor, or crafting projects.",
    category: "crafts",
    image: "https://placehold.co/600x600.png",
    currency: "USD",
    rating: 4.4,
    reviews: 94,
    featured: false,
    bestSeller: false
  },
  {
    id: 7,
    name: "Mudcloth Throw Blanket",
    price: 85.00,
    description: "Handwoven mudcloth throw blanket from Mali. Features traditional Bogolanfini patterns and natural dyes. Perfect for home decor.",
    image: "https://i.pinimg.com/736x/59/90/25/5990250f12fbcb2a2f114e4aabcd205d.jpg",
    category: "crafts",
    currency: "USD",
    rating: 4.8,
    reviews: 178,
    featured: true,
    bestSeller: true
  },
  {
    id: 8,
    name: "Kenyan Soapstone Carving",
    price: 45.00,
    description: "Hand-carved Kenyan soapstone figurine depicting traditional African wildlife. Each piece is unique and sustainably sourced.",
    category: "crafts",
    image: "https://placehold.co/600x600.png",
    currency: "USD",
    rating: 4.3,
    reviews: 45,
    featured: false,
    bestSeller: false
  }
];

export const getTopRatedProducts = () => {
  return allProducts
    .filter(product => product.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
};

export const getFeaturedProducts = () => {
  return allProducts
    .filter(product => product.featured)
    .sort((a, b) => b.rating - a.rating);
};

export const getBestSellers = () => {
  return allProducts
    .filter(product => product.bestSeller)
    .sort((a, b) => b.reviews - a.reviews);
};
