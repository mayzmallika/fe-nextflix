import Head from 'next/head'
import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import PopularSwiper from '@/features/movies/components/PopularSwiper'

export default function Home() {
  const mockMovies = [
    {
      id: 1,
      title: 'Stranger Things',
      poster_path: '1.png',
    },
    {
      id: 2,
      title: 'The Witcher',
      poster_path: '2.png',
    },
    {
      id: 3,
      title: 'You',
      poster_path: '3.png',
    },
    {
      id: 4,
      title: 'The Crown',
      poster_path: '4.png',
    },
    {
      id: 5,
      title: 'Money Heist',
      poster_path: '5.png',
    },
    {
      id: 6,
      title: 'Lucifer',
      poster_path: '6.png',
    },
    {
      id: 7,
      title: 'Breaking Bad',
      poster_path: '7.png',
    },
  ]

  return (
    <main className="bg-black min-h-screen">
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <Navbar />
      <HeroBanner />
      <PopularSwiper title="Popular on Netflix" movies={mockMovies} />
    </main>
  )
}
