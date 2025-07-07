import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const projects = [
  {
    name: 'Nyagatare Quarry Development',
    description: 'State-of-the-art quarry operation featuring advanced extraction techniques and environmental protection measures. This project demonstrates our commitment to sustainable resource management.',
    category: 'Quarry Operations',
    image: '/images/hero-bg.jpg',
    details: [
      'Modern extraction equipment',
      'Environmental monitoring systems',
      'Dust suppression technology',
      'Site rehabilitation planning'
    ]
  },
  {
    name: 'Aggregate Processing Plant',
    description: 'Advanced crushing and screening facility capable of producing multiple aggregate grades. Features automated quality control and efficient material handling systems.',
    category: 'Processing Facility',
    image: '/images/hero-bg.jpg',
    details: [
      'Multi-stage crushing system',
      'Automated screening',
      'Quality control lab',
      'Material stockpile management'
    ]
  },
  {
    name: 'Road Base Supply Project',
    description: 'Large-scale production and supply of high-quality road base materials for major infrastructure projects, showcasing our capability to meet demanding specifications.',
    category: 'Material Supply',
    image: '/images/hero-bg.jpg',
    details: [
      'Strict quality control',
      'High-volume production',
      'On-time delivery',
      'Material certification'
    ]
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our portfolio of quarrying operations and aggregate production facilities. Each project showcases our commitment to quality materials and sustainable practices.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.name} className="flex flex-col items-start">
                  <div className="relative w-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={800}
                      height={600}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <span className="text-gray-500">{project.category}</span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                        {project.name}
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
                    </div>
                    <ul className="mt-4 text-sm text-gray-600">
                      {project.details.map((detail) => (
                        <li key={detail} className="flex items-center mt-2">
                          <svg className="h-4 w-4 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 