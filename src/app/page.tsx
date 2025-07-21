'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { TruckIcon, BeakerIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { equipmentShowcase } from './equipment/equipmentShowcaseData';

const services = [
  {
    name: 'Material Extraction',
    description: 'Expert quarry extraction of raw stone and mineral resources using environmentally responsible practices.',
    icon: TruckIcon,
  },
  {
    name: 'Processing & Production',
    description: 'Advanced crushing and processing to create various grades of aggregates for specific construction needs.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Quality Control',
    description: 'Rigorous testing and quality assurance to meet industry specifications for strength and durability.',
    icon: BeakerIcon,
  },
];

const products = [
  {
    name: 'Stone Base for Roads',
    description: 'Heavy-duty crushed stone for highway and road project foundations',
    category: 'Road Construction',
    image: '/images/field.jpg',
  },
  {
    name: 'Construction Aggregates',
    description: 'Graded aggregates (8/16 mm and 16/25 mm) for concrete mixing',
    category: 'Building Materials',
    image: '/images/aggregate.jpg',
  },
  {
    name: 'Concrete Sand',
    description: 'Fine-grade sand for bricks, blocks, and precast products',
    category: 'Construction Materials',
    image: '/images/quarry-construction.jpg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-28">
      <Navbar />
      <div className="relative isolate overflow-hidden bg-white">
        <motion.div
          className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 1.1 } },
              hidden: { opacity: 0, y: 40 },
            }}
          >
            <motion.h1
              className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 1.1 } }, hidden: { opacity: 0, y: 40 } }}
            >
              Quality Aggregates for Construction Excellence
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600"
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay: 0.15 } }, hidden: { opacity: 0, y: 40 } }}
            >
              GETUM Supply specializes in quarry extraction and aggregate production, delivering high-quality construction materials through advanced processing and rigorous quality control. We provide essential materials for infrastructure development across Rwanda.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center gap-x-6"
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay: 0.3 } }, hidden: { opacity: 0, y: 40 } }}
            >
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get a Quote
              </a>
              <a href="/services" className="rounded-md bg-blue-100 px-3.5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                View All Services
              </a>
              <a href="/products" className="text-sm font-semibold leading-6 text-gray-900">
                View Our Products <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32"
            variants={{ visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay: 0.45 } }, hidden: { opacity: 0, y: 40 } }}
          >
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="/images/quarry-construction.jpg"
                alt="Quarry operations showcase"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md object-cover shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Extraction and Processing
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From quarry extraction to final processing, we maintain the highest standards of quality control to deliver materials that meet industry specifications.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <motion.dl
  className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
    hidden: {},
  }}
>
  {services.map((service) => (
    <motion.div
      key={service.name}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
        hidden: { opacity: 0, y: 40 },
      }}
      className="flex flex-col"
    >
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
        {service.name}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{service.description}</p>
        <p className="mt-6">
          <a href="/services" className="text-sm font-semibold leading-6 text-blue-600">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </p>
      </dd>
    </motion.div>
  ))}
</motion.dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Products</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quality Materials for Every Project
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a comprehensive range of construction materials, from road base to fine aggregates, all produced to meet strict quality standards.
            </p>
          </div>
          <motion.div
  className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
    hidden: {},
  }}
>
  {products.map((product) => (
    <motion.article
      key={product.name}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
        hidden: { opacity: 0, y: 40 },
      }}
      className="flex flex-col items-start"
    >
      <div className="relative w-full">
        <Image
          key={`product-image-${product.name}`}
          src={product.image}
          alt={product.name}
          width={800}
          height={600}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime="2024" className="text-gray-500">
            {product.category}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="/products">
              <span className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{product.description}</p>
        </div>
      </div>
    </motion.article>
  ))}
</motion.div>
          <div className="mt-16 flex justify-center">
            <a
              href="/products"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>

      {/* Equipment Showcase Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Equipment Spotlight</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Machinery
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A glimpse at some of the heavy equipment powering our projects.
            </p>
          </div>
          <motion.div
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
              hidden: {},
            }}
          >
            {equipmentShowcase.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { duration: 1.1 } },
                  hidden: { opacity: 0, y: 40 },
                }}
                className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">{item.name}</h3>
                <p className="text-sm text-gray-600 text-center mb-2">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10 flex justify-center">
            <a
              href="/equipment"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              See All Equipment
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
