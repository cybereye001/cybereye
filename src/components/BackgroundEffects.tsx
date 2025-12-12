const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
      
      {/* Secondary glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(200_92%_45%/0.15)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
      
      {/* Moving particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/50 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
