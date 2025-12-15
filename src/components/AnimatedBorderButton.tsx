import React from 'react';

interface AnimatedBorderButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AnimatedBorderButton: React.FC<AnimatedBorderButtonProps> = ({ 
  children, 
  className = '',
  onClick 
}) => {
  return (
    <div 
      className={`relative rounded-xl cursor-pointer ${className}`}
      onClick={onClick}
      style={{ padding: '2px' }}
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 rounded-xl"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            transparent 25%, 
            hsl(var(--primary)) 50%, 
            transparent 75%, 
            transparent 100%
          )`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s linear infinite',
        }}
      />
      
      {/* Static subtle border */}
      <div className="absolute inset-0 rounded-xl border border-primary/20" />
      
      {/* Inner content */}
      <div className="relative bg-background rounded-[10px]">
        {children}
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBorderButton;
