import { useEffect, useState } from 'react'
import { fetchMovieDetail, fetchMovies } from '../services/movieService'
import { Movie, MovieDetailType } from '../types'

export function useFindMovie(keyword: string) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!keyword) return

    setLoading(true)
    fetchMovies(keyword)
      .then(setMovies)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [keyword])

  return { movies, loading, error }
}

export function useMovieDetail(params: { id: string }) {
  const { id } = params
  const [movie, setMovie] = useState<MovieDetailType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    setLoading(true)
    fetchMovieDetail(id)
      .then((movie) => {
        setMovie(movie)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  return { movie, loading, error, setMovie, setLoading, setError }
}
