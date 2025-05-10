'use client'
import { useState } from 'react'
import { useFindMovie } from '@/features/movies/hooks/useMovieService'
import { MovieCard } from '@/components/MovieCard'
import Link from 'next/link'
import LoadingSpinner from '@/components/LoadingSpinner'
import ErrorComponent from '@/components/ErrorComponent'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const { movies, loading, error } = useFindMovie(keyword)

  return (
    <section className="mt-6 p-6 max-w-5xl mx-auto">
      <Link href="/">
        <img
          src="/assets/images/logo.png"
          alt="Netflix"
          className="w-24 hidden md:block"
        />
        <img
          src="/assets/images/n-logo.png"
          alt="Netflix"
          className="w-4 md:hidden"
        />
      </Link>

      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search for movies..."
        className="w-full mt-8 p-2 border border-gray-300 rounded mb-4"
      />

      {loading && <LoadingSpinner />}
      {error && <ErrorComponent message={error} />}
      {!loading && movies.length === 0 && keyword && (
        <p className="text-white text-lg">No movies found.</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  )
}
