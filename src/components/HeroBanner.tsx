export default function HeroBanner() {
  return (
    <section className="relative h-[70vh] text-white">
      <img
        src="/assets/images/hero.jpg"
        alt="Devil in Ohio"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 px-10 pt-36 max-w-xl">
        <img src="/assets/images/n-series.png" alt="Netflix" className="w-36" />
        <img src="/assets/images/title-logo.png" alt="Netflix" className="" />

        <p className="mt-4 text-sm max-w-md">
          Determined to protect a young patient who escaped a mysterious cult, a
          psychiatrist takes the girl in, putting her own family — and life — in
          danger.
        </p>
        <div className="mt-6 flex space-x-4">
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
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  )
}
