
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/database.types';

const SUPABASE_URL = "https://amruhpzfiaqskvtssfqi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtcnVocHpmaWFxc2t2dHNzZnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NDMzODQsImV4cCI6MjA1ODUxOTM4NH0.pbSMQ3QfUlqXlIA_UVnSuEWc6PIPdoT2kFMpUzl94-4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";
export const supabase = createClient<Database>(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );