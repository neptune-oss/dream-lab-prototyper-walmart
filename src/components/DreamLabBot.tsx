import { Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DreamLabBotProps {
  onClick: () => void;
}

export const DreamLabBot = ({ onClick }: DreamLabBotProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onClick}
        size="lg"
        className="w-16 h-16 rounded-full bg-dream-lab-accent hover:bg-dream-lab-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <div className="relative">
          <Bot className="w-8 h-8" />
          <Sparkles className="w-4 h-4 absolute -top-1 -right-1 animate-pulse" />
        </div>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
        <div className="bg-dream-lab-bg text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
          <div className="font-bold">Dream Lab</div>
          <div className="text-xs opacity-90">You dream it. We prototype it.</div>
        </div>
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dream-lab-bg"></div>
      </div>
    </div>
  );
};