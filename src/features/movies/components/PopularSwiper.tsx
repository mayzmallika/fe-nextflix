'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import { Navigation, FreeMode } from 'swiper/modules'

interface Movie {
  id: number
  title: string
  poster_path: string
}

interface PopularSwiperProps {
  title: string
  movies: Movie[]
}

export default function PopularSwiper({ title, movies }: PopularSwiperProps) {
  return (
    <section className="text-white px-6 mt-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={5.5}
        // navigation
        freeMode
        modules={[Navigation, FreeMode]}
        className="w-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`/assets/images/${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md hover:scale-105 transition-transform duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
