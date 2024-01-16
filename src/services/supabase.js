import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kgxhpnpvykxafgmrchpc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGhwbnB2eWt4YWZnbXJjaHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMjAwODEsImV4cCI6MjAxOTY5NjA4MX0.fz2AwYgYcXsud9LpPSf3kT51Owx9PmY9a1Txf8ZO6tc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
