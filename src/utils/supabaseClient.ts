import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://phdvipljzsneycfucxqy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZHZpcGxqenNuZXljZnVjeHF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MzYxNTAsImV4cCI6MjA1OTIxMjE1MH0.qynSP1bZJGLFOum4orGUqyCA8S3M4GpT-r-tNLGZMGA';
export const supabase = createClient(supabaseUrl, supabaseKey);