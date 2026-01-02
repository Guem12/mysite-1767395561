// Main JavaScript for AutoVoyage

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set up date pickers with min dates
    setupDatePickers();
    
    // Initialize vehicle filters
    setupVehicleFilters();
    
    // Handle form submissions
    setupFormHandlers();
    
    // Add scroll animations
    setupScrollAnimations();
}

function setupDatePickers() {
    const today = new Date().toISOString().split('T')[0];
    const startDateInputs = document.querySelectorAll('input[type="date"]');
    
    startDateInputs.forEach(input => {
        input.min = today;
        
        // Update end date min when start date changes
        if (input.previousElementSibling && input.previousElementSibling.type === 'date') {
            input.addEventListener('change', function() {
                const endDateInput = this;
                const startDateInput = this.previousElementSibling;
                
                if (startDateInput.value) {
                    endDateInput.min = startDateInput.value;
                }
            });
        }
    });
}

function setupVehicleFilters() {
    // This would be connected to a real API in production
    console.log('Vehicle filters initialized');
}

function setupFormHandlers() {
    const searchForm = document.querySelector('form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSearchSubmit(this);
        });
    }
    
    // Add click handlers for reservation buttons
    const reserveButtons = document.querySelectorAll('button:contains("Réserver maintenant")');
    reserveButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleReservationClick(this);
        });
    });
}

function handleSearchSubmit(form) {
    const formData = new FormData(form);
    const searchParams = {
        location: formData.get('location') || form.querySelector('input[type="text"]').value,
        startDate: formData.get('startDate') || form.querySelectorAll('input[type="date"]')[0].value,
        endDate: formData.get('endDate') || form.querySelectorAll('input[type="date"]')[1].value
    };
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<div class="loading-spinner mx-auto"></div>';
    
    // Simulate API call
    setTimeout(() => {
        submitButton.textContent = originalText;
        window.location.href = 'vehicles.html?search=' + encodeURIComponent(JSON.stringify(searchParams));
    window.location.href = 'vehicles.html?search=' + encodeURIComponent(JSON.stringify(searchParams));
    }, 1500);
}

function handleReservationClick(button) {
    const vehicleCard = button.closest('.bg-white');
    const vehicleName = vehicleCard.querySelector('h3').textContent;
    const vehiclePrice = vehicleCard.querySelector('.text-2xl').textContent;
    
    // Store vehicle info for booking page
    sessionStorage.setItem('selectedVehicle', JSON.stringify({
        name: vehicleName,
        price: vehiclePrice
    }));
    
    window.location.href = 'booking.html';
}

function setupScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// API integration functions (placeholder for real implementation)
class AutoVoyageAPI {
    static async searchVehicles(params) {
        // This would connect to your backend API
        const response = await fetch('/api/vehicles/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        
        return await response.json();
    }
    
    static async getVehicleDetails(vehicleId) {
        const response = await fetch(`/api/vehicles/${vehicleId}`);
        return await response.json();
    }
    
    static async createBooking(bookingData) {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        });
        
        return await response.json();
    }
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
}

function calculateDaysBetween(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}