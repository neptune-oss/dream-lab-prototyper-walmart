import { ProductCard } from '@/components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Great Value Organic Extra Virgin Olive Oil",
    price: 4.98,
    originalPrice: 6.98,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 234
  },
  {
    id: 2,
    name: "Samsung 55\" Crystal UHD 4K Smart TV",
    price: 397.00,
    originalPrice: 497.00,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 1205
  },
  {
    id: 3,
    name: "Athletic Works Women's Active Leggings",
    price: 7.98,
    image: "https://images.unsplash.com/photo-1506629905687-22b3b622b9e3?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 567
  },
  {
    id: 4,
    name: "Mainstays 3-Piece Bistro Set",
    price: 79.00,
    originalPrice: 99.00,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    rating: 4.0,
    reviews: 89
  },
  {
    id: 5,
    name: "Equate Ibuprofen Pain Reliever, 200mg",
    price: 3.47,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 2341
  },
  {
    id: 6,
    name: "Spalding NBA Official Basketball",
    price: 29.97,
    originalPrice: 39.97,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 445
  }
];

export const ProductGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};