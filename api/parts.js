const API_URL = 'http://api.favorit-parts.ru/hs/hsprice/'
const ALLOWED_PARAMS = ['number', 'brand', 'analogues']
const UPSTREAM_TIMEOUT = 25000

export default async function handler(req, res) {
  const url = new URL(API_URL)
  for (const name of ALLOWED_PARAMS) {
    const value = req.query[name]
    if (typeof value === 'string' && value) url.searchParams.set(name, value)
  }
  url.searchParams.set('key', process.env.FAVORIT_API_KEY ?? '')

  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(UPSTREAM_TIMEOUT) })
    const body = await response.text()
    res.status(response.status)
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Cache-Control', 'no-store')
    res.send(body)
  } catch (error) {
    res.status(error.name === 'TimeoutError' ? 504 : 502).json({})
  }
}
