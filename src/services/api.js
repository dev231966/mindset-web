const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function apiRequest(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Erro na API: ${res.status}`)
  return res.json()
}
