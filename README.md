# EthioGlobal - Authentic African-made Products

A culturally inspired e-commerce web application that focuses on African-made products. Built with Next.js 15, TypeScript, and modern web technologies, EthioGlobal showcases handcrafted goods from across the African continent.

## 🌍 About

EthioGlobal is an e-commerce platform dedicated to promoting authentic African craftsmanship. The platform features a curated selection of handcrafted products including clothing, accessories, and traditional crafts from various African countries.

### Key Features

- **Product Catalog**: Browse handcrafted African products with detailed descriptions
- **Category Filtering**: Filter products by clothing, crafts, or accessories
- **Shopping Cart**: Add items to cart with quantity management and local storage persistence
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Language Support**: Toggle between English and Amharic languages
- **Modern UI**: Clean, geometric design inspired by traditional African patterns

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: React Context for cart management
- **AI Integration**: Genkit for AI-powered features
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:9002`

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit AI development server
- `npm run genkit:watch` - Start Genkit with file watching

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── cart/              # Shopping cart page
│   ├── products/[id]/     # Individual product pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── AddToCart.tsx     # Add to cart functionality
│   ├── CartView.tsx      # Cart display component
│   ├── CategoryFilter.tsx # Product filtering
│   ├── Footer.tsx        # Site footer
│   ├── LanguageToggle.tsx # Language switcher
│   ├── Navbar.tsx        # Navigation bar
│   └── ProductCard.tsx   # Product display card
├── hooks/                # Custom React hooks
│   ├── useCart.ts        # Cart management hook
│   ├── use-mobile.tsx    # Mobile detection hook
│   └── use-toast.ts      # Toast notifications
├── lib/                  # Utility libraries
│   ├── products.ts       # Product data
│   └── utils.ts          # Utility functions
├── providers/            # React context providers
│   └── CartProvider.tsx  # Cart state provider
├── types/                # TypeScript type definitions
│   └── index.ts          # Product and cart types
└── ai/                   # AI integration
    ├── dev.ts            # Genkit development setup
    └── genkit.ts         # Genkit configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep terracotta (#A34924) - Warmth and earthiness of African landscapes
- **Background**: Light beige (#F5F5DC) - Clean, unobtrusive backdrop
- **Accent**: Saffron (#F4C430) - Attention-grabbing call-to-action elements

### Typography
- **Headlines**: Belleza - Humanist sans-serif for fashion and design
- **Body**: Alegreya - Humanist serif for readable body text

### Design Principles
- Clean, geometric layouts inspired by traditional African patterns
- Focus on product showcase and user experience
- Mobile-first responsive design
- Cultural authenticity in visual elements

## 🛍️ Features

### Product Management
- Curated selection of authentic African products
- Detailed product descriptions with cultural context
- High-quality product images
- Category-based organization

### Shopping Experience
- Intuitive product browsing
- Category filtering system
- Shopping cart with quantity management
- Persistent cart state using localStorage

### User Interface
- Responsive design for all devices
- Smooth animations and transitions
- Accessible navigation
- Toast notifications for user feedback

## 🌐 Internationalization

The platform supports multiple languages:
- English (default)
- Amharic (Ethiopian language)

Language switching is available through the navbar toggle.

## 🤖 AI Integration

The project includes Genkit AI integration for enhanced features:
- AI-powered product recommendations
- Smart search functionality
- Automated content generation

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1440px+)

## 🔧 Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks

### Performance
- Next.js 15 with App Router
- Turbopack for fast development builds
- Optimized images with Next.js Image component
- Efficient state management

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

**EthioGlobal** - Discover the Heart of Africa, One Artisan at a Time.
