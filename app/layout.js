
import './globals.css'
import { AuthProvider } from './context/AuthContext'

export const metadata = {
  title: 'AutoVoyage - Location de Véhicules Premium',
  description: 'Votre partenaire de confiance pour la location de véhicules premium. Expérience exceptionnelle garantie.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
