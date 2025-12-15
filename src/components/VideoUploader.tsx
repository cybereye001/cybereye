import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

const VideoUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [fileSize, setFileSize] = useState<{ total: number; loaded: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      toast.error("Please select a video file");
      return;
    }

    setUploading(true);
    setProgress(0);
    setFileSize({ total: file.size, loaded: 0 });

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

      // Use XMLHttpRequest for progress tracking
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setProgress(percentComplete);
          setFileSize({ total: event.total, loaded: event.loaded });
        }
      });

      await new Promise<void>((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve();
          } else {
            reject(new Error(xhr.responseText || 'Upload failed'));
          }
        };
        xhr.onerror = () => reject(new Error('Network error'));

        xhr.open('POST', `${supabaseUrl}/storage/v1/object/videos/demo.mp4`);
        xhr.setRequestHeader('Authorization', `Bearer ${supabaseKey}`);
        xhr.setRequestHeader('x-upsert', 'true');
        xhr.send(file);
      });

      setUploaded(true);
      toast.success("Video uploaded successfully! Refresh the page to see it.");
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Upload Demo Video</span>
        {uploaded && <Check className="w-4 h-4 text-green-500" />}
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleUpload}
        className="hidden"
      />
      
      {uploading && fileSize && (
        <div className="mb-3 space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatBytes(fileSize.loaded)} / {formatBytes(fileSize.total)}</span>
            <span>{progress}%</span>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="w-full"
        size="sm"
      >
        {uploading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Uploading...
          </>
        ) : uploaded ? (
          <>
            <Check className="w-4 h-4 mr-2" />
            Uploaded
          </>
        ) : (
          <>
            <Upload className="w-4 h-4 mr-2" />
            Select Video
          </>
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground mt-2">
        File will be saved as demo.mp4
      </p>
    </div>
  );
};

export default VideoUploader;
