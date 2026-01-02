'use client'

import { useState, useEffect } from 'react'
import { Car, Users, Briefcase, Shield, Clock, Award, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Initialize icons
    const setupDatePickers = () => {
      const today = new Date().toISOString().split('T')[0]
      const dateInputs = document.querySelectorAll('input[type="date"]')
      
      dateInputs.forEach(input => {
        input.min = today
      })
    }

    setupDatePickers()
  }, [])

  const featuredVehicles = [
    {
      id: 1,
      name: 'BMW Série 3',
      price: 89,
      image: 'http://static.photos/automotive/640x360/1',
      seats: 5,
      luggage: 3,
      features: ['Automatique', 'Économique'],
      popular: true
    },
    {
      id: 2,
      name: 'Mercedes Classe C',
      price: 99,
      image: 'http://static.photos/automotive/640x360/2',
      seats: 5,
      luggage: 4,
      features: ['Automatique', 'Luxe']
    },
    {
      id: 3,
      name: 'Audi Q5',
      price: 119,
      image: 'http://static.photos/automotive/640x360/3',
      seats: 5,
      luggage: 5,
      features: ['Automatique', 'SUV']
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Sécurité Totale',
      description: 'Assurance complète et véhicules régulièrement entretenus pour votre tranquillité d\'esprit'
    },
    {
      icon: Clock,
      title: 'Disponibilité 24/7',
      description: 'Service client disponible à tout moment pour répondre à vos besoins'
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Véhicules haut de gamme et service personnalisé pour une expérience unique'
    }
  ]

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search submitted')
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-white/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Car className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-gray-900">AutoVoyage</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Accueil
            </Link>
            <Link href="/vehicles" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Véhicules
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Contact
            </Link>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Connexion
            </Link>
            <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
                S'inscrire
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-300"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white md:hidden">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <span className="text-xl font-bold text-gray-900">AutoVoyage</span>
                <button 
                  className="p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                <Link href="/" className="text-2xl font-medium text-gray-900 hover:text-blue-600">
                  Accueil
                </Link>
                <Link href="/vehicles" className="text-2xl font-medium text-gray-900 hover:text-blue-600">
                  Véhicules
                </Link>
                <Link href="/about" className="text-2xl font-medium text-gray-900 hover:text-blue-600">
                  À propos
                </Link>
                <Link href="/contact" className="text-2xl font-medium text-gray-900 hover:text-blue-600">
                  Contact
                </Link>
                <div className="space-y-4">
                  <Link href="/login" className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg transition duration-300">
                    Connexion
                  </Link>
                  <Link href="/register" className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
                    S'inscrire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="hero-section relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Votre Voyage, <span className="text-yellow-400">Votre Style</span></h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Découvrez notre flotte premium de véhicules pour toutes vos aventures. Réservation simple et sécurisée.</p>
            
            {/* Search Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Lieu de prise en charge</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Paris, France" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Date de début</label>
                  <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Date de fin</label>
                  <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div className="flex items-end">
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                    Trouver un véhicule
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Featured Vehicles */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Véhicules Populaires</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez notre sélection de véhicules les plus demandés</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <div className="relative">
                    <Image 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      width={640}
                      height={360}
                      className="w-full h-56 object-cover"
                    />
                    {vehicle.popular && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Populaire
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                      <span className="text-2xl font-bold text-blue-600">€{vehicle.price}/jour</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="mr-4">{vehicle.seats} places</span>
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{vehicle.luggage} bagages</span>
                    </div>
                    <div className="flex space-x-2 mb-4">
                      {vehicle.features.map((feature, index) => (
                        <span key={index} className={`
                          px-2 py-1 rounded text-sm
                          ${feature === 'Automatique' ? 'bg-blue-100 text-blue-800' : 
                          ${feature === 'Économique' ? 'bg-green-100 text-green-800' :
                          ${feature === 'Luxe' ? 'bg-purple-100 text-purple-800' :
                          'bg-red-100 text-red-800'
                        `}>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/booking/${vehicle.id}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 block text-center"
                    >
                      Réserver maintenant
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir AutoVoyage ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Une expérience de location exceptionnelle</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Car className="text-blue-600 w-4 h-4" />
                </div>
                <span className="text-xl font-bold">AutoVoyage</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Votre partenaire de confiance pour la location de véhicules premium. Expérience exceptionnelle garantie.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="social-icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition duration-300">
                <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="social-icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition duration-300">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="social-icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition duration-300">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="social-icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition duration-300">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Accueil</Link></li>
                  <li><Link href="/vehicles" className="text-gray-300 hover:text-white transition-colors duration-300">Nos Véhicules</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">À Propos</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Location Longue Durée</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Service Entreprise
                  </a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Assurances</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Assistance 24/7
                  </a></li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-gray-300">Paris, France</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-gray-300">+33 1 23 45 67 89</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-gray-300">contact@autovoyage.fr</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Bottom Bar */}
              <div className="border-t border-gray-700 mt-8 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    © 2024 AutoVoyage. Tous droits réservés.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Mentions Légales
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Politique de Confidentialité
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  CGV
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }