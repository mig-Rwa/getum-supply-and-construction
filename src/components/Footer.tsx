import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  contact: [
    {
      name: 'Address',
      value: 'KG 123 Street, Kigali, Rwanda',
      icon: MapPinIcon,
    },
    {
      name: 'Phone',
      value: '+250788301363',
      href: 'tel:+250788301363',
      icon: PhoneIcon,
    },
    {
      name: 'Phone',
      value: '+250788559008',
      href: 'tel:+250788559008',
      icon: PhoneIcon,
    },
    {
      name: 'Phone',
      value: '+90 533 867 2160',
      href: 'tel:+905338672160',
      icon: PhoneIcon,
    },
    {
      name: 'Email',
      value: 'mbabamik1900@gmail.com',
      icon: EnvelopeIcon,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 bg-white rounded-lg p-3">
              <Image
                src="/images/logo-getum.png"
                alt="Getum Supply and Construction Ltd. Logo"
                width={200}
                height={67}
                className="h-16 w-auto"
                priority
              />
              <span className="text-2xl font-bold text-gray-900">Getum Supply and Construction Ltd.</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Building excellence, one project at a time. Your trusted partner in construction and renovation.
            </p>
            <div className="flex flex-col space-y-4">
              {navigation.contact.map((item) => (
                <div key={item.name + '-' + (item.value || '')} className="flex items-center space-x-2 text-gray-300">
                  <item.icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  <span className="text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/services#residential" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Residential Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#commercial" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Commercial Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#renovation" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Renovation & Remodeling
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Getum Supply and Construction Ltd.. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 