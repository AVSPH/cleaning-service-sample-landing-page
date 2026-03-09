import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Phone,
  ShoppingBag,
  Home,
  Building2,
  CheckCircle2,
  Send,
  Menu,
  X,
  Star,
  Clock,
  Shield,
  ThumbsUp,
  ChevronDown,
  Plus,
  Minus
} from 'lucide-react';
import { useState } from 'react';

const SERVICES = [
  {
    title: "Residential Cleaning",
    description: "Deep cleaning for your home, from kitchens to bedrooms, ensuring a healthy environment for your family.",
    icon: <Home size={32} />,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" // Placeholder, will replace with generated if possible or keep high quality unsplash
  },
  {
    title: "Commercial Cleaning",
    description: "Professional cleaning services for offices, retail spaces, and commercial buildings of all sizes.",
    icon: <Building2 size={32} />,
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80"
  },
  {
    title: "Specialized Cleaning",
    description: "Post-construction, move-in/move-out, and industrial cleaning services tailored to your needs.",
    icon: <Shield size={32} />,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80"
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "SparkleClean transformed my home! Their attention to detail is unmatched, and the team is so professional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    content: "We've tried many cleaning services, but none compare to SparkleClean. They are reliable and thorough.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Real Estate Agent",
    content: "I always recommend SparkleClean for move-out cleanings. They make every property look brand new.",
    rating: 5
  }
];

const FAQS = [
  {
    question: "How long does a typical cleaning take?",
    answer: "A standard cleaning usually takes 3-5 hours depending on the size and condition of your space."
  },
  {
    question: "Do you provide your own cleaning supplies?",
    answer: "Yes, we bring all necessary eco-friendly cleaning supplies and professional equipment."
  },
  {
    question: "Are your cleaners insured and bonded?",
    answer: "Absolutely. All our professional cleaners are fully insured and bonded for your peace of mind."
  },
  {
    question: "Can I schedule a recurring cleaning?",
    answer: "Yes! We offer flexible weekly, bi-weekly, and monthly scheduling with discounted rates."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white py-2 px-4 md:px-8 flex justify-between items-center text-sm border-b border-white/5">
        <div className="flex gap-4">
          <Facebook size={16} className="cursor-pointer hover:text-[#80e5ff] transition-colors" />
          <Linkedin size={16} className="cursor-pointer hover:text-[#80e5ff] transition-colors" />
          <Twitter size={16} className="cursor-pointer hover:text-[#80e5ff] transition-colors" />
          <Instagram size={16} className="cursor-pointer hover:text-[#80e5ff] transition-colors" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#80e5ff]" />
            <span>+192 200 23 35</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-[#80e5ff]" />
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
        <div className="hidden lg:block text-gray-400">
          Jl Tmn Canadyanti Bl P/B-11, Dki Jamaica
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center py-5 px-4 md:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="text-2xl font-bold flex items-center gap-2 tracking-tight group cursor-pointer">
          <span className="text-2xl group-hover:scale-110 transition-transform">✨</span> 
          <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">SparkleClean</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-gray-600 font-medium">
          <a href="#" className="hover:text-[#00c2ff] transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#80e5ff] transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-[#00c2ff] transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#80e5ff] transition-all group-hover:w-full"></span>
          </a>
          <a href="#services" className="hover:text-[#00c2ff] transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#80e5ff] transition-all group-hover:w-full"></span>
          </a>
          <a href="#pricing" className="hover:text-[#00c2ff] transition-colors relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#80e5ff] transition-all group-hover:w-full"></span>
          </a>
          <a href="#faq" className="hover:text-[#00c2ff] transition-colors relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#80e5ff] transition-all group-hover:w-full"></span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer group">
            <div className="relative">
              <ShoppingBag size={22} className="group-hover:text-[#00c2ff] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#80e5ff] text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold border border-white">0</span>
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-lg active:scale-95">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[116px] bg-white z-40 md:hidden flex flex-col p-6 space-y-6 font-semibold text-xl animate-in slide-in-from-top duration-300">
          <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00c2ff] border-b border-gray-50 pb-2">Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00c2ff] border-b border-gray-50 pb-2">About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00c2ff] border-b border-gray-50 pb-2">Services</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00c2ff] border-b border-gray-50 pb-2">Pricing</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00c2ff] border-b border-gray-50 pb-2">FAQ</a>
          <button className="w-full bg-black text-white px-6 py-4 rounded-xl font-bold mt-4 shadow-xl">
            Book Online
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-20 pb-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#80e5ff]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="z-10 order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-8 uppercase tracking-wider">
              <Star size={16} fill="currentColor" /> Premium Cleaning Service
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 text-black tracking-tighter">
              A Spotless Life <span className="text-gray-400">Starts Here.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed font-medium">
              We bring clinical precision and a personal touch to every space we clean. Experience the SparkleClean difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button className="bg-[#80e5ff] text-black px-10 py-5 rounded-full font-bold hover:bg-[#6bd9f5] transition-all hover:scale-105 shadow-xl shadow-blue-200">
                Book Professional Visit
              </button>
              <button className="bg-white text-black px-10 py-5 rounded-full font-bold border-2 border-gray-100 hover:border-gray-300 transition-all flex items-center justify-center gap-3">
                <Phone size={20} fill="currentColor" /> Call Our Team
              </button>
            </div>
            
            <div className="mt-16 flex items-center justify-center md:justify-start gap-8 opacity-70">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-600">Joined by 10,000+ happy homes</p>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="hero_cleaner_1773054417495.png" 
                alt="Professional Cleaning Service" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">100% Satisfation Guarantee</p>
                  <p className="text-sm text-gray-500">Professional & Trusted Cleaners</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-center p-4 font-bold text-sm transform -rotate-12 shadow-lg z-20">
              Top Rated in 2024!
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Logos */}
      <section className="py-20 px-4 md:px-8 border-y border-gray-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 font-bold tracking-widest uppercase text-xs mb-12">Proudly Serving Premium Clients</p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32 items-center opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
            <span className="text-3xl font-black italic">HUES</span>
            <span className="text-2xl font-bold tracking-tighter uppercase underline decoration-[#80e5ff]">Volume.</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded-sm"></div>
              <span className="text-2xl font-bold">Cactus</span>
            </div>
            <span className="text-3xl font-serif">SnapShot</span>
            <span className="text-2xl font-black tracking-widest uppercase">ECHO</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black tracking-[0.3em] text-[#00c2ff] uppercase mb-6 flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-[2px] bg-[#80e5ff]"></div> Professional Services
              </h2>
              <h3 className="text-5xl md:text-6xl font-extrabold text-black leading-tight tracking-tight">
                Solutions for Every <span className="text-gray-300">Space & Need.</span>
              </h3>
            </div>
            <p className="text-gray-500 text-lg font-medium max-w-sm mb-2">
              From dusty apartments to massive corporate headquarters, we handle it all with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <div key={index} className="group bg-white rounded-[2.5rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-8">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white bg-black/20 backdrop-blur-md p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="px-6 pb-8">
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-[#00c2ff] transition-colors">{service.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-black font-extrabold group/btn">
                    Read Details <span className="group-hover/btn:translate-x-2 transition-transform">â†’</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
              <img 
                src="cleaning_team_1773054432130.png" 
                alt="Expert Cleaning Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 rounded-[2rem] shadow-2xl hidden lg:block">
              <p className="text-5xl font-black mb-1">15+</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-black tracking-[0.3em] text-[#00c2ff] uppercase mb-8 flex items-center gap-3">
              <div className="w-10 h-[2px] bg-[#80e5ff]"></div> Our Commitment
            </h2>
            <h3 className="text-5xl md:text-6xl font-extrabold mb-10 text-gray-900 leading-tight tracking-tight">
              We Don't Just Clean, We <span className="text-gray-300 italic">Restore.</span>
            </h3>
            <p className="text-gray-500 mb-12 text-xl leading-relaxed font-medium">
              We started with a simple belief: a clean space is a productive space. Today, we're proud to be the most trusted name in premium cleaning services across the city.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { label: "Eco-Friendly Products", icon: <CheckCircle2 className="text-green-500" /> },
                { label: "Insured Cleaners", icon: <Shield className="text-[#80e5ff]" /> },
                { label: "Same Day Service", icon: <Clock className="text-[#80e5ff]" /> },
                { label: "Fixed Pricing", icon: <ThumbsUp className="text-[#80e5ff]" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-bold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>

            <button className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition-all hover:shadow-xl active:scale-95">
              Learn Our Method
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-4 md:px-8 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#80e5ff]/5 -skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 uppercase tracking-[0.2em]">
            <h2 className="text-[#80e5ff] font-black text-sm mb-4">Simple 3-Step Process</h2>
            <h3 className="text-5xl md:text-7xl font-black">How We <span className="text-[#80e5ff]">Sparkle.</span></h3>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-800 to-transparent -translate-y-12"></div>
            {[
              { step: "01", title: "Book Online", desc: "Select your service, date, and preferred time in just 60 seconds." },
              { step: "02", title: "Professional arrives", desc: "Our background-checked professional arrives at your doorstep fully equipped." },
              { step: "03", title: "Space Transformed", desc: "Enjoy your perfectly cleaned and sanitized space with our satisfaction guarantee." },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="w-24 h-24 bg-[#1a1a1a] border-2 border-gray-800 rounded-3xl flex items-center justify-center text-4xl font-black text-[#80e5ff] mb-10 group-hover:scale-110 group-hover:border-[#80e5ff] transition-all duration-500">
                  {item.step}
                </div>
                <h4 className="text-3xl font-bold mb-6">{item.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#00c2ff] font-black tracking-widest uppercase text-xs mb-6">Simple Pricing</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-8 text-black tracking-tight">
              Honest Plans for <span className="text-gray-300">Honest Work.</span>
            </h3>
            
            <div className="mt-12 inline-flex bg-white p-2 rounded-2xl border-2 border-gray-100 shadow-sm">
              <button className="px-10 py-3 bg-black text-white rounded-xl font-bold transition-all">Monthly</button>
              <button className="px-10 py-3 text-gray-400 hover:text-black font-bold transition-all">Bi-Weekly</button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-stretch max-w-6xl mx-auto">
            {/* Basic */}
            <div className="bg-white p-12 rounded-[3.5rem] border-2 border-white shadow-xl hover:shadow-2xl transition-all flex flex-col group">
              <h3 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-8">Starter Pack</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-6xl font-black text-black">$29</span>
                <span className="text-gray-400 font-bold text-xl">/ visit</span>
              </div>
              <p className="text-gray-500 font-medium mb-10 leading-relaxed">Perfect for small apartments and quick touch-ups.</p>
              <div className="space-y-5 mb-12 flex-1">
                {["Living Room Cleaning", "Bathroom Sanitization", "Kitchen Countertops", "Dusting & Sweeping"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-900 font-bold">
                    <CheckCircle2 size={24} className="text-[#80e5ff]" /> {feat}
                  </div>
                ))}
              </div>
              <button className="w-full bg-gray-50 text-black py-6 rounded-3xl font-black hover:bg-black hover:text-white transition-all">Get Started</button>
            </div>

            {/* Premium / Most Popular */}
            <div className="bg-[#80e5ff] p-12 rounded-[3.5rem] shadow-2xl shadow-blue-200 transform lg:-translate-y-8 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-black text-white px-8 py-3 font-black text-xs uppercase tracking-widest rounded-bl-3xl">Best Value</div>
              <h3 className="text-xs font-black tracking-widest text-[#006e8a] uppercase mb-8">Premium Choice</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-7xl font-black text-black">$59</span>
                <span className="text-[#006e8a] font-bold text-xl">/ visit</span>
              </div>
              <p className="text-[#006e8a] font-semibold mb-10 leading-relaxed italic">The favorite choice for families and busy professionals.</p>
              <div className="space-y-6 mb-12 flex-1">
                {["Everything in Starter", "Deep Kitchen Cleaning", "Floor Deep Scrubbing", "Window Polish", "Bedroom Linen Service"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-4 text-black font-black">
                    <CheckCircle2 size={24} className="text-black" /> {feat}
                  </div>
                ))}
              </div>
              <button className="w-full bg-black text-white py-6 rounded-3xl font-black hover:scale-105 transition-all shadow-xl">Secure This Plan</button>
            </div>

            {/* Deluxe */}
            <div className="bg-white p-12 rounded-[3.5rem] border-2 border-white shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <h3 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-8">Elite Solution</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-6xl font-black text-black">$99</span>
                <span className="text-gray-400 font-bold text-xl">/ visit</span>
              </div>
              <p className="text-gray-500 font-medium mb-10 leading-relaxed">Comprehensive restoration for large estates and luxury homes.</p>
              <div className="space-y-5 mb-12 flex-1">
                {["Everything in Premium", "Carpet Steam Cleaning", "Garage Sanitization", "Pool Area Maintenance", "24/7 Priority Support"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-900 font-bold">
                    <CheckCircle2 size={24} className="text-[#80e5ff]" /> {feat}
                  </div>
                ))}
              </div>
              <button className="w-full bg-gray-50 text-black py-6 rounded-3xl font-black hover:bg-black hover:text-white transition-all">Book Elite</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 md:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#00c2ff] font-black tracking-widest uppercase text-xs mb-6">Real Reviews</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-10 text-black">Loved by <span className="underline decoration-[#80e5ff]">Humans.</span></h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[3rem] relative group border-2 border-transparent hover:border-[#80e5ff] transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-xl font-semibold mb-10 text-gray-900 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 leading-none mb-1">{t.name}</h4>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.role}</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 text-8xl font-serif text-[#80e5ff]/20 -z-10 group-hover:text-[#80e5ff]/40 transition-colors tracking-tighter">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-4 md:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#00c2ff] font-black tracking-widest uppercase text-xs mb-6">Got Questions?</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-10 text-black">We've Got <span className="text-gray-300">Answers.</span></h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border-2 border-white shadow-sm hover:shadow-md transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-black text-gray-900">{faq.question}</span>
                  <div className={`p-2 rounded-full transition-all ${activeFaq === i ? 'bg-black text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-[#80e5ff] group-hover:text-black'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={`px-8 transition-all duration-300 ${activeFaq === i ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-500 font-medium text-lg leading-relaxed border-t border-gray-50 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-black text-white p-10 rounded-[3rem] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-2xl font-bold mb-6">Still have questions?</p>
            <button className="bg-[#80e5ff] text-black px-10 py-5 rounded-full font-black hover:scale-105 transition-all">Contact Our Experts</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-[4rem] p-12 md:p-24 grid lg:grid-cols-2 gap-20 items-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <h2 className="text-[#80e5ff] font-black tracking-widest uppercase text-sm mb-8">Ready for a Sparkle?</h2>
              <h3 className="text-5xl md:text-7xl font-extrabold mb-10 text-white leading-[1.1] tracking-tighter">
                Claim Your Weekend <span className="text-[#80e5ff] italic">Back.</span>
              </h3>
              <p className="text-gray-400 mb-12 text-xl leading-relaxed font-medium">
                Book in 60 seconds and our professional team will take care of the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-[#80e5ff] text-black px-12 py-5 rounded-full font-black hover:bg-[#6bd9f5] transition-all hover:scale-105 shadow-2xl shadow-blue-500/20">
                  Book Initial Clean
                </button>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-full backdrop-blur">
                  <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <span className="text-white font-bold text-sm">Next Availability: Today, 3PM</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[600px] group">
              <div className="absolute inset-0 border-[20px] border-white/5 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="cleaning_supplies_premium_1773054448113.png" 
                alt="Elite Cleaning Supplies" 
                className="w-full h-full object-cover rounded-[3rem] shadow-2xl transform group-hover:-rotate-2 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-16 px-4 md:px-8 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-20 mb-32">
            <div className="lg:col-span-1">
              <div className="text-3xl font-black flex items-center gap-2 mb-10">
                <span className="text-2xl">✨</span> SparkleClean
              </div>
              <p className="text-gray-400 mb-12 font-medium leading-relaxed text-lg">
                The city's most trusted name in premium residential and commercial cleaning since 2010.
              </p>
              <div className="flex gap-6">
                <Facebook size={24} className="hover:text-[#80e5ff] cursor-pointer transition-colors" />
                <Linkedin size={24} className="hover:text-[#80e5ff] cursor-pointer transition-colors" />
                <Twitter size={24} className="hover:text-[#80e5ff] cursor-pointer transition-colors" />
                <Instagram size={24} className="hover:text-[#80e5ff] cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-xl mb-10 tracking-tight">Services</h4>
              <ul className="space-y-6 text-gray-400 font-bold">
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">House Cleaning</a></li>
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">Office Cleaning</a></li>
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">Oven Deep Clean</a></li>
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">Window Washing</a></li>
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">Carpet Steam</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-10 tracking-tight">Company</h4>
              <ul className="space-y-6 text-gray-400 font-bold">
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">Cleaners</a></li>
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-[#80e5ff] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
              <h4 className="font-black text-xl mb-8 tracking-tight">Newsletter</h4>
              <p className="text-gray-400 mb-8 font-medium">Join 500+ subscribers getting cleaning tips weekly.</p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full bg-[#333] px-6 py-5 rounded-2xl outline-none text-white border border-transparent focus:border-[#80e5ff] transition-all font-bold"
                />
                <button className="w-full bg-[#80e5ff] text-black px-6 py-5 rounded-2xl font-black hover:bg-[#6bd9f5] transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 font-bold text-sm tracking-widest">
            <p uppercase>Â© 2024 SPARKLECLEAN SOLUTIONS INC.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
