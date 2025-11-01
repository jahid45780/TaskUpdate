import { Link } from "react-router"
import { ModeToggle } from "../toggle/ModeToggle"

function Navbar() {


  return (
    <>
  

    <div >

    <nav className="w-full bg-[#0d1321] text-white px-8 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side: Brand */}
        <h1 className="text-3xl font-extrabold text-red-500 tracking-wide">
          Navbar
        </h1>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/users"
            className="text-gray-300 hover:text-red-400 transition-all duration-300 text-lg"
          >
            Users
          </Link>
          <Link
            to="/tasks"
            className="text-gray-300 hover:text-red-400 transition-all duration-300 text-lg"
          >
            Tasks
          </Link>
        </div>

        {/* Right side: Mode Toggle */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-300 hover:text-red-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>


      
    </div>
    </>
  )
}

export default Navbar