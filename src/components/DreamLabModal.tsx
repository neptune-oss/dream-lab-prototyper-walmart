import { useState } from 'react';
import { X, Send, Sparkles, ThumbsUp, ThumbsDown, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DreamProduct } from '@/components/DreamProduct';

interface DreamLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const trendingIdeas = [
  {
    name: "Zesty Lentil Chips",
    description: "Crunchy lentil chips with lime and chili seasoning",
    image: "https://images.unsplash.com/photo-1541684473973-130513ae4532?w=400&h=400&fit=crop",
    votes: 234,
    price: 3.99
  },
  {
    name: "Protein Cotton Candy",
    description: "High-protein cotton candy with 15g protein per serving",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=400&fit=crop",
    votes: 189,
    price: 4.49
  },
  {
    name: "Taco-Flavored Ice Cream",
    description: "Savory ice cream with taco spice blend and lime",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
    votes: 156,
    price: 5.99
  }
];

export const DreamLabModal = ({ isOpen, onClose }: DreamLabModalProps) => {
  const [dreamInput, setDreamInput] = useState('');
  const [generatedProduct, setGeneratedProduct] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dreamInput.trim()) return;

    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockProduct = {
        name: generateProductName(dreamInput),
        description: `AI-crafted ${dreamInput.toLowerCase()} with premium ingredients`,
        image: "https://images.unsplash.com/photo-1599599810694-57a2ca8276a8?w=400&h=400&fit=crop",
        estimatedPrice: Math.floor(Math.random() * 10) + 2.99,
        marketTrend: "📈 High demand expected",
        healthScore: Math.floor(Math.random() * 30) + 70
      };
      setGeneratedProduct(mockProduct);
      setIsGenerating(false);
    }, 3000);
  };

  const generateProductName = (input: string) => {
    const adjectives = ['Crunchy', 'Zesty', 'Premium', 'Artisan', 'Bold', 'Fusion'];
    const suffix = ['Bites', 'Snacks', 'Delights', 'Treats', 'Chips', 'Bars'];
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const suf = suffix[Math.floor(Math.random() * suffix.length)];
    return `${adj} ${input} ${suf}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-dream-lab-bg bg-opacity-95 backdrop-blur-sm">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="bg-dream-lab-bg border-b border-white/10 p-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-dream-lab-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Dream Lab</h1>
                <p className="text-white/70 text-sm">You dream it. We prototype it. Walmart powers it.</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-2 gap-8">
            {/* Left Column - Input & Generation */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">Create Your Dream Snack</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Textarea
                    placeholder="Describe your dream snack... (e.g., 'a vegan protein cookie with chocolate chips' or 'spicy mango gummies with zero sugar')"
                    value={dreamInput}
                    onChange={(e) => setDreamInput(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-24"
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={!dreamInput.trim() || isGenerating}
                    className="w-full bg-dream-lab-accent hover:bg-dream-lab-accent/90 text-white"
                  >
                    {isGenerating ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating your dream...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Dream It Into Reality
                      </div>
                    )}
                  </Button>
                </form>
              </div>

              {/* Generated Product */}
              {generatedProduct && (
                <DreamProduct product={generatedProduct} />
              )}
            </div>

            {/* Right Column - Trending Ideas */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-bold text-white">Trending Ideas</h2>
                </div>
                
                <div className="space-y-4">
                  {trendingIdeas.map((idea, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex gap-3">
                        <img 
                          src={idea.image} 
                          alt={idea.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-sm">{idea.name}</h3>
                          <p className="text-white/70 text-xs mb-2">{idea.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-walmart-yellow font-bold text-sm">${idea.price}</span>
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="ghost" className="h-6 px-2 text-white hover:bg-white/10">
                                <ThumbsUp className="w-3 h-3" />
                              </Button>
                              <span className="text-white/70 text-xs">{idea.votes}</span>
                              <Button size="sm" variant="ghost" className="h-6 px-2 text-white hover:bg-white/10">
                                <ThumbsDown className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Examples */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-3">Quick Ideas</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "High-protein candy",
                    "Zero-sugar gummies",
                    "Vegan jerky",
                    "Spicy chocolate",
                    "Matcha chips",
                    "Pickle ice cream"
                  ].map((idea) => (
                    <button
                      key={idea}
                      onClick={() => setDreamInput(idea)}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-white text-xs transition-colors"
                    >
                      {idea}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};