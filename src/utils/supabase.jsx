import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = "https://cscyurwvfnkhzbmupqum.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzY3l1cnd2Zm5raHpibXVwcXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzODI2MDAsImV4cCI6MjA1NTk1ODYwMH0.ixUbEq_05aYb4RJw970ac0SMq_IKVFEwKi9THoxzkrU";
  
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;