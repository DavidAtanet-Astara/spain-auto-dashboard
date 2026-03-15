# Spain Auto — Search Intelligence

Dashboard de búsquedas por marca de automoción en España (jun 2023 – may 2025).

## Stack

- **React + Vite** — frontend
- **Supabase** — base de datos + API REST
- **Chart.js / react-chartjs-2** — gráficos
- **Vercel** — hosting

## Desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env
# Edita .env con tu URL y anon key de Supabase

# 3. Arrancar
npm run dev
```

## Deploy en Vercel

1. Sube este repositorio a GitHub
2. Importa el repo en [vercel.com](https://vercel.com)
3. En **Settings → Environment Variables** añade:
   - `VITE_SUPABASE_URL` → tu URL de Supabase
   - `VITE_SUPABASE_ANON_KEY` → tu anon key
4. Despliega — Vercel detecta Vite automáticamente

## Variables de entorno

| Variable | Descripción |
|---|---|
| `VITE_SUPABASE_URL` | URL del proyecto Supabase |
| `VITE_SUPABASE_ANON_KEY` | Clave pública anon (solo lectura) |
