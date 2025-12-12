const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(220_20%_4%)] to-background" />
      
      {/* Subtle dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      
      {/* Dark scanning lines */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)`,
        }}
      />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Very subtle primary glow - top left */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      {/* Very subtle glow - bottom right */}
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />
      
      {/* Dark noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Animated subtle pulse points */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
};

export default BackgroundEffects;
