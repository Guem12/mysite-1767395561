class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                .navbar {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                }
                
                .navbar.scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                .nav-link {
                    color: #374151;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #3b82f6;
                }
                
                .mobile-menu {
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                }
                
                .mobile-menu.open {
                    transform: translateX(0);
                }
                
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none;
                    }
                }
            </style>
            <nav class="navbar fixed top-0 left-0 right-0 z-50">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="flex justify-between items-center py-4">
                        <!-- Logo -->
                        <a href="index.html" class="flex items-center space-x-2">
                            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <i data-feather="car" class="text-white"></i>
                            </div>
                            <span class="text-xl font-bold text-gray-900">AutoVoyage</span>
                        </a>
                        
                        <!-- Desktop Navigation -->
                        <div class="desktop-nav hidden md:flex items-center space-x-8">
                            <a href="index.html" class="nav-link font-medium">Accueil</a>
                            <a href="vehicles.html" class="nav-link font-medium">Véhicules</a>
                            <a href="about.html" class="nav-link font-medium">À propos</a>
                            <a href="contact.html" class="nav-link font-medium">Contact</a>
                        </div>
                        
                        <!-- Desktop CTA -->
                        <div class="desktop-nav hidden md:flex items-center space-x-4">
                            <a href="login.html" class="nav-link font-medium">Connexion</a>
                            <a href="register.html" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
                                S'inscrire
                            </a>
                        </div>
                        
                        <!-- Mobile Menu Button -->
                        <button class="md:hidden mobile-menu-btn p-2 rounded-lg hover:bg-gray-100 transition duration-300">
                                <i data-feather="menu"></i>
                            </button>
                        </div>
                    </div>
                </nav>
                
                <!-- Mobile Menu -->
                <div class="mobile-menu fixed inset-0 z-40 bg-white md:hidden">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-center p-4 border-b">
                            <span class="text-xl font-bold text-gray-900">AutoVoyage</span>
                            <button class="mobile-close-btn p-2 rounded-lg hover:bg-gray-100">
                                <i data-feather="x"></i>
                            </button>
                        </div>
                        <div class="flex-1 flex flex-col items-center justify-center space-y-8">
                            <a href="index.html" class="text-2xl font-medium text-gray-900 hover:text-blue-600">Accueil</a>
                            <a href="vehicles.html" class="text-2xl font-medium text-gray-900 hover:text-blue-600">Véhicules</a>
                            <a href="about.html" class="text-2xl font-medium text-gray-900 hover:text-blue-600">À propos</a>
                            <a href="contact.html" class="text-2xl font-medium text-gray-900 hover:text-blue-600">Contact</a>
                            <div class="space-y-4">
                                <a href="login.html" class="block text-center bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg transition duration-300">
                                    Connexion
                                </a>
                                <a href="register.html" class="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
                                    S'inscrire
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Add event listeners
            this.setupEventListeners();
        }
        
        setupEventListeners() {
            const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
            const mobileCloseBtn = this.shadowRoot.querySelector('.mobile-close-btn');
            const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
            const navbar = this.shadowRoot.querySelector('.navbar');
            
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('open');
            });
            
            mobileCloseBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
            
            // Scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Close mobile menu when clicking on links
            const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-menu a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                });
            });
        }
    }
    
    customElements.define('custom-navbar', CustomNavbar);