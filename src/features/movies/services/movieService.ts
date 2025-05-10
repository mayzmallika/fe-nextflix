import { Movie } from '../types'

export async function fetchMovies(query: string): Promise<Movie[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies?keyword=${query}`)
  if (!res.ok) throw new Error('Failed to fetch movies')
  const data = await res.json()
  return data.data
}
