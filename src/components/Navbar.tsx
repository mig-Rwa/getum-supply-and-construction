'use client';

export default function Navbar() {
  return (
    <header className="w-full px-4 py-2 bg-white shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <img src="/images/logo-getum.png" alt="Logo" className="h-10 w-auto" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Getum Supply & Construction Ltd.
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="mt-3 md:mt-0 flex flex-wrap gap-4 text-base font-medium text-gray-700">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/get-a-quote" className="bg-blue-600 text-white px-3 py-1 rounded-md">
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}