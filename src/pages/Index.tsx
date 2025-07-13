import { useState } from 'react';
import { WalmartHeader } from '@/components/WalmartHeader';
import { ProductGrid } from '@/components/ProductGrid';
import { DreamLabModal } from '@/components/DreamLabModal';
import { DreamLabBot } from '@/components/DreamLabBot';

const Index = () => {
  const [isDreamLabOpen, setIsDreamLabOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <WalmartHeader />
      
      {/* Hero Banner */}
      <div className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Save money. Live better.
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Shop millions of items with free pickup and delivery
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {[
            'Groceries', 'Electronics', 'Clothing', 'Home', 'Health', 'Sports'
          ].map((category) => (
            <div key={category} className="text-center p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-2"></div>
              <span className="text-sm font-medium">{category}</span>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <ProductGrid />
      </div>

      {/* Dream Lab Bot */}
      <DreamLabBot onClick={() => setIsDreamLabOpen(true)} />

      {/* Dream Lab Modal */}
      <DreamLabModal 
        isOpen={isDreamLabOpen} 
        onClose={() => setIsDreamLabOpen(false)} 
      />
    </div>
  );
};

export default Index;