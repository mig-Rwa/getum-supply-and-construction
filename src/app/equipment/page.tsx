'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const equipment = [
  {
    name: 'Excavator',
    image: '/images/excavator.jpg',
    description: 'Heavy-duty excavator for earthmoving and digging operations.'
  },
  {
    name: 'Bulldozer',
    image: '/images/bull.jpg',
    description: 'Powerful bulldozer for grading and pushing large quantities of soil.'
  },
  {
    name: 'Compressor',
    image: '/images/compressor.jpg',
    description: 'High-performance compressor for pneumatic tools and machinery.'
  },
  {
    name: 'Wheel Loader',
    image: '/images/wheel-loader.jpg',
    description: 'Versatile wheel loader for loading materials and aggregate.'
  },
  {
    name: 'Backhoe',
    image: '/images/backhoe.jpg',
    description: 'Multi-purpose backhoe for digging and loading.'
  },
  {
    name: 'Compactor',
    image: '/images/compactor.jpg',
    description: 'Efficient compactor for soil and asphalt compaction.'
  },
  {
    name: 'Crusher',
    image: '/images/crusher.jpg',
    description: 'Industrial crusher for breaking down rocks and aggregates.'
  }
];

export default function EquipmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Equipment</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our fleet of heavy machinery and equipment used to deliver top-quality construction services.
            </p>
          </div>
          <motion.ul
  role="list"
  className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.3 } },
    hidden: {}
  }}
>
  {equipment.map((item) => (
    <motion.li
      key={item.name}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="relative group border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-200">
        <div className="relative w-full aspect-square">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg">{item.name}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm leading-6 text-gray-600 text-center">{item.description}</p>
        </div>
      </div>
    </motion.li>
  ))}
</motion.ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
