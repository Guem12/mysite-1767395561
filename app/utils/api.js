```javascript
const API_BASE_URL = process.env.NEXT_PUBLIC_DJANGO_API_URL || 'http://localhost:8000/api';

export const apiClient = {
  async get(url) {
    const response = await fetch(`${API_BASE_URL}${url}`)
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  },
  
  async post(url, data) {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  },
  
  async put(url, data) {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  },
  
  async delete(url) {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  }
}

export const vehicleAPI = {
  search: (params) => apiClient.post('/vehicles/search/', params),
  getById: (id) => apiClient.get(`/vehicles/${id}/`),
  getAll: () => apiClient.get('/vehicles/')
}

export const bookingAPI = {
  create: (data) => apiClient.post('/bookings/', data),
  getAll: () => apiClient.get('/bookings/'),
  update: (id, data) =>