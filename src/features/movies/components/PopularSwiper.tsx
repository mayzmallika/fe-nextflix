'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import Link from 'next/link'

import { FreeMode } from 'swiper/modules'

interface Movie {
  imdbID: string
  title: string
  poster: string
  year: string
}

interface PopularSwiperProps {
  title: string
  movies: Movie[]
}

export default function PopularSwiper({ title, movies }: PopularSwiperProps) {
  return (
    <section className="text-white px-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 2.2 },
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 4.5 },
          1024: { slidesPerView: 5.5 },
        }}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full"
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.imdbID}
            className="max-w-[120px] sm:max-w-[250px]"
          >
            <Link href={`/movie/${movie.imdbID}`}>
              <div className="relative h-auto max-w-xs mx-auto aspect-[2/3] sm:w-full sm:aspect-video">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="absolute top-0 left-0 w-full h-full object-contain sm:object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
                {Number(movie.year) > 2012 && (
                  <img
                    src="/assets/images/top-ten.png"
                    alt="Top 10"
                    className="w-10 absolute top-1 left-1 text-white text-xs font-bold px-2 py-1 rounded"
                  />
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
