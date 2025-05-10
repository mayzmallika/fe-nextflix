export interface Movie {
  id: string
  title: string
  imdbID: string
  year: string
  poster: string
}

export interface MovieDetailType {
  id: string
  title: string
  year: string
  rated: string
  released: string
  runtime: string
  genre: string
  director: string
  writer: string
  actors: string
  plot: string
  language: string
  country: string
  awards: string
  poster: string
  ratings: Array<{ Source: string; Value: string }>
  metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  type: string
  totalSeasons: string
  response: string
}
export interface PopularSwiperProps {
  title: string
  movies: Movie[]
}

export interface MovieDetailProps {
  params: Promise<{
    id: string
  }>
}
