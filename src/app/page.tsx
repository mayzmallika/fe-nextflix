'use client'

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import PopularSwiper from '@/features/movies/components/PopularSwiper'
import { useState } from 'react'
import { useMovieSearch } from '@/features/movies/hooks/useMovieSearch'

export default function Home() {
  const [query, setQuery] = useState('movie')
  const { movies, loading, error } = useMovieSearch(query)

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
