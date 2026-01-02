class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                .footer {
                    background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
                    color: white;
                }
                
                .footer-link {
                    color: #d1d5db;
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: white;
                }
                
                .social-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .social-icon:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }
            </style>
            <footer class="footer">
                <div class="max-w-7xl mx-auto px-4 py-12">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <!-- Company Info -->
                        <div class="col-span-1 md:col-span-2">
                            <div class="flex items-center space-x-2 mb-4">
                                <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                    <i data-feather="car" class="text-blue-600"></i>
                                </div>
                                <span class="text-xl font-bold">AutoVoyage</span>
                            </div>
                            <p class="text-gray-300 mb-4 max-w-md">
                                Votre partenaire de confiance pour la location de véhicules premium. Expérience exceptionnelle garantie.
                            </p>
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon">
                                    <i data-feather="facebook"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i data-feather="linkedin"></i>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Quick Links -->
                        <div>
                            <h3 class="text-lg font-bold mb-4">Liens Rapides</h3>
                            <ul class="space-y-2">
                                <li><a href="index.html" class="footer-link">Accueil</a></li>
                                <li><a href="vehicles.html" class="footer-link">Nos Véhicules</a></li>
                                <li><a href="about.html" class="footer-link">À Propos</a></li>
                                <li><a href="contact.html" class="footer-link">Contact</a></li>
                            </ul>
                        </div>
                        
                        <!-- Services -->
                        <div>
                            <h3 class="text-lg font-bold mb-4">Services</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="footer-link">Location Longue Durée</a></li>
                                <li><a href="#" class="footer-link">Service Entreprise</a></li>
                                <li><a href="#" class="footer-link">Assurances</a></li>
                                <li><a href="#" class="footer-link">Assistance 24/7</a></li>
                            </ul>
                        </div>
                        
                        <!-- Contact -->
                        <div>
                            <h3 class="text-lg font-bold mb-4">Contact</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center">
                                    <i data-feather="map-pin" class="w-4 h-4 mr-2"></i>
                                    <span class="footer-link">Paris, France</span>
                                </li>
                                <li class="flex items-center">
                                    <i data-feather="phone" class="w-4 h-4 mr-2"></i>
                                    <span class="footer-link">+33 1 23 45 67 89</span>
                                </li>
                                <li class="flex items-center">
                                    <i data-feather="mail" class="w-4 h-4 mr-2"></i>
                                    <span class="footer-link">contact@autovoyage.fr</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Bottom Bar -->
                    <div class="border-t border-gray-700 mt-8 pt-8">
                        <div class="flex flex-col md:flex-row justify-between items-center">
                            <p class="text-gray-400 text-sm mb-4 md:mb-0">
                                © 2024 AutoVoyage. Tous droits réservés.
                            </p>
                            <div class="flex space-x-6">
                                <a href="#" class="footer-link text-sm">Mentions Légales</a>
                            <a href="#" class="footer-link text-sm">Politique de Confidentialité</a>
                            <a href="#" class="footer-link text-sm">CGV</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
        
        // Initialize icons when component is connected
        this.initializeIcons();
    }
    
    initializeIcons() {
        // Feather icons will be replaced when the main script runs
        // This ensures icons are properly displayed
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-footer', CustomFooter);