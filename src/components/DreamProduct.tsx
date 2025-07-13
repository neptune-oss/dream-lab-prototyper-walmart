import { useState } from 'react';
import { ThumbsUp, ThumbsDown, TrendingUp, Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DreamProductProps {
  product: {
    name: string;
    description: string;
    image: string;
    estimatedPrice: number;
    marketTrend: string;
    healthScore: number;
  };
}

export const DreamProduct = ({ product }: DreamProductProps) => {
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [votes, setVotes] = useState({ up: Math.floor(Math.random() * 100) + 50, down: Math.floor(Math.random() * 20) + 5 });

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      setUserVote(null);
      setVotes(prev => ({ ...prev, [type]: prev[type] - 1 }));
    } else {
      if (userVote) {
        setVotes(prev => ({ ...prev, [userVote]: prev[userVote] - 1 }));
      }
      setUserVote(type);
      setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <h3 className="text-lg font-bold text-white mb-4">Your Dream Product</h3>
      
      <div className="bg-white rounded-xl p-6 shadow-xl">
        {/* Product Card - Walmart Style */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">{product.name}</h4>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">
                ${product.estimatedPrice.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground">Estimated price</span>
            </div>

            {/* Market Analysis */}
            <div className="bg-secondary rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-medium">{product.marketTrend}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Health Score</span>
                  <span className="font-medium">{product.healthScore}/100</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000" 
                    style={{ width: `${product.healthScore}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                Add to Wishlist
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Voting Section */}
        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center justify-between">
            <span className="font-medium text-foreground">Would you buy this?</span>
            <div className="flex items-center gap-4">
              <Button
                variant={userVote === 'up' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleVote('up')}
                className={userVote === 'up' ? 'bg-green-500 hover:bg-green-600' : ''}
              >
                <ThumbsUp className="w-4 h-4 mr-1" />
                {votes.up}
              </Button>
              <Button
                variant={userVote === 'down' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleVote('down')}
                className={userVote === 'down' ? 'bg-red-500 hover:bg-red-600' : ''}
              >
                <ThumbsDown className="w-4 h-4 mr-1" />
                {votes.down}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};