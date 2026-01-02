'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function BookingPage() {
  const params = useParams()
  const router = useRouter()
  const [vehicle, setVehicle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVehicleDetails()
  }, [params.id])

  const fetchVehicleDetails = async () => {
    try {
      const response = await fetch(`/api/vehicles/${params.id}`)
      const vehicleData = await response.json()
      setVehicle(vehicleData)
    } catch (error) {
      console.error('Error fetching vehicle:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">Véhicule non trouvé</h2>
        <button 
          onClick={() => router.push('/vehicles')}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Retour aux véhicules
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Car className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-gray-900">AutoVoyage</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Réservation - {vehicle.name}</h1>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Téléphone</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Lieu de prise en charge</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Informations de location</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Date de début</label>
              <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Date de fin</label>
              <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Paiement</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Numéro de carte</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nom sur la carte</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
              <button 
                type="button"
                onClick={() => router.back()}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition duration-300">
                Retour
              </button>
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300">
                Confirmer la réservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}