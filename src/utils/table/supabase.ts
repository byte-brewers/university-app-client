import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://ufotpegzlfronvdxuwoi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmb3RwZWd6bGZyb252ZHh1d29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4OTcwMDQsImV4cCI6MjA1MzQ3MzAwNH0.KhARkNTKloN2b1nMu_xgUEugq8Ock_4eJvgKItZwxS8',
);
