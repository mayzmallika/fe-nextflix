import { Movie, MovieDetailType } from '../types'

export async function fetchMovies(keyword: string): Promise<Movie[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies?keyword=${keyword}`)
  if (!res.ok) throw new Error('Failed to fetch movies')
  const data = await res.json()
  return data.data
}

export async function fetchMovieDetail(id: string ): Promise<MovieDetailType> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`)
  if (!res.ok) throw new Error('Failed to fetch movie detail')
  const data = await res.json()
  return data.data
}