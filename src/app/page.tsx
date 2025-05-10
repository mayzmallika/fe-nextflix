'use client'

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import PopularSwiper from '@/features/movies/components/PopularSwiper'
import { useState } from 'react'
import { useFindMovie } from '@/features/movies/hooks/useMovieService'
import LoadingSpinner from '@/components/LoadingSpinner'
import ErrorComponent from '@/components/ErrorComponent'

export default function Home() {
  const [keyword, setKeyword] = useState('movie')
  const { movies, loading, error } = useFindMovie(keyword)

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorComponent message={error} />
  }

  return (
    <main className="bg-black min-h-screen">
      <Head>
        <title>Nextflix - Web Application</title>
      </Head>
      <Navbar />
      <HeroBanner />
      <PopularSwiper title="Popular on Netflix" movies={movies} />
    </main>
  )
}
