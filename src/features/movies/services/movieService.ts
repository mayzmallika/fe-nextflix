import { Movie } from '../types'

export async function fetchMovies(query: string): Promise<Movie[]> {
  const res = await fetch(`http://localhost:3001/movies/search?q=${query}`)
  if (!res.ok) throw new Error('Failed to fetch movies')
  const data = await res.json()
  return data.data
}
