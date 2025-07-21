import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  HomeIcon, 
  BuildingOfficeIcon, 
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  TruckIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'General Construction',
    description: 'Comprehensive construction services including buildings, roads, and bridges, executed with precision and quality.',
    icon: BuildingOfficeIcon,
    features: ['Building construction', 'Road construction', 'Bridge construction']
  },
  {
    name: 'Excavation',
    description: 'Expert excavation services for foundations, utilities, and site preparation using modern equipment.',
    icon: TruckIcon,
    features: ['Site excavation', 'Foundation digging', 'Trenching']
  },
  {
    name: 'Backfilling',
    description: 'Professional backfilling to ensure stable and secure foundations for all types of construction projects.',
    icon: ClipboardDocumentCheckIcon,
    features: ['Foundation backfilling', 'Trench backfilling', 'Material compaction']
  },
  {
    name: 'Compaction',
    description: 'Advanced compaction services for soil, gravel, and other materials to ensure long-lasting stability.',
    icon: WrenchScrewdriverIcon,
    features: ['Soil compaction', 'Gravel compaction', 'Roadbed preparation']
  },
  {
    name: 'Residential Construction',
    description: 'Custom home building, from modern designs to traditional architecture. We handle everything from foundation to finishing touches, ensuring your dream home becomes reality.',
    icon: HomeIcon,
    features: ['Custom home design', 'New construction', 'Home additions', 'Energy-efficient solutions']
  },
  {
    name: 'Commercial Projects',
    description: 'Full-service commercial construction for businesses of all sizes. We deliver modern, functional spaces that meet your business needs and compliance requirements.',
    icon: BuildingOfficeIcon,
    features: ['Office buildings', 'Retail spaces', 'Industrial facilities', 'Restaurant build-outs']
  },
  {
    name: 'Renovation & Remodeling',
    description: 'Transform your existing space with our expert renovation services. We modernize and revitalize while preserving the character you love.',
    icon: WrenchScrewdriverIcon,
    features: ['Kitchen remodeling', 'Bathroom updates', 'Basement finishing', 'Whole house renovations']
  },
  {
    name: 'Interior Finishing',
    description: 'Expert interior finishing services to add the perfect final touches to your space. From custom cabinetry to premium flooring.',
    icon: PaintBrushIcon,
    features: ['Custom cabinetry', 'Flooring installation', 'Paint and wallpaper', 'Trim and molding']
  },
  {
    name: 'Site Development',
    description: 'Comprehensive site preparation and development services. We handle everything from clearing to final grading.',
    icon: TruckIcon,
    features: ['Land clearing', 'Excavation', 'Grading', 'Utility installation']
  },
  {
    name: 'Project Management',
    description: 'Professional project management to ensure your construction project stays on time and within budget.',
    icon: ClipboardDocumentCheckIcon,
    features: ['Timeline planning', 'Budget management', 'Contractor coordination', 'Quality control']
  },
  {
    name: 'Supply & Construction of Water and Power Facilities',
    description: 'End-to-end solutions for the supply and construction of water and electrical infrastructure, supporting sustainable community and industrial growth.',
    icon: ClipboardDocumentCheckIcon,
    features: ['Water supply systems', 'Power distribution networks', 'Pumping stations', 'Facility installation & maintenance']
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-28">
      <Navbar />
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer comprehensive construction services tailored to your needs, from residential projects to commercial developments.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
                  <div className="flex items-center gap-x-4">
                    <service.icon className="h-16 w-16 text-blue-600" />
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{service.name}</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                  <ul role="list" className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3 text-sm">
                        <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 