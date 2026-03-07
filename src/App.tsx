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
  X
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white py-2 px-4 md:px-8 flex justify-between items-center text-sm">
        <div className="flex gap-4">
          <Facebook size={16} className="cursor-pointer hover:text-gray-300" />
          <Linkedin size={16} className="cursor-pointer hover:text-gray-300" />
          <Twitter size={16} className="cursor-pointer hover:text-gray-300" />
          <Instagram size={16} className="cursor-pointer hover:text-gray-300" />
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Phone size={16} />
          <span>Call Us: +192 200 23 35</span>
        </div>
        <div className="hidden md:block">
          Jl Tmn Canadyanti Bl P/B-11, Dki Jamaica
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-4 md:px-8 bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="text-2xl font-bold flex items-center gap-2">
          <span className="text-xl">✨</span> SparkleClean
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
          <a href="#" className="hover:text-black transition-colors">Services</a>
          <a href="#" className="hover:text-black transition-colors">Blog</a>
          <a href="#" className="hover:text-black transition-colors">Shop</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button className="bg-black text-white px-6 py-2.5 font-medium hover:bg-gray-800 transition-colors">
            Contact
          </button>
          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingBag size={20} />
            <span className="bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">0</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4 font-medium text-gray-600">
          <a href="#" className="block hover:text-black">Home</a>
          <a href="#" className="block hover:text-black">About</a>
          <a href="#" className="block hover:text-black">Services</a>
          <a href="#" className="block hover:text-black">Blog</a>
          <a href="#" className="block hover:text-black">Shop</a>
          <a href="#" className="block hover:text-black">Contact</a>
          <button className="w-full bg-black text-white px-6 py-2.5 font-medium mt-4">
            Contact
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gray-50 pt-16 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10 order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-6 text-gray-900 tracking-tight">
              Refresh Your Space with Sparkling Clean Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
              Crafting a spotless legacy in home and office care is not just our mission, it's our passion.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#80e5ff] text-black px-8 py-3.5 font-medium hover:bg-[#6bd9f5] transition-colors">
                Book Online
              </button>
              <button className="bg-white text-black px-8 py-3.5 font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                +119 200 23 35
              </button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" 
              alt="Cleaner" 
              className="absolute inset-0 w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 px-4 md:px-8 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-gray-900">3,250+</p>
            <p className="text-gray-500 font-medium tracking-wide">Trusted By</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 opacity-60 grayscale">
            <div className="text-2xl font-bold flex items-center gap-2">hues</div>
            <div className="text-2xl font-bold flex items-center gap-2">Volume</div>
            <div className="text-2xl font-bold flex items-center gap-2">Cactus</div>
            <div className="text-2xl font-bold flex items-center gap-2">SnapShot</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gray-400"></div>
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">About Sparkle Clean</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium mb-6 text-gray-900 leading-tight tracking-tight">
              Sparkle Clean's Commitment to Excellence
            </h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Crafting a spotless legacy in home and office care is not just our mission, it's our passion.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#80e5ff] flex items-center justify-center shrink-0">
                  <Home size={28} className="text-gray-900" />
                </div>
                <span className="text-xl font-medium text-gray-900">Residential Cleaning</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#80e5ff] flex items-center justify-center shrink-0">
                  <Building2 size={28} className="text-gray-900" />
                </div>
                <span className="text-xl font-medium text-gray-900">Commercial Cleaning</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] md:h-[650px]">
            <img 
              src="https://images.unsplash.com/photo-1628177142898-93e46e6a63ee?auto=format&fit=crop&q=80" 
              alt="Cleaners" 
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900 tracking-tight">
              Tailored Solutions for Every Budget and Need
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:
            </p>
            
            <div className="mt-10 inline-flex bg-white p-1 rounded-sm border border-gray-200 shadow-sm">
              <button className="px-8 py-2.5 bg-[#80e5ff] text-black font-medium transition-colors">Monthly</button>
              <button className="px-8 py-2.5 text-gray-500 hover:text-gray-900 font-medium transition-colors">Yearly</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {/* Basic */}
            <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl mb-4 text-gray-900">Basic</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-medium text-gray-900">$29</span>
                <span className="text-gray-500 font-medium">/mo</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">We offer customizable cleaning packages to suit your specific needs.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={20} className="text-[#80e5ff] shrink-0" /> Dusting of surfaces</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={20} className="text-[#80e5ff] shrink-0" /> Sweeping</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={20} className="text-[#80e5ff] shrink-0" /> Kitchen cleaning</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={20} className="text-[#80e5ff] shrink-0" /> Bathroom Cleaning</li>
              </ul>
              <button className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors">Get Started</button>
            </div>

            {/* Most Popular */}
            <div className="bg-[#80e5ff] p-12 shadow-xl transform md:-translate-y-4">
              <h3 className="text-2xl mb-4 text-gray-900">Most Popular</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-6xl font-medium text-gray-900">$59</span>
                <span className="text-gray-800 font-medium">/mo</span>
              </div>
              <p className="text-gray-800 mb-8 leading-relaxed">We offer customizable cleaning packages to suit your specific needs.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-900"><CheckCircle2 size={20} className="text-black shrink-0" /> Dusting of surfaces</li>
                <li className="flex items-center gap-3 text-gray-900"><CheckCircle2 size={20} className="text-black shrink-0" /> Kitchen cleaning</li>
                <li className="flex items-center gap-3 text-gray-900"><CheckCircle2 size={20} className="text-black shrink-0" /> Bathroom Cleaning</li>
                <li className="flex items-center gap-3 text-gray-900"><CheckCircle2 size={20} className="text-black shrink-0" /> Floor Maintenance</li>
                <li className="flex items-center gap-3 text-gray-900"><CheckCircle2 size={20} className="text-black shrink-0" /> Interior window cleaning</li>
                <li className="flex items-center gap-3 text-gray-900"><CheckCircle2 size={20} className="text-black shrink-0" /> General cleaning</li>
              </ul>
              <button className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors">Get Started</button>
            </div>

            {/* Premium */}
            <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl mb-4 text-gray-900">Premium</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-medium text-gray-900">$99</span>
                <span className="text-gray-500 font-medium">/mo</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">We offer customizable cleaning packages to suit your specific needs.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={20} className="text-[#80e5ff] shrink-0" /> Everything in Most Popular</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={20} className="text-[#80e5ff] shrink-0" /> Event cleaning</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={20} className="text-[#80e5ff] shrink-0" /> Basement cleaning</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={20} className="text-[#80e5ff] shrink-0" /> Pool cleaning</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={20} className="text-[#80e5ff] shrink-0" /> 24/7 active</li>
              </ul>
              <button className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gray-400"></div>
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">About Sparkle Clean</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium mb-6 text-gray-900 leading-tight tracking-tight">
              Crafting a Spotless Legacy in Home and Office Care
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Source is a modern wireframe kit designed to reduce busywork—so you can focus on the things that matter.
            </p>
            <button className="bg-black text-white px-10 py-4 font-medium hover:bg-gray-800 transition-colors">
              Contact
            </button>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1584820927498-cafe2c1c869e?auto=format&fit=crop&q=80" 
              alt="Cleaning Supplies" 
              className="w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-12 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="text-2xl font-bold flex items-center gap-2 mb-6 text-gray-900">
              <span className="text-xl">✨</span> SparkleClean
            </div>
            <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
              With a commitment to excellence and a passion for cleanliness, we strive to exceed your expectations with every service.
            </p>
            <div className="flex gap-4 text-gray-400">
              <Facebook size={20} className="hover:text-gray-900 cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-gray-900 cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-gray-900 cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-gray-900 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex mb-12 shadow-sm">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-gray-50 px-6 py-4 flex-1 outline-none text-gray-700 border border-gray-100 border-r-0 focus:border-gray-200"
                />
                <button className="bg-gray-50 px-6 py-4 text-[#80e5ff] hover:text-[#6bd9f5] border border-gray-100 border-l-0 transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Navigation</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Shop</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
