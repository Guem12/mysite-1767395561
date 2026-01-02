'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function VehiclesPage() {
  const [filter, setFilter] = useState('all')

  const vehicles = [
    {
      id: 1,
      name: 'BMW Série 3',
      price: 89,
      image: 'http://static.photos/automotive/640x360/1',
      type: 'sedan',
      seats: 5,
      luggage: 3,
      transmission: 'Automatique',
      features: ['Climatisation', 'GPS', 'Bluetooth']
    },
    {
      id: 2,
      name: 'Mercedes Classe C',
      price: 99,
      image: 'http://static.photos/automotive/640x360/2',
      type: 'sedan',
      seats: 5,
      luggage: 4,
      transmission: 'Automatique',
      features: ['Climatisation', 'GPS', 'Toit panoramique']
    },
    {
      id: 3,
      name: 'Audi Q5',
      price: 119,
      image: 'http://static.photos/automotive/640x360/3',
      type: 'suv',
      seats: 5,
      luggage: 5,
      transmission: 'Automatique',
      features: ['Climatisation 4 zones', 'GPS', 'Caméra de recul']
    },
    {
      id: 4,
      name: 'Peugeot 308',
      price: 49,
      image: 'http://static.photos/automotive/640x360/4',
      type: 'compact',
      seats: 5,
      luggage: 3,
      transmission: 'Manuelle',
      features: ['Climatisation', 'Bluetooth']
    },
    {
      id: 5,
      name: 'Volkswagen Golf',
      price: 45,
      image: 'http://static.photos/automotive/640x360/5',
      type: 'compact',
      seats: 5,
      luggage: 3,
      transmission: 'Manuelle',
      features: ['Climatisation', 'Radio USB']
    },
    {
      id: 6,
      name: 'Range Rover Evoque',
      price: 149,
      image: 'http://static.photos/automotive/640x360/6',
      type: 'suv',
      seats: 5,
      luggage: 4,
      transmission: 'Automatique',
      features: ['Climatisation 4 zones', 'GPS Premium', 'Sièges chauffants']
    }
  ]

  const filteredVehicles = filter === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === filter)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Car className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-gray-900">AutoVoyage</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Accueil
            </Link>
            <Link href="/vehicles" className="text-blue-600 font-medium">
              Véhicules
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Flotte</h1>
            <p className="text-xl text-gray-600">Choisisez le véhicule parfait pour votre voyage</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg transition duration-300 ${
                  filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('sedan')}
              className={`px-6 py-3 rounded-lg transition duration-300 ${
                  filter === 'sedan' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              Berlines
            </button>
            <button
              onClick={() => setFilter('suv')}
              className={`px-6 py-3 rounded-lg transition duration-300 ${
                  filter === 'suv' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              SUV
            </button>
            <button
              onClick={() => setFilter('compact')}
              className={`px-6 py-3 rounded-lg transition duration-300 ${
                  filter === 'compact' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              Compacts
            </button>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                  <Image 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    width={640}
                    height={360}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                    <span className="text-2xl font-bold text-blue-600">€{vehicle.price}/jour</span>
                  </div>
                  <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{vehicle.seats} places</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span>{vehicle.luggage} bagages</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <span>{vehicle.transmission}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {vehicle.features.map((feature, index) => (
                            <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <Link 
                          href={`/booking/${vehicle.id}`}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 block text-center"
                        >
                          Réserver
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }