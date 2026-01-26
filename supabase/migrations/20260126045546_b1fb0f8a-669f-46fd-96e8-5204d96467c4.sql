-- Create job_applications table
CREATE TABLE public.job_applications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    phone text,
    position text NOT NULL,
    department text NOT NULL,
    resume_url text,
    message text,
    status text DEFAULT 'pending' NOT NULL
);

-- Enable RLS
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Anyone can submit job application
CREATE POLICY "Anyone can submit job application" 
ON public.job_applications FOR INSERT 
WITH CHECK (true);

-- Admins can view job applications
CREATE POLICY "Admins can view job applications" 
ON public.job_applications FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Admins can update job applications
CREATE POLICY "Admins can update job applications" 
ON public.job_applications FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

-- Create resumes storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', false);

-- Anyone can upload resumes
CREATE POLICY "Anyone can upload resumes"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'resumes');

-- Admins can view resumes
CREATE POLICY "Admins can view resumes"
ON storage.objects FOR SELECT
USING (bucket_id = 'resumes' AND public.has_role(auth.uid(), 'admin'));