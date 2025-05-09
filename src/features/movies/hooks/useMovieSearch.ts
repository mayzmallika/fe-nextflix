import { useEffect, useState } from 'react'
import { fetchMovies } from '../services/movieService'
import { Movie } from '../types'

export function useMovieSearch(query: string) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!query) return

    setLoading(true)
    fetchMovies(query)
      .then(setMovies)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [query])

  return { movies, loading, error }
}
