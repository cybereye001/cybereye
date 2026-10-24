import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, Pause, RotateCcw, RotateCw, Maximize, Minimize, X, Volume2, VolumeX } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoPlayerModal = ({ isOpen, onClose, videoUrl }: VideoPlayerModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideControlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-hide controls in fullscreen after 2 seconds
  const resetHideControlsTimer = () => {
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    setShowControls(true);
    
    if (isFullscreen && isPlaying) {
      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  // Handle tap/touch to show controls
  const handleContainerInteraction = () => {
    if (isFullscreen) {
      resetHideControlsTimer();
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);
      if (!isNowFullscreen) {
        setShowControls(true);
        if (hideControlsTimeoutRef.current) {
          clearTimeout(hideControlsTimeoutRef.current);
        }
      }
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Reset timer when play state changes
  useEffect(() => {
    if (isFullscreen) {
      resetHideControlsTimer();
    }
  }, [isPlaying, isFullscreen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seekRelative = (seconds: number) => {
    if (!videoRef.current) return;
    const newTime = Math.max(0, Math.min(currentTime + seconds, duration));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const newVolume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const orientation = screen.orientation as ScreenOrientation & { lock?: (type: string) => Promise<void>; unlock?: () => void };
    
    if (document.fullscreenElement) {
      // Exiting fullscreen
      await document.exitFullscreen();
      if (isMobile && orientation?.unlock) {
        try {
          orientation.unlock();
        } catch (e) {
          console.log('Orientation unlock not supported');
        }
      }
    } else {
      // Entering fullscreen
      await containerRef.current.requestFullscreen();
      if (isMobile && orientation?.lock) {
        try {
          await orientation.lock('landscape');
        } catch (e) {
          console.log('Orientation lock not supported');
        }
      }
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentTime(0);
    onClose();
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl w-[95vw] md:w-[95vw] p-0 bg-gradient-to-b from-[#0a0f1a] to-[#050810] border border-white/10 overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
        <VisuallyHidden>
          <DialogTitle>Video Player</DialogTitle>
        </VisuallyHidden>
        <div ref={containerRef} className={`relative w-full h-full flex flex-col ${isFullscreen ? 'bg-black' : ''}`}>
          {/* Close Button - Hidden in fullscreen */}
          {!isFullscreen && (
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-50 p-2 md:p-2.5 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
            </button>
          )}

          {/* Video Container */}
          <div 
            className={`relative w-full bg-black overflow-hidden flex items-center justify-center ${isFullscreen ? 'flex-1 h-full' : 'aspect-video'}`}
            onClick={handleContainerInteraction}
            onTouchStart={handleContainerInteraction}
          >
            <video
              ref={videoRef}
              src={videoUrl}
              className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-contain'}`}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleVideoEnd}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadStart={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
              playsInline
              preload="metadata"
              style={isFullscreen ? { maxHeight: 'calc(100vh - 80px)' } : {}}
            />
            
            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                <p className="text-white/70 text-sm md:text-base animate-pulse">Loading video, please wait...</p>
              </div>
            )}
            
            {/* Click overlay for play/pause */}
            <div 
              className="absolute inset-0 cursor-pointer z-10"
              onClick={togglePlay}
            />
            
            {/* Center play button overlay when paused */}
            {!isPlaying && !isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="p-6 rounded-full bg-primary/90 backdrop-blur-sm shadow-2xl shadow-primary/50 animate-pulse">
                  <Play className="w-12 h-12 text-primary-foreground ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Custom Controls */}
          <div className={`${isFullscreen ? 'absolute bottom-0 left-0 right-0' : ''} bg-gradient-to-b from-[#0d1424] to-[#080c14] px-3 py-2 md:px-6 md:py-4 space-y-2 md:space-y-4 border-t border-white/5 z-30 transition-all duration-300 ${isFullscreen && !showControls ? 'opacity-0 translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'}`}>
            {/* Progress Bar */}
            <div className="space-y-1">
              <div
                className="relative h-1.5 bg-white/10 rounded-full cursor-pointer group hover:h-2.5 transition-all duration-200"
                onClick={handleProgressClick}
              >
                {/* Buffer/Background */}
                <div className="absolute inset-0 bg-white/5 rounded-full" />
                {/* Progress */}
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full transition-all shadow-lg shadow-primary/30"
                  style={{ width: `${progress}%` }}
                />
                {/* Scrubber */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-lg shadow-black/50 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-125"
                  style={{ left: `calc(${progress}% - 6px)` }}
                />
              </div>
            </div>

            {/* Controls Row - Mobile: Stack, Desktop: Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              {/* Time Display - Mobile: Top, Desktop: Left */}
              <div className="flex items-center gap-2 md:gap-4 md:min-w-[180px] w-full md:w-auto justify-center md:justify-start">
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-white/90 font-mono text-xs md:text-sm tracking-wide">
                    {formatTime(currentTime)}
                  </span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/50 font-mono text-xs md:text-sm">
                    {formatTime(duration)}
                  </span>
                </div>
                
                {/* Volume Control - Hidden on mobile */}
                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-white/70" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white/70" />
                    )}
                  </button>
                  <div 
                    className="w-16 h-1 bg-white/20 rounded-full cursor-pointer group"
                    onClick={handleVolumeChange}
                  >
                    <div 
                      className="h-full bg-white/60 rounded-full transition-all"
                      style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Center Controls */}
              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={() => seekRelative(-15)}
                  className="p-2 md:p-2.5 rounded-full bg-white/5 hover:bg-white/15 transition-all duration-300 group border border-white/5 hover:border-white/20 hover:scale-110"
                >
                  <RotateCcw className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white transition-colors" />
                  <span className="sr-only">15 seconds back</span>
                </button>

                <button
                  onClick={togglePlay}
                  className="p-3 md:p-4 rounded-full bg-gradient-to-br from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-primary/40 hover:shadow-primary/60 hover:scale-110 border border-white/20"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  ) : (
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => seekRelative(15)}
                  className="p-2 md:p-2.5 rounded-full bg-white/5 hover:bg-white/15 transition-all duration-300 group border border-white/5 hover:border-white/20 hover:scale-110"
                >
                  <RotateCw className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white transition-colors" />
                  <span className="sr-only">15 seconds forward</span>
                </button>
              </div>

              {/* Right: Quality Badge & Fullscreen */}
              <div className="flex items-center gap-2 md:gap-3 md:min-w-[140px] justify-center md:justify-end">
                <span className="px-2 py-0.5 md:px-2.5 md:py-1 text-[8px] md:text-[10px] font-bold bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 rounded uppercase tracking-wider">
                  1080p HD
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 md:p-2 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-white/20 hover:scale-110"
                >
                  {isFullscreen ? (
                    <Minimize className="w-4 h-4 md:w-5 md:h-5 text-white/70 hover:text-white transition-colors" />
                  ) : (
                    <Maximize className="w-4 h-4 md:w-5 md:h-5 text-white/70 hover:text-white transition-colors" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerModal;