import { Movie } from '@/features/movies/types'
import Link from 'next/link';

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="mt-2 rounded shadow-md text-white">
      <Link href={`/movie/${movie.id}`}>
        <img
          src={movie.poster}
          alt={movie.title}
          onError={(e) => {
            e.currentTarget.src = 'https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940'; // Replace with your fallback image path
          }}
          className="w-full h-auto rounded mb-2 object-cover aspect-[2/3] sm:object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
  )
}
