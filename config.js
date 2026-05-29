// Configuração centralizada para login e dashboard
// Use as URLs corretas para cada ambiente

// Configuração centralizada - Funciona em localhost e em produção (Netlify)
// Comunicação via Supabase Realtime (sem depender de API)

const CONFIG = {
  // Supabase (intermediário para comunicação)
  SUPABASE_URL: 'https://pfbgsviarvnkaadrkxfd.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_vMQXPTlWH30Bys_bgojo5A_IdyjXEdH',

  // API (apenas para localhost, em produção usa Supabase direto)
  API_URL: typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:4000'
    : null, // Em produção, não usa API - comunica via Supabase
};
