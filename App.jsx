import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useAutoData() {
  const [metrics, setMetrics] = useState([])
  const [monthly, setMonthly] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const [{ data: m, error: me }, { data: d, error: de }] = await Promise.all([
          supabase
            .from('brand_yearly_metrics')
            .select('*, brands(name)')
            .order('apr_ytd_searches', { ascending: false }),
          supabase
            .from('brand_monthly_data')
            .select('*, brands(name)')
            .order('month'),
        ])
        if (me || de) throw me || de
        setMetrics(m.filter(x => x.brands))
        setMonthly(d.filter(x => x.brands))
      } catch (e) {
        setError(e.message || 'Error al cargar datos')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { metrics, monthly, loading, error }
}
