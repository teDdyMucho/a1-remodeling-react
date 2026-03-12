import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'roofing',
      title: 'Heat Reflective Roofing Systems',
      description: 'Energy-efficient, durable roofing that reflects heat and lowers bills.',
      details: 'Our heat reflective roofing systems use advanced materials that reflect solar radiation, keeping your home cooler and reducing energy costs by up to 30%. Perfect for the California climate.',
      image: 'https://static.wixstatic.com/media/6b5032_903f145a2f924efbb649c5edbda448db~mv2.jpg/v1/fill/w_1010,h_673,q_85,usm_0.66_1.00_0.01/6b5032_903f145a2f924efbb649c5edbda448db~mv2.jpg',
      features: ['Energy Star Certified', 'UV Protection', '25-Year Warranty', 'Cool Roof Technology']
    },
    {
      id: 'windows',
      title: 'Energy Efficient Windows + Doors',
      description: 'Premium windows & doors designed for insulation and modern style.',
      details: 'Double-pane, low-E coated windows and doors that provide superior insulation, noise reduction, and UV protection while enhancing your home\'s aesthetic appeal.',
      image: 'https://static.wixstatic.com/media/6b5032_f7a5a5f5a49b4c05815de9fdd42cd956~mv2.jpg/v1/fill/w_1010,h_673,q_85,usm_0.66_1.00_0.01/6b5032_f7a5a5f5a49b4c05815de9fdd42cd956~mv2.jpg',
      features: ['Low-E Glass', 'Argon Gas Fill', 'Noise Reduction', 'Custom Designs']
    },
    {
      id: 'coating',
      title: 'High Performance Coating System',
      description: 'Protective coatings that extend the life of your surfaces.',
      details: 'Industrial-grade coating systems that protect against weather, UV damage, and wear. Ideal for exterior walls, decks, and high-traffic areas.',
      image: 'https://static.wixstatic.com/media/6b5032_d870bfa869264a14a545258a13fcbe7f~mv2.jpg/v1/fill/w_1010,h_745,q_85,usm_0.66_1.00_0.01/6b5032_d870bfa869264a14a545258a13fcbe7f~mv2.jpg',
      features: ['Weather Resistant', 'UV Protection', 'Easy Maintenance', '10-Year Guarantee']
    },
    {
      id: 'planning',
      title: 'Space Planning & Design',
      description: 'Smart, refined layouts that harmonize with your lifestyle.',
      details: 'Our expert designers work with you to create functional, beautiful spaces that maximize your home\'s potential and reflect your personal style.',
      image: 'https://static.wixstatic.com/media/6b5032_851a3a52b0234104b2a2fe0531b314b9~mv2.jpg/v1/fill/w_1010,h_917,q_85,usm_0.66_1.00_0.01/6b5032_851a3a52b0234104b2a2fe0531b314b9~mv2.jpg',
      features: ['3D Visualization', 'Custom Layouts', 'Material Selection', 'Project Management']
    },
    {
      id: 'kitchen',
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a modern culinary space.',
      details: 'Complete kitchen renovations featuring custom cabinets, modern appliances, and beautiful countertops that combine functionality with style.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2168&auto=format&fit=crop',
      features: ['Custom Cabinets', 'Quartz Countertops', 'Modern Appliances', 'Smart Storage']
    },
    {
      id: 'bathroom',
      title: 'Bathroom Renovation',
      description: 'Create your personal spa retreat at home.',
      details: 'Luxurious bathroom remodels with premium fixtures, elegant tile work, and modern amenities for the ultimate relaxation experience.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2187&auto=format&fit=crop',
      features: ['Luxury Fixtures', 'Custom Tile', 'Heated Floors', 'Spa Features']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold text-gray-900">A1 HOME REMODELING</Link>
            <div className="flex gap-6">
              <Link to="/" className="text-gray-700 hover:text-gray-900 transition">Home</Link>
              <Link to="/services" className="text-gray-900 font-semibold">Services</Link>
              <Link to="/appointment" className="text-gray-700 hover:text-gray-900 transition">Appointment</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-2">— Professional Services —</p>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 21 years of experience delivering exceptional home remodeling services in Culver City and Los Angeles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selectedService && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {services.filter(s => s.id === selectedService).map((service) => (
                  <div key={service.id}>
                    <div className="relative h-80">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <button
                        onClick={() => setSelectedService(null)}
                        className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-900 hover:bg-gray-100 transition"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                      <p className="text-lg text-gray-700 mb-6">{service.details}</p>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                      <ul className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className="text-green-600 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4">
                        <Link
                          to="/appointment"
                          className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-gray-800 transition"
                        >
                          Schedule Consultation
                        </Link>
                        <button
                          onClick={() => setSelectedService(null)}
                          className="flex-1 bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gray-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your next remodeling project. Our experts are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Schedule Free Quote
              </Link>
              <a
                href="tel:4243452274"
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                Call: 424 345 2274
              </a>
            </div>
          </div>

          <div className="mt-16 text-center text-gray-600">
            <p className="text-sm">CSLB #1059945 • Licensed • Bonded • Insured</p>
            <p className="text-sm mt-2">Serving Culver City & Los Angeles for over 21 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
