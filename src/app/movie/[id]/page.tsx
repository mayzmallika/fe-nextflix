'use client'
import Navbar from '@/components/Navbar'
import { use } from 'react'
import { MovieDetailProps } from '@/features/movies/types'
import Image from 'next/image'
import LoadingSpinner from '@/components/LoadingSpinner'
import ErrorComponent from '@/components/ErrorComponent'
import { useMovieDetail } from '@/features/movies/hooks/useMovieService'

const MovieDetail = ({ params }: MovieDetailProps) => {
  // Use React.use() to unwrap the params from the promise
  const { id } = use(params)

  const { movie, loading, error, setMovie, setError, setLoading } = useMovieDetail({ id })

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorComponent message={error} />
  }

  if (!movie?.title) {
    return <ErrorComponent message="Movie not found" />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Navbar />
        <Image
          src={movie.poster}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        <div className="absolute bottom-5 left-10 z-10 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
          <p className="text-sm text-gray-300 mb-2">
            {movie.year} • {movie.rated} • {movie.runtime}
          </p>
          <p className="text-lg mb-4 mx-2 line-clamp-4 md:line-clamp-5 lg:line-clamp-6">
            {' '}
            {movie.plot}
          </p>
          <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl">
            ▶ Play
          </button>
          <button className="px-6 mx-4 py-2 text-white font-semibold rounded-xl border border-gray-500">
            <img
              src="/assets/images/list-btn.png"
              alt="My List"
              className="w-5 inline-block mr-2"
            />
            <span>Add to My List</span>
          </button>
        </div>
      </div>

      <div className="px-10 text-sm text-gray-300">
        <p>
          <span className="font-semibold text-white">Genre:</span> {movie.genre}
        </p>
        <p>
          <span className="font-semibold text-white">Director:</span>{' '}
          {movie.director}
        </p>
        <p>
          <span className="font-semibold text-white">Writer:</span>{' '}
          {movie.writer}
        </p>
        <p>
          <span className="font-semibold text-white">Actors:</span>{' '}
          {movie.actors}
        </p>

        <p>
          <span className="font-semibold text-white">Country:</span>{' '}
          {movie.country}
        </p>
        <p>
          <span className="font-semibold text-white">Language:</span>{' '}
          {movie.language}
        </p>
        <p>
          <span className="font-semibold text-white">Awards:</span>{' '}
          {movie.awards}
        </p>
        <p>
          <span className="font-semibold text-white">IMDb Rating:</span>{' '}
          {movie.imdbRating} ({movie.imdbVotes} votes)
        </p>
        <p>
          <span className="font-semibold text-white">Metascore:</span>{' '}
          {movie.metascore}
        </p>
      </div>
    </div>
  )
}

export default MovieDetail