'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { TruckIcon, BeakerIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const divisions = [
  {
    name: 'Material Extraction',
    description: 'We carefully extract raw stone and mineral resources from designated quarry sites using environmentally responsible practices.',
    icon: TruckIcon,
    products: [
      'Advanced extraction techniques',
      'Environmental impact management',
      'Resource optimization',
      'Site rehabilitation planning'
    ]
  },
  {
    name: 'Processing and Production',
    description: 'Our modern crushing and processing facilities transform raw materials into high-quality construction aggregates.',
    icon: BuildingOfficeIcon,
    products: [
      'Crushing and screening',
      'Size grading and classification',
      'Material washing and cleaning',
      'Product stockpiling and management'
    ]
  }
];

const whyChooseUs = [
  {
    name: 'Quality Products',
    description: 'Our materials undergo rigorous testing to meet industry standards for strength and durability.',
    icon: BeakerIcon,
  },
  {
    name: 'Modern Equipment',
    description: 'State-of-the-art crushing and processing equipment for consistent product quality.',
    icon: TruckIcon,
  },
  {
    name: 'Environmental Focus',
    description: 'Commitment to sustainable quarrying practices and environmental stewardship.',
    icon: BuildingOfficeIcon,
  }
];

const team = [
  {
    name: 'Michel MBABAZI',
    role: 'Company Developer and Legal (CDL)',
    image: '/images/michel-mbabazi.jpg',
    bio: '25+ years of construction industry experience, leading innovative construction solutions',
    email: 'mbabamik1900@gmail.com',
    phone: '+250788301363',
  },
  {
    name: 'Evelyne K. UMUHOZA',
    role: 'General Manager',
    image: '/images/evelyne-umuhoza.jpg',
    bio: 'Expert in operational excellence and sustainable construction practices',
    email: 'eumuhoza@gmail.com',
    phone: '+250788559008',
  },
  {
    name: 'Miguel T. MBABAZI',
    role: 'Chief Technology Officer',
    image: '/images/miguel.jpg',
    bio: 'Pioneering digital transformation in construction technology',
    email: 'miguelmbabatunga31@gmail.com',
    phone: '+90 533 867 2160',
  },
  {
    name: 'Eng. Eric Cyubahiro',
    role: 'Project manager | Civil Engineer',
    image: '/images/eric-cyubahiro.jpg',
    bio: 'Passionate Civil Engineer | Project Management Specialist | Building Sustainable Communities',
    email: 'Mr.cyubahiroeric@gmail.com',
    phone: '0788259595',
  },
  {
    name: 'Eng. Robert UWASE',
    role: 'Civil engineer',
    image: '/images/robert.jpg',
    bio: 'Advice & maintaining...',
    email: 'wanted.urobert@gmail.com',
    phone: '0788569771',
  },
];

import { useState } from 'react';

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState<number | null>(null);
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              At Getum Supply & Construction Ltd., we are dedicated to delivering high-quality construction materials through expert quarry extraction and aggregate production. With advanced processing capabilities and strict quality control, we support Rwanda&apos;s infrastructure development with reliable and sustainable material solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Vision</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leading in Quality Aggregates
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              To be Rwanda&apos;s trusted leader in supplying top-quality construction materials through sustainable quarrying and advanced processing techniques.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">Our Mission</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-blue-600 text-white">•</span>
                <span className="ml-4 text-lg text-gray-600">To provide high-quality construction materials that meet industry standards</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-blue-600 text-white">•</span>
                <span className="ml-4 text-lg text-gray-600">To implement sustainable quarrying practices that protect the environment</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-blue-600 text-white">•</span>
                <span className="ml-4 text-lg text-gray-600">To contribute to Rwanda&apos;s infrastructure development through reliable material supply</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Operations Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Operations</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Processing Capabilities
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {divisions.map((division) => (
                <div key={division.name} className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <division.icon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
                    {division.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{division.description}</p>
                    <ul className="mt-4 space-y-2">
                      {division.products.map((product) => (
                        <li key={product} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          <span>{product}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Getum Supply & Construction Ltd.?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Excellence in Material Production
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {whyChooseUs.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <value.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Leadership Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the experienced professionals who make our success possible.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person, idx) => (
  <li key={person.name}>
    <div className="flex flex-col gap-y-3 border border-gray-200 rounded-2xl p-6 relative">
      <div className="relative h-48 w-48 mx-auto">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 text-center">{person.name}</h3>
      <p className="text-base leading-7 text-blue-600 text-center">{person.role}</p>
      <p className="text-sm leading-6 text-gray-600 text-center">{person.bio}</p>
      <button
        className="mt-2 mx-auto px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
        onClick={() => setContactOpen(idx)}
        type="button"
      >
        Contact
      </button>
    </div>
  </li>
))}
          </ul>
        </div>
      </div>

      {contactOpen !== null && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setContactOpen(null)}></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-64 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setContactOpen(null)}
                type="button"
                aria-label="Close"
              >
                &times;
              </button>
              <h4 className="text-lg font-semibold mb-2">Contact {team[contactOpen].name}</h4>
              <p className="text-sm mb-1"><span className="font-semibold">Email:</span> <a href={`mailto:${team[contactOpen].email}`} className="text-blue-600 underline">{team[contactOpen].email}</a></p>
              <p className="text-sm"><span className="font-semibold">Phone:</span> <a href={`tel:${team[contactOpen].phone}`} className="text-blue-600 underline">{team[contactOpen].phone}</a></p>
            </div>
          </div>
        </>
      )}
      <Footer />
    </main>
  );
} 