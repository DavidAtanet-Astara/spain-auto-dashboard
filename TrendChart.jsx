import React from 'react'
import { useAutoData } from './hooks/useAutoData'
import { KpiGrid } from './components/KpiGrid'
import { RankingTable } from './components/RankingTable'
import { GrowthChart } from './components/GrowthChart'
import { TrendChart } from './components/TrendChart'

const card = {
  background: 'var(--surface)',
  border: '0.5px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  padding: '20px 22px',
}

const sectionLabel = {
  fontSize: '10px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text3)',
  marginBottom: '16px',
  fontWeight: 500,
}

export default function App() {
  const { metrics, monthly, loading, error } = useAutoData()

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Header */}
      <header style={{
        background: 'var(--bg2)',
        borderBottom: '0.5px solid var(--border)',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '52px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text)' }}>
            Spain Auto <span style={{ color: 'var(--accent)' }}>/ Search Intelligence</span>
          </span>
        </div>
        <span style={{ fontSize: '11px', color: 'var(--text3)', fontFamily: 'DM Mono' }}>
          jun 2023 – may 2025
        </span>
      </header>

      {/* Main */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 24px' }}>

        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text3)', padding: '80px 0', justifyContent: 'center' }}>
            <div style={{ width: '16px', height: '16px', border: '1.5px solid var(--border2)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
            Conectando con Supabase…
          </div>
        )}

        {error && (
          <div style={{ color: 'var(--red)', background: 'rgba(240,96,96,0.08)', border: '0.5px solid rgba(240,96,96,0.2)', borderRadius: 'var(--radius)', padding: '16px 20px', fontFamily: 'DM Mono', fontSize: '13px' }}>
            ⚠ {error}
          </div>
        )}

        {!loading && !error && metrics.length > 0 && (
          <>
            {/* KPIs */}
            <KpiGrid metrics={metrics} />

            {/* Two column */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div style={card}>
                <div style={sectionLabel}>Ranking por búsquedas · Abr. YTD</div>
                <RankingTable metrics={metrics} />
              </div>
              <div style={card}>
                <div style={sectionLabel}>Crecimiento 12m vs 12m anteriores</div>
                <GrowthChart metrics={metrics} />
              </div>
            </div>

            {/* Trend chart full width */}
            <div style={{ ...card, marginBottom: '14px' }}>
              <div style={sectionLabel}>Evolución mensual de búsquedas</div>
              <TrendChart monthly={monthly} metrics={metrics} />
            </div>

            {/* Footer */}
            <div style={{ fontSize: '11px', color: 'var(--text3)', textAlign: 'center', padding: '12px 0 4px', fontFamily: 'DM Mono' }}>
              Datos: Supabase · {new Date().getFullYear()} Spain Auto Search Intelligence
            </div>
          </>
        )}
      </main>
    </>
  )
}
