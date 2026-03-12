import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomeTailwind() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [yearsCount, setYearsCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const curvedImages = [
    'https://static.wixstatic.com/media/6b5032_903f145a2f924efbb649c5edbda448db~mv2.jpg/v1/fill/w_1010,h_673,q_85,usm_0.66_1.00_0.01/6b5032_903f145a2f924efbb649c5edbda448db~mv2.jpg',
    'https://static.wixstatic.com/media/6b5032_f7a5a5f5a49b4c05815de9fdd42cd956~mv2.jpg/v1/fill/w_1010,h_673,q_85,usm_0.66_1.00_0.01/6b5032_f7a5a5f5a49b4c05815de9fdd42cd956~mv2.jpg',
    'https://static.wixstatic.com/media/6b5032_851a3a52b0234104b2a2fe0531b314b9~mv2.jpg/v1/fill/w_1010,h_917,q_85,usm_0.66_1.00_0.01/6b5032_851a3a52b0234104b2a2fe0531b314b9~mv2.jpg',
    'https://static.wixstatic.com/media/6b5032_d870bfa869264a14a545258a13fcbe7f~mv2.jpg/v1/fill/w_1010,h_745,q_85,usm_0.66_1.00_0.01/6b5032_d870bfa869264a14a545258a13fcbe7f~mv2.jpg',
  ];

  useEffect(() => {
    const target = 21;
    let current = 0;
    const increment = 1;
    const stepTime = 40;
    const counter = setInterval(() => {
      current += increment;
      setYearsCount(current);
      if (current >= target) {
        setYearsCount(target);
        clearInterval(counter);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % curvedImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [curvedImages.length]);

  const handleShowModal = (msg: string) => {
    setModalMessage(msg);
    setShowModal(true);
  };

  const handleServiceClick = (service: string) => {
    let msg = '';
    if (service === 'roofing') msg = 'Learn more about our heat reflective roofing systems.';
    else if (service === 'windows') msg = 'Explore energy-efficient windows and doors.';
    else if (service === 'coating') msg = 'High performance coating systems protect your home.';
    else if (service === 'planning') msg = 'Space planning & design: smart layouts.';
    else msg = 'More details coming soon.';
    handleShowModal(msg);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleShowModal('Thanks for submitting! We\'ll contact you soon.');
  };

  const handleNewsletterSubmit = () => {
    handleShowModal('Subscribed! Thank you.');
  };

  return (
    <div className="min-h-screen bg-white">
      <button 
        className="fixed bottom-8 right-8 bg-gray-900 text-white w-12 h-12 rounded-full shadow-lg hover:bg-gray-800 transition-all z-50 flex items-center justify-center text-xl font-bold"
        aria-label="Back to top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-bold tracking-wider">A1 HOME REMODELING INC.</div>
            <div className="hidden md:flex gap-6 text-sm font-semibold">
              <a href="#hero" className="hover:text-gray-600 transition">HOME</a>
              <a href="#about" className="hover:text-gray-600 transition">ABOUT</a>
              <a href="#services" className="hover:text-gray-600 transition">PROPERTIES</a>
              <Link to="/services" className="hover:text-gray-600 transition">SERVICES</Link>
              <a href="#carousel" className="hover:text-gray-600 transition">GALLERY</a>
              <a href="#blog" className="hover:text-gray-600 transition">BLOG</a>
              <a href="#contact" className="hover:text-gray-600 transition">CONTACTS</a>
            </div>
          </div>
        </div>
      </nav>

      <div id="hero" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 animate-fade-in">
              <div className="text-sm font-semibold text-gray-500 tracking-widest">— SINCE 2002 —</div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900">A1 HOME</h1>
              <div className="text-3xl font-light text-gray-700">REMODELING INC.</div>
              <div className="text-lg text-gray-600">CULVER CITY / LOS ANGELES</div>
            </div>
            <div className="text-right space-y-2 animate-fade-in">
              <div className="text-sm font-semibold text-gray-600">CSLB #1059945</div>
              <div className="text-4xl font-bold text-gray-900">{yearsCount} YEARS EXPERIENCE</div>
              <div className="text-sm font-semibold text-gray-600">LICENSED • BONDED • INSURED</div>
              <div className="mt-4 text-sm">
                <Link to="/appointment" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Schedule a Free Online Quote
                </Link>
                <div className="mt-2 text-gray-700">424 345 2274 / 855 247 1019</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 text-center">
        <Link 
          to="/appointment" 
          className="inline-block bg-gray-900 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
        >
          GET YOUR QUOTATION NOW
        </Link>
      </div>

      <div className="relative h-96 overflow-hidden">
        {curvedImages.map((img, idx) => (
          <img
            key={idx}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            src={img}
            alt={`modern house construction ${idx + 1}`}
          />
        ))}
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome To A1 Home Remodeling Inc.</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is simple: to provide high-quality services for our valued clients. Our team goes above and beyond to cater to each project's specific needs.
          </p>
          <p className="text-lg text-gray-700">
            Through open communication and exceptional service, we hope you'll find what you're looking for with our Home Improvement Services.
          </p>
        </div>
      </div>

      <div id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-gray-500 tracking-widest mb-2">— PROFESSIONAL SERVICES —</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'HEAT REFLECTIVE ROOFING SYSTEMS',
                desc: 'Energy‑efficient, durable roofing that reflects heat and lowers bills.',
                img: curvedImages[0],
                service: 'roofing'
              },
              {
                num: '02',
                title: 'ENERGY EFFICIENT WINDOWS + DOORS',
                desc: 'Premium windows & doors designed for insulation and modern style.',
                img: curvedImages[1],
                service: 'windows'
              },
              {
                num: '03',
                title: 'HIGH PERFORMANCE COATING SYSTEM',
                desc: 'Protective coatings that extend the life of your surfaces.',
                img: curvedImages[3],
                service: 'coating'
              },
              {
                num: '04',
                title: 'SPACE PLANNING & DESIGN',
                desc: 'Smart, refined layouts that harmonize with your lifestyle.',
                img: curvedImages[3],
                service: 'planning'
              }
            ].map((item) => (
              <div 
                key={item.num}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                onClick={() => handleServiceClick(item.service)}
              >
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-4xl font-bold text-gray-300 mb-2">{item.num}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">PROPERTY SHOWCASE</h3>
            <span className="text-sm text-gray-600">ELEGANT • HIGH-IMPACT</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { img: 'https://static.wixstatic.com/media/6b5032_46765e7ce6814ab09a6645b9e958d627~mv2.jpg/v1/fill/w_1920,h_1440,q_90,enc_avif,quality_auto/6b5032_46765e7ce6814ab09a6645b9e958d627~mv2.jpg', title: 'Living Room', area: '21 m²', sqft: '226 sq ft' },
              { img: 'https://static.wixstatic.com/media/6b5032_5bd476ba49d54800863cd9d93548d29b~mv2.jpg/v1/fill/w_1920,h_1440,q_90,enc_avif,quality_auto/6b5032_5bd476ba49d54800863cd9d93548d29b~mv2.jpg', title: 'Dining Room', area: '9.3 m²', sqft: '100 sq ft' },
              { img: 'https://static.wixstatic.com/media/6b5032_8bb814dcfc27415c8078e87ecdcb3d97~mv2.jpg/v1/fill/w_1920,h_1440,q_90,enc_avif,quality_auto/6b5032_8bb814dcfc27415c8078e87ecdcb3d97~mv2.jpg', title: 'Studio-Kitchen', area: '9.6 m²', sqft: '103 sq ft' },
              { img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop', title: 'TV Lounge', area: 'flexible', sqft: '—' },
              { img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop', title: 'Master Bedroom', area: '18 m² approx', sqft: '194 sq ft' },
              { img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop', title: 'Guest Bedroom', area: '12 m² approx', sqft: '129 sq ft' },
              { img: 'https://images.unsplash.com/photo-1558882224-dda1667334bb?q=80&w=2069&auto=format&fit=crop', title: 'Hallways + Wardrobe', area: 'included', sqft: '—' },
            ].map((room, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={room.img} alt={room.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{room.title}</h4>
                  <p className="text-gray-700 text-sm">{room.area}</p>
                  <span className="text-gray-500 text-xs">{room.sqft}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="carousel" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Professional Services</h3>
            <span className="text-sm text-gray-600">AUTOMATIC SCROLL · PAUSE ON HOVER</span>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-scroll hover:pause">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-4 flex-shrink-0">
                  {[
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2168&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
                  ].map((img, idx) => (
                    <div key={idx} className="w-80 h-60 flex-shrink-0">
                      <img src={img} alt={`service ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">LATEST FROM THE BLOG</h3>
            <span className="text-sm text-gray-600">INSIGHTS & UPDATES</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
                date: 'MARCH 10, 2026',
                title: '5 Tips for Energy-Efficient Roofing',
                desc: 'Reduce your cooling bills with reflective materials and proper insulation. Learn how to choose the best system for your home.',
                msg: '5 tips for energy-efficient roofing - read full article on our blog.'
              },
              {
                img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop',
                date: 'FEBRUARY 22, 2026',
                title: 'Window Replacement: A Homeowner\'s Guide',
                desc: 'Double-pane, low-E coatings, and proper installation – everything you need to know before upgrading your windows.',
                msg: 'Window replacement guide: when to upgrade and what to choose.'
              },
              {
                img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop',
                date: 'JANUARY 15, 2026',
                title: 'Eco-Friendly Materials for Your Remodel',
                desc: 'From recycled steel to low-VOC paints, discover sustainable options that last and reduce your carbon footprint.',
                msg: 'Sustainable materials for modern home remodeling.'
              }
            ].map((article, idx) => (
              <article 
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => handleShowModal(article.msg)}
              >
                <img src={article.img} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">{article.date}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{article.desc}</p>
                  <span className="text-blue-600 font-semibold hover:text-blue-800">READ MORE</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h5 className="font-bold mb-3">LOCATION</h5>
              <p className="text-sm text-gray-300">400 Corporate Point Suite 300<br />Culver City, CA 90230</p>
              <p className="text-sm text-gray-300 mt-2">424 345 2274</p>
              <p className="text-sm text-gray-300">customercare@a1hrinc.com</p>
            </div>
            <div>
              <h5 className="font-bold mb-3">CULVER CITY / LA</h5>
              <p className="text-sm text-gray-300">400 Corporate Point Ste 300<br />Culver City, CA 90230</p>
              <p className="text-sm text-gray-300 mt-2">424 345 2274</p>
              <p className="text-sm text-gray-300">a1hr.david@gmail.com</p>
            </div>
            <div>
              <h5 className="font-bold mb-3">HOURS</h5>
              <p className="text-sm text-gray-300">Mon–Fri 8:00 – 18:00<br />Sat by appointment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">CONTACT US</h3>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input 
                type="email" 
                placeholder="Email" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Address" 
                className="md:col-span-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <textarea 
              rows={4} 
              placeholder="Your message..." 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-800 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-semibold text-gray-900">SUBSCRIBE</span>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button 
              onClick={handleNewsletterSubmit}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">ABOUT US</h2>
          <div className="text-xl text-gray-700 mb-6 leading-relaxed">
            We see the future with every home to create sustainable clean energy reducing our carbon footprint, and leaving a healthy legacy for our children.
          </div>
          <p className="text-gray-600 mb-8">
            For each of our services we have experienced professionals that will handle your project with detail and care.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop" alt="solar sustainable home" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2070&auto=format&fit=crop" alt="green energy" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1558030137-095c21d3ab47?q=80&w=2070&auto=format&fit=crop" alt="remodeling team" className="w-full h-48 object-cover rounded-lg" />
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="font-semibold text-gray-900 mb-2">CULVER CITY / LA</div>
            <p className="text-gray-700">400 Corporate Point Ste 300, Culver City, CA 90230</p>
            <p className="text-gray-700 mt-2">📞 424 345 2274 · ✉️ a1hr.david@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 bg-gray-900 text-white text-center">
        <p className="text-sm">A1 HOME REMODELING INC. — CSLB #1059945 — 21 YEARS — LICENSED & INSURED</p>
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" 
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-md w-full" 
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-gray-900 mb-6">{modalMessage}</p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-gray-900 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
