// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white bg-opacity-50 backdrop-blur-md shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <span className="text-2xl text-gray-900 font-semibold">Logo</span>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 text-gray-900">
            <Link href="#" className="hover:text-blue-600">Dashboard</Link>
            <Link href="#" className="hover:text-blue-600">About</Link>
            <Link href="#" className="hover:text-blue-600">Projects</Link>
            <Link href="#" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu (Hamburger Icon) */}
          <div className="md:hidden">
            <button className="text-gray-900">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
