'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const officeLocations = [
  {
    city: 'Main Office - Kigali',
    address: 'KG 123 Street',
    region: 'Kigali, Rwanda',
    country: 'Rwanda',
    phone: '+250788301363',
    email: 'mbabamik1900@gmail.com',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    social: {
      instagram: 'getum_supply'
    }
  },
  {
    city: 'Project Office - Kigali',
    address: 'KG 456 Avenue',
    region: 'Kigali, Rwanda',
    country: 'Rwanda',
    phone: '+250788301363',
    email: 'eumuhoza@gmail.com',
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    staff: [
      {
        name: 'Eric Cyubahiro',
        role: 'Engineer',
        phone: '0788259595',
        email: 'Mr.cyubahiroeric@gmail.com',
      },
      {
        name: 'Robert UWASE',
        role: 'Engineer',
        phone: '0788569771',
        email: 'wanted.urobert@gmail.com',
      }
    ],
    social: {
      instagram: 'getum_supply'
    }
  },
  {
    city: 'Appointment (Online)',
    address: 'Online',
    region: '',
    country: '',
    phone: '+90 533 867 2160',
    email: 'miguelmbabatunga31@gmail.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    social: {
      instagram: 'getum_supply'
    }
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '+250787587105'; // Updated recipient number
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AProject Type: ${formData.projectType}%0AMessage: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${message}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Contact Hero Section */}
      <div className="relative isolate bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white">Get in Touch</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ready to start your construction project? Contact us today for a consultation. We&apos;re here to help bring your vision to life.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                {officeLocations.map((location) => (
                  <div key={location.city} className="bg-white/5 rounded-lg p-6 mt-6">
                    <h3 className="font-semibold text-white">{location.city}</h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex gap-x-4">
                        <MapPinIcon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                        <div>
                          <p>{location.address}</p>
                          <p>{location.region}</p>
                          <p>{location.country}</p>
                        </div>
                      </div>
                      <div className="flex gap-x-4">
                        <PhoneIcon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                        <p>{location.phone}</p>
                      </div>
                      <div className="flex gap-x-4">
                        <EnvelopeIcon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                        <p>{location.email}</p>
                      </div>
                      {location.staff && (
                        <div className="mt-4">
                          <p className="font-semibold text-white mb-2">Engineers:</p>
                          <ul className="space-y-2">
                            {location.staff.map((staff, idx) => (
                              <li key={idx} className="text-gray-300">
                                <span className="font-semibold">{staff.name}</span> - {staff.role}<br />
                                <span className="text-sm"><PhoneIcon className="inline h-4 w-4 mr-1 text-gray-400" />{staff.phone}</span><br />
                                <span className="text-sm"><EnvelopeIcon className="inline h-4 w-4 mr-1 text-gray-400" />{staff.email}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex gap-x-4">
                        <ClockIcon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                        <p>{location.hours}</p>
                      </div>
                      <div className="flex gap-x-4">
                        <GlobeAltIcon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                        <p>Instagram: @{location.social.instagram}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-white">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="projectType" className="block text-sm font-semibold leading-6 text-white">
                    Project Type
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="projectType"
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    >
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="renovation">Renovation</option>
                      <option value="stoneCrushing">Stone Crushing Project</option>
                      <option value="aggregateSupply">Aggregate Supply</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
} 