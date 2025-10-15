export const BASE = 'https://fakestoreapi.com/products'

export async function fetchAll() {
  const res = await fetch(BASE)
  if (!res.ok) throw new Error('Error al cargar productos')
  return res.json()
}

export async function fetchById(id) {
  const res = await fetch(`${BASE}/${id}`)
  if (!res.ok) throw new Error('Error al cargar detalle')
  return res.json()
}
