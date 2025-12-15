import { useState, useEffect, useRef, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Pause, RotateCcw, RotateCw, Maximize, X } from "lucide-react";

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

const VideoPlayerModal = ({ isOpen, onClose, videoId }: VideoPlayerModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
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
      },
      events: {
        onReady: (event: any) => {
          setIsReady(true);
          setDuration(event.target.getDuration());
        },
        onStateChange: (event: any) => {
          setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
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
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-[#0a1628] border-primary/20 overflow-hidden">
        <div ref={containerRef} className="relative w-full">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Video Container */}
          <div className="relative w-full aspect-video bg-black">
            <div id="youtube-player" className="absolute inset-0 w-full h-full" />
            
            {/* Click overlay for play/pause */}
            <div 
              className="absolute inset-0 cursor-pointer z-10"
              onClick={togglePlay}
            />
          </div>

          {/* Custom Controls */}
          <div className="bg-[#0d1e36] px-4 py-3 space-y-3">
            {/* Center Controls */}
            <div className="flex items-center justify-center gap-8">
              <button
                onClick={() => seekRelative(-15)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
                disabled={!isReady}
              >
                <RotateCcw className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                <span className="sr-only">15 seconds back</span>
              </button>

              <button
                onClick={togglePlay}
                className="p-4 rounded-full bg-primary hover:bg-primary/80 transition-colors shadow-lg shadow-primary/30"
                disabled={!isReady}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-primary-foreground" />
                ) : (
                  <Play className="w-7 h-7 text-primary-foreground ml-1" />
                )}
              </button>

              <button
                onClick={() => seekRelative(15)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
                disabled={!isReady}
              >
                <RotateCw className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                <span className="sr-only">15 seconds forward</span>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div
                className="relative h-2 bg-white/20 rounded-full cursor-pointer group"
                onClick={handleProgressClick}
              >
                <div
                  className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: `calc(${progress}% - 8px)` }}
                />
              </div>

              {/* Time Display & Fullscreen */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80 font-mono">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Maximize className="w-5 h-5 text-white/80 hover:text-white" />
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
