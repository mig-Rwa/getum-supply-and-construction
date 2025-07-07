import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const products = [
  {
    name: 'Stone Base for Road Construction',
    description: 'High-quality crushed stone specifically engineered for road construction foundations.',
    image: '/images/field.jpg',
    details: {
      applications: [
        'Highway construction',
        'Road base foundations',
        'Infrastructure projects',
        'Urban development'
      ],
      specifications: [
        'Multiple size grades available',
        'High compressive strength',
        'Excellent load-bearing capacity',
        'Quality-tested materials'
      ]
    }
  },
  {
    name: 'Construction Aggregates',
    description: 'Premium graded aggregates available in sizes 8/16 mm and 16/25 mm, perfect for building construction needs.',
    image: '/images/aggregate.jpg',
    details: {
      applications: [
        'Concrete mixing',
        'Building foundations',
        'Structural elements',
        'Commercial construction'
      ],
      specifications: [
        'Size grades: 8/16 mm and 16/25 mm',
        'Consistent gradation',
        'Clean, washed material',
        'Meets industry standards'
      ]
    }
  },
  {
    name: 'Bridge Construction Materials',
    description: 'Specialized aggregates and materials engineered for bridge construction projects.',
    image: '/images/quarry-construction.jpg',
    details: {
      applications: [
        'Bridge foundations',
        'Structural supports',
        'Reinforced concrete',
        'Infrastructure development'
      ],
      specifications: [
        'High-strength materials',
        'Durability tested',
        'Quality controlled production',
        'Engineering grade materials'
      ]
    }
  },
  {
    name: 'Concrete Sand',
    description: 'Fine-grade sand specially processed for brick and block manufacturing.',
    image: '/images/field.jpg',
    details: {
      applications: [
        'Brick manufacturing',
        'Block production',
        'Precast elements',
        'Concrete mixing'
      ],
      specifications: [
        'Fine gradation',
        'Clean, screened material',
        'Consistent quality',
        'Optimal particle distribution'
      ]
    }
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Products</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              GETUM Supply offers a comprehensive range of high-quality construction materials. From road base to concrete sand, our products meet the highest industry standards through rigorous quality control and advanced processing.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {products.map((product, index) => (
            <div key={product.name} className={`flex flex-col ${index !== 0 ? 'mt-32' : ''}`}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <div className="lg:order-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={600}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
                <div className="lg:order-1">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h3>
                  <p className="mt-4 text-lg text-gray-600">{product.description}</p>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900">Applications</h4>
                    <ul className="mt-4 grid grid-cols-1 gap-4">
                      {product.details.applications.map((app) => (
                        <li key={app} className="flex items-center">
                          <svg className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900">Specifications</h4>
                    <ul className="mt-4 grid grid-cols-1 gap-4">
                      {product.details.specifications.map((spec) => (
                        <li key={spec} className="flex items-center">
                          <svg className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to start your project?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact us today to discuss your material needs and get a customized quote for your project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get a Quote
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn more about us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 