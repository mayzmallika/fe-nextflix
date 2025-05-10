export default function HeroBanner() {
  return (
    <section className="relative md:static h-[70vh] text-white">
      <img
        src="/assets/images/hero.jpg"
        alt="Devil in Ohio"
        className="absolute inset-0 object-cover object-center w-full h-full"
      />
      <div className="absolute z-10 px-6 md:px-10 max-w-xl bottom-10 md:bottom-auto md:top-1/3 lg:top-1/5">
        <img
          src="/assets/images/n-series.png"
          alt="Netflix"
          className="w-36 mx-auto md:mx-0"
        />
        <img
          src="/assets/images/title-logo.png"
          alt="Netflix"
          className="mx-auto md:mx-0"
        />

        <h1 className="flex text-2xl font-bold mt-4">
          <img
            src="/assets/images/top-ten.png"
            alt="Top 10"
            className="w-10 pr-2"
          />{' '}
          #1 in TV Shows Today
        </h1>

        <p className="mt-4 text-sm max-w-md mx-auto md:mx-0 hidden md:block">
          Determined to protect a young patient who escaped a mysterious cult, a
          psychiatrist takes the girl in, putting her own family — and life — in
          danger.
        </p>

        <p className="mt-4 text-md max-w-md text-center md:hidden font-bold">
          TV Mysteries • Based on Books
        </p>

        <div className="mt-6 flex justify-center md:justify-start space-x-4 hidden md:flex">
          <button className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200">
            ▶ Play
          </button>
          <button className="bg-gray-600 bg-opacity-90 text-white font-bold py-2 px-6 rounded hover:bg-gray-500 flex items-center space-x-2">
            <img
              src="/assets/images/info-btn.png"
              alt="Netflix"
              className="w-4"
            />
            <span>More Info</span>
          </button>
        </div>
        <div className="mt-6 flex justify-center items-center gap-x-12 md:hidden w-full max-w-sm mx-auto text-center">
          <button className="text-white text-sm font-bold py-2 px-4 flex flex-col items-center">
            <img
              src="/assets/images/list-btn.png"
              alt="My List"
              className="w-5 mb-1"
            />
            My List
          </button>
          <button className="bg-white text-black font-bold py-1 px-6 rounded">
            ▶ Play
          </button>

          <button className="text-white text-sm font-bold py-2 px-4 flex flex-col items-center">
            <img
              src="/assets/images/info-btn.png"
              alt="Info"
              className="w-5 mb-1"
            />
            Info
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  )
}
