export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/70 to-transparent absolute top-0 w-full z-10">
      <div className="flex items-center space-x-6">
        <img src="/assets/images/logo.png" alt="Netflix" className="w-24" />
        <ul className="hidden md:flex space-x-4 text-white text-sm">
          <li className="hover:underline cursor-pointer">Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <button><img src="/assets/images/search.png" alt="Netflix" className="w-6" /></button>
        <button>Kids</button>
        <button><img src="/assets/images/bell.png" alt="Netflix" className="w-6" /></button>
        <div className="w-8 h-8 bg-white rounded-sm"></div> {/* Avatar */}
      </div>
    </nav>
  )
}
