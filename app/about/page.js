export default function AboutPage() {
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
            <Link href="/vehicles" className="text-gray-700 hover:text-blue-600 font-medium">
              Véhicules
            </Link>
            <Link href="/about" className="text-blue-600 font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">À Propos d'AutoVoyage</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
          <p className="text-gray-600 mb-6">
            Fondée en 2010, AutoVoyage est née d'une passion pour l'automobile et d'une volonté de réinventer l'expérience de location. 
            Depuis nos débuts, nous nous engageons à fournir des véhicules de qualité exceptionnelle 
            accompagnés d'un service personnalisé.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Mission</h3>
          <p className="text-gray-600 mb-6">
            Rendre accessible la location de véhicules premium grâce à une plateforme 
            moderne, sécurisée et facile d'utilisation.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Digitaliser l'expérience de location</li>
              <li>Améliorer la satisfaction client</li>
              <li>Optimiser la gestion de notre flotte</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-900">Excellence</h4>
            <p className="text-gray-600">Nous nous engageons à fournir des véhicules impeccables et un service irréprochable.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold text-green-900">Innovation</h4>
                <p className="text-gray-600">Nous continuous d'innover pour améliorer votre expérience.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-900">Confiance</h4>
                <p className="text-gray-600">Transparance et sécurité sont au cœur de nos operations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}