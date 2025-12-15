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
      className={`relative rounded-xl p-[2px] overflow-hidden group ${className}`}
      onClick={onClick}
    >
      {/* Rotating gradient border */}
      <div 
        className="absolute inset-[-100%] animate-border-beam"
        style={{
          background: `conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 300deg,
            hsl(var(--primary)) 330deg,
            hsl(var(--primary-glow)) 345deg,
            hsl(var(--primary)) 360deg
          )`,
        }}
      />
      
      {/* Inner content with background */}
      <div className="relative bg-background rounded-[10px] h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorderButton;
