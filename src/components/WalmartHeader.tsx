import { Search, ShoppingCart, MapPin, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const WalmartHeader = () => {
  return (
    <header className="bg-background border-b">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>Free shipping, arrives in 3+ days</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Hi, Guest</span>
            <span>My Account</span>
            <span>Lists</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-walmart-yellow rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-walmart-blue rounded-full"></div>
            </div>
            <span className="text-2xl font-bold text-walmart-blue">Walmart</span>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            <div>
              <div className="text-xs text-muted-foreground">Deliver to</div>
              <div className="font-medium">Sacramento, 95829</div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input 
                placeholder="Search everything at Walmart online and in store" 
                className="pr-12"
              />
              <Button size="sm" className="absolute right-1 top-1 h-8 px-3 bg-walmart-yellow text-walmart-blue hover:bg-walmart-yellow/90">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex flex-col items-center gap-1 h-auto py-2">
              <User className="w-5 h-5" />
              <span className="text-xs">Sign In</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-auto py-2">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-walmart-yellow text-walmart-blue text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  0
                </span>
              </div>
              <span className="text-xs">$0.00</span>
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 mt-4 text-sm">
          <span className="font-medium hover:text-primary cursor-pointer">Departments</span>
          <span className="hover:text-primary cursor-pointer">Services</span>
          <span className="hover:text-primary cursor-pointer">Grocery & Essentials</span>
          <span className="hover:text-primary cursor-pointer">Electronics</span>
          <span className="hover:text-primary cursor-pointer">Home</span>
          <span className="hover:text-primary cursor-pointer">Fashion</span>
          <span className="hover:text-primary cursor-pointer">Auto</span>
          <span className="hover:text-primary cursor-pointer">Pharmacy</span>
        </nav>
      </div>
    </header>
  );
};