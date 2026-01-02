'use client'

import { useState, useEffect } from 'react'

export default function AdminPage() {
  const [bookings, setBookings] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [users, setUsers] = useState([])
  const [activeTab, setActiveTab] = useState('bookings')

  useEffect(() => {
    // Fetch admin data
    fetchAdminData()
  }, [])

  const fetchAdminData = async () => {
    try {
      // This would fetch from Django admin API
      const [bookingsRes, vehiclesRes, usersRes] = await Promise.all([
        fetch('/api/admin/bookings'),
        fetch('/api/admin/vehicles'),
        fetch('/api/admin/users')
      ])
      
      setBookings(await bookingsRes.json())
      setVehicles(await vehiclesRes.json())
      setUsers(await usersRes.json())
    } catch (error) {
      console.error('Error fetching admin data:', error)
    }
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
            <span className="text-xl font-bold text-gray-900">AutoVoyage - Admin</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Tableau de Bord Administrateur</h1>
          
          <div className="border-b mb-8">
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveTab('bookings')}
                className={`pb-4 font-medium ${
                  activeTab === 'bookings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Réservations
              </button>
              <button 
                onClick={() => setActiveTab('vehicles')}
                className={`pb-4 font-medium ${
                  activeTab === 'vehicles' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Véhicules
              </button>
              <button 
                onClick={() => setActiveTab('users')}
                className={`pb-4 font-medium ${
                  activeTab === 'users' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Utilisateurs
              </button>
            </div>
            
            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestion des Réservations</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">ID</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Client</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Véhicule</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Dates</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Statut</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="border-b">
                        <td className="px-6 py-4 text-gray-600">{booking.id}</td>
                        <td className="px-6 py-4 text-gray-600">{booking.customer_name}</td>
                          <td className="px-6 py-4 text-gray-600">{booking.vehicle_name}</td>
                          <td className="px-6 py-4 text-gray-600">{booking.start_date} - {booking.end_date}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded text-sm ${
                              booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                              booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                              <button className="text-blue-600 hover:text-blue-800 mr-2">Modifier</button>
                            <button className="text-red-600 hover:text-red-800">Supprimer</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {/* Vehicles Tab */}
            {activeTab === 'vehicles' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestion de la Flotte</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Véhicule</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Prix/Jour</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Disponibilité</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicles.map((vehicle) => (
                      <tr key={vehicle.id} className="border-b">
                        <td className="px-6 py-4 text-gray-600">{vehicle.name}</td>
                          <td className="px-6 py-4 text-gray-600">{vehicle.type}</td>
                          <td className="px-6 py-4 text-gray-600">€{vehicle.price_per_day}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded text-sm ${
                                vehicle.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {vehicle.available ? 'Disponible' : 'Indisponible'}</span>
                          </td>
                          <td className="px-6 py-4">
                              <button className="text-blue-600 hover:text-blue-800 mr-2">Modifier</button>
                            <button className="text-red-600 hover:text-red-800">Supprimer</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {/* Users Tab */}
            {activeTab === 'users' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestion des Utilisateurs</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Nom</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Email</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Téléphone</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Rôle</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b">
                        <td className="px-6 py-4 text-gray-600">{user.first_name} {user.last_name}</td>
                          <td className="px-6 py-4 text-gray-600">{user.email}</td>
                          <td className="px-6 py-4 text-gray-600">{user.phone}</td>
                          <td className="px-6 py-4 text-gray-600">{user.role}</td>
                          <td className="px-6 py-4">
                              <button className="text-blue-600 hover:text-blue-800 mr-2">Modifier</button>
                          <button className="text-red-600 hover:text-red-800">Supprimer</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}