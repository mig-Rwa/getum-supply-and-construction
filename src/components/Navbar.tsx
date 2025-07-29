'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full px-6 py-2 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <Image src="/images/logo-getum.png" alt="Logo" width={80} height={80} className="h-20 w-auto" />
          <h1 className="text-base md:text-lg font-bold text-gray-900">
            Getum Supply & Construction Ltd.
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="mt-3 md:mt-0 flex flex-wrap gap-4 text-base font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/equipment">Equipment</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/get-a-quote" className="bg-blue-600 text-white px-3 py-1 rounded-md">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}