import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Upload, Check, Loader2, X } from "lucide-react";
import { toast } from "sonner";

const VideoUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      toast.error("Please select a video file");
      return;
    }

    setUploading(true);
    setProgress(0);

    try {
      // Delete existing demo.mp4 if exists
      await supabase.storage.from('videos').remove(['demo.mp4']);

      // Upload new file
      const { data, error } = await supabase.storage
        .from('videos')
        .upload('demo.mp4', file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) throw error;

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
