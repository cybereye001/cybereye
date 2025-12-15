import { useState, useEffect, useRef, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, Pause, RotateCcw, RotateCw, Maximize, X, Settings, Check } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const qualityLabels: Record<string, string> = {
  highres: '4K',
  hd1080: '1080p',
  hd720: '720p',
  large: '480p',
  medium: '360p',
  small: '240p',
  tiny: '144p',
  auto: 'Auto',
};

const VideoPlayerModal = ({ isOpen, onClose, videoId }: VideoPlayerModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [availableQualities, setAvailableQualities] = useState<string[]>([]);
  const [currentQuality, setCurrentQuality] = useState<string>('auto');
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const loadYouTubeAPI = useCallback(() => {
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    if (!document.getElementById("youtube-api")) {
      const script = document.createElement("script");
      script.id = "youtube-api";
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };
  }, [videoId]);

  const initPlayer = () => {
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    playerRef.current = new window.YT.Player("youtube-player", {
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1,
        iv_load_policy: 3,
        disablekb: 1,
        origin: window.location.origin,
        vq: 'hd1080',
      },
      events: {
        onReady: (event: any) => {
          setIsReady(true);
          setDuration(event.target.getDuration());
          // Get available qualities
          const qualities = event.target.getAvailableQualityLevels();
          setAvailableQualities(qualities);
          console.log('Available qualities:', qualities);
        },
        onStateChange: (event: any) => {
          const playerState = event.data;
          setIsPlaying(playerState === window.YT.PlayerState.PLAYING);
          
          // Update available qualities when buffering starts
          if (playerState === window.YT.PlayerState.BUFFERING || playerState === window.YT.PlayerState.PLAYING) {
            const qualities = event.target.getAvailableQualityLevels();
            if (qualities.length > 0) {
              setAvailableQualities(qualities);
            }
          }
        },
        onPlaybackQualityChange: (event: any) => {
          console.log('Quality changed to:', event.data);
          setCurrentQuality(event.data);
        },
      },
    });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        loadYouTubeAPI();
      }, 100);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isOpen, loadYouTubeAPI]);

  useEffect(() => {
    if (isPlaying && playerRef.current) {
      intervalRef.current = setInterval(() => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          setCurrentTime(playerRef.current.getCurrentTime());
        }
      }, 500);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const seekRelative = (seconds: number) => {
    if (!playerRef.current) return;
    const newTime = Math.max(0, Math.min(currentTime + seconds, duration));
    playerRef.current.seekTo(newTime, true);
    setCurrentTime(newTime);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    playerRef.current.seekTo(newTime, true);
    setCurrentTime(newTime);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  const changeQuality = (quality: string) => {
    if (!playerRef.current) return;
    
    const currentTimeBeforeChange = playerRef.current.getCurrentTime();
    const wasPlaying = isPlaying;
    
    // Stop video first
    playerRef.current.stopVideo();
    
    // Set quality using multiple methods for better compatibility
    playerRef.current.setPlaybackQuality(quality);
    if (playerRef.current.setPlaybackQualityRange) {
      playerRef.current.setPlaybackQualityRange(quality, quality);
    }
    
    // Load video at specific quality and seek to previous position
    setTimeout(() => {
      playerRef.current.loadVideoById({
        videoId: videoId,
        startSeconds: currentTimeBeforeChange,
        suggestedQuality: quality,
      });
      
      // Set quality again after loading
      setTimeout(() => {
        playerRef.current.setPlaybackQuality(quality);
        if (!wasPlaying) {
          playerRef.current.pauseVideo();
        }
      }, 500);
    }, 100);
    
    setCurrentQuality(quality);
    setShowQualityMenu(false);
  };

  const handleClose = () => {
    if (playerRef.current && isPlaying) {
      playerRef.current.pauseVideo();
    }
    setIsPlaying(false);
    setCurrentTime(0);
    onClose();
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 bg-gradient-to-b from-[#0a0f1a] to-[#050810] border border-white/10 overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
        <VisuallyHidden>
          <DialogTitle>Video Player</DialogTitle>
        </VisuallyHidden>
        <div ref={containerRef} className="relative w-full">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110"
          >
            <X className="w-5 h-5 text-white/90" />
          </button>

          {/* Video Container */}
          <div className="relative w-full aspect-video bg-black overflow-hidden">
            <div id="youtube-player" className="absolute inset-0 w-full h-full pointer-events-none" />
            
            {/* Overlay to hide YouTube branding */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Click overlay for play/pause */}
            <div 
              className="absolute inset-0 cursor-pointer z-10"
              onClick={togglePlay}
            />
            
            {/* Center play button overlay when paused */}
            {!isPlaying && isReady && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="p-6 rounded-full bg-primary/90 backdrop-blur-sm shadow-2xl shadow-primary/50 animate-pulse">
                  <Play className="w-12 h-12 text-primary-foreground ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Custom Controls */}
          <div className="bg-gradient-to-b from-[#0d1424] to-[#080c14] px-6 py-4 space-y-4 border-t border-white/5">
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
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-black/50 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-125"
                  style={{ left: `calc(${progress}% - 8px)` }}
                />
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between">
              {/* Left: Time Display */}
              <div className="flex items-center gap-2 min-w-[120px]">
                <span className="text-white/90 font-mono text-sm tracking-wide">
                  {formatTime(currentTime)}
                </span>
                <span className="text-white/40">/</span>
                <span className="text-white/50 font-mono text-sm">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Center Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => seekRelative(-15)}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 transition-all duration-300 group border border-white/5 hover:border-white/20 hover:scale-110"
                  disabled={!isReady}
                >
                  <RotateCcw className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  <span className="sr-only">15 seconds back</span>
                </button>

                <button
                  onClick={togglePlay}
                  className="p-4 rounded-full bg-gradient-to-br from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-primary/40 hover:shadow-primary/60 hover:scale-110 border border-white/20"
                  disabled={!isReady}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => seekRelative(15)}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 transition-all duration-300 group border border-white/5 hover:border-white/20 hover:scale-110"
                  disabled={!isReady}
                >
                  <RotateCw className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  <span className="sr-only">15 seconds forward</span>
                </button>
              </div>

              {/* Right: Quality Selector & Fullscreen */}
              <div className="flex items-center gap-2 min-w-[140px] justify-end relative">
                {/* Quality Selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowQualityMenu(!showQualityMenu)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-white/5 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-lg"
                  >
                    <Settings className="w-4 h-4 text-white/70" />
                    <span className="text-white/90">
                      {qualityLabels[currentQuality] || currentQuality}
                    </span>
                  </button>
                  
                  {/* Quality Menu Dropdown */}
                  {showQualityMenu && (
                    <div className="absolute bottom-full right-0 mb-2 bg-[#0d1424] border border-white/10 rounded-lg shadow-xl shadow-black/50 overflow-hidden min-w-[120px] z-50">
                      {availableQualities.length > 0 ? (
                        availableQualities.map((quality) => (
                          <button
                            key={quality}
                            onClick={() => changeQuality(quality)}
                            className={`w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-white/10 transition-colors ${
                              currentQuality === quality ? 'text-primary bg-white/5' : 'text-white/80'
                            }`}
                          >
                            <span>{qualityLabels[quality] || quality}</span>
                            {currentQuality === quality && (
                              <Check className="w-4 h-4 text-primary" />
                            )}
                          </button>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-sm text-white/50">Loading...</div>
                      )}
                    </div>
                  )}
                </div>
                
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-white/20 hover:scale-110"
                >
                  <Maximize className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
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
