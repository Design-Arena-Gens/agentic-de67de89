'use client'

import { useState } from 'react'
import { ShoppingBag, Menu, X, Search, User, Heart, ShoppingCart, ChevronRight } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏪' },
    { id: 'footwear', name: 'Footwear', icon: '👟' },
    { id: 'accessories', name: 'Accessories', icon: '🎒' },
    { id: 'coming-soon', name: 'Coming Soon', icon: '✨' }
  ]

  const products = [
    {
      id: 1,
      name: 'Classic Leather Sneakers',
      category: 'footwear',
      price: 4999,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f5f5f5" width="400" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ESneakers%3C/text%3E%3C/svg%3E',
      featured: true
    },
    {
      id: 2,
      name: 'Premium Leather Wallet',
      category: 'accessories',
      price: 1999,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e8e8e8" width="400" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EWallet%3C/text%3E%3C/svg%3E',
      featured: true
    },
    {
      id: 3,
      name: 'Formal Oxford Shoes',
      category: 'footwear',
      price: 6499,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f0f0f0" width="400" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EOxford%3C/text%3E%3C/svg%3E',
      featured: false
    },
    {
      id: 4,
      name: 'Designer Sunglasses',
      category: 'accessories',
      price: 2999,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ececec" width="400" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ESunglasses%3C/text%3E%3C/svg%3E',
      featured: true
    },
    {
      id: 5,
      name: 'Canvas Slip-On Shoes',
      category: 'footwear',
      price: 3499,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f8f8f8" width="400" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ESlip-On%3C/text%3E%3C/svg%3E',
      featured: false
    },
    {
      id: 6,
      name: 'Leather Belt',
      category: 'accessories',
      price: 1499,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5e5e5" width="400" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EBelt%3C/text%3E%3C/svg%3E',
      featured: false
    },
    {
      id: 7,
      name: 'Sports Running Shoes',
      category: 'footwear',
      price: 5499,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f2f2f2" width="400" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ERunning%3C/text%3E%3C/svg%3E',
      featured: true
    },
    {
      id: 8,
      name: 'Leather Messenger Bag',
      category: 'accessories',
      price: 7999,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23efefef" width="400" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EBag%3C/text%3E%3C/svg%3E',
      featured: false
    }
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-8 h-8 text-secondary" />
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                PRAVAAH
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-secondary transition">Home</a>
              <a href="#products" className="text-gray-700 hover:text-secondary transition">Products</a>
              <a href="#about" className="text-gray-700 hover:text-secondary transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-secondary transition">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition">
                <User className="w-5 h-5" />
              </button>
              <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-secondary transition">Home</a>
              <a href="#products" className="block py-2 text-gray-700 hover:text-secondary transition">Products</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-secondary transition">About</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-secondary transition">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Step Into Style with Pravaah
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Premium footwear and men's accessories for the modern gentleman
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-primary px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
                Shop Now
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-6 rounded-lg border-2 transition ${
                  selectedCategory === cat.id
                    ? 'border-secondary bg-yellow-50'
                    : 'border-gray-200 hover:border-secondary'
                }`}
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <div className="font-semibold">{cat.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <div className="flex items-center space-x-2 text-gray-600">
              <span className="text-sm">Sort by:</span>
              <select className="border rounded px-3 py-1 text-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {selectedCategory === 'coming-soon' ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">✨</div>
              <h4 className="text-2xl font-bold mb-2">Exciting Products Coming Soon!</h4>
              <p className="text-gray-600">Stay tuned for new categories and amazing products.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="group border rounded-lg overflow-hidden hover:shadow-xl transition">
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                    />
                    {product.featured && (
                      <span className="absolute top-2 left-2 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-secondary">₹{product.price}</span>
                      <button className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-xl mb-2">Premium Quality</h4>
              <p className="text-gray-600">Handpicked products with guaranteed quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-xl mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Quick and reliable shipping across India</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h4 className="font-bold text-xl mb-2">Easy Returns</h4>
              <p className="text-gray-600">Hassle-free returns within 30 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">About Pravaah</h3>
            <p className="text-lg text-gray-700 mb-4">
              Pravaah represents the flow of contemporary style and timeless elegance. We curate premium footwear and men's accessories that blend craftsmanship with modern design.
            </p>
            <p className="text-lg text-gray-700">
              From classic leather shoes to sophisticated accessories, every product is selected to elevate your personal style. Join us on a journey where quality meets affordability.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8">Subscribe to get exclusive offers and new arrivals</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800"
            />
            <button className="bg-secondary text-primary px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="w-6 h-6 text-secondary" />
                <h4 className="text-xl font-bold">PRAVAAH</h4>
              </div>
              <p className="text-gray-400">Premium footwear and accessories for the modern man</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-secondary transition">About Us</a></li>
                <li><a href="#" className="hover:text-secondary transition">Contact</a></li>
                <li><a href="#" className="hover:text-secondary transition">FAQs</a></li>
                <li><a href="#" className="hover:text-secondary transition">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-secondary transition">Footwear</a></li>
                <li><a href="#" className="hover:text-secondary transition">Accessories</a></li>
                <li><a href="#" className="hover:text-secondary transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-secondary transition">Sale</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact Us</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@pravaah.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Mon-Sat: 10AM - 7PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Pravaah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
