-- Drop existing restrictive policies and create simpler ones for the videos bucket
DROP POLICY IF EXISTS "Anyone can view videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update their videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete their videos" ON storage.objects;

-- Allow anyone to view videos (public bucket)
CREATE POLICY "Public video access"
ON storage.objects FOR SELECT
USING (bucket_id = 'videos');

-- Allow anyone to upload videos (for easier testing - you can restrict later)
CREATE POLICY "Allow video uploads"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'videos');

-- Allow anyone to update videos
CREATE POLICY "Allow video updates"
ON storage.objects FOR UPDATE
USING (bucket_id = 'videos');

-- Allow anyone to delete videos
CREATE POLICY "Allow video deletes"
ON storage.objects FOR DELETE
USING (bucket_id = 'videos');