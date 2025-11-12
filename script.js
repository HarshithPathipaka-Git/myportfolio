
// Project data
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack online shopping platform with payment integration, user authentication, and admin dashboard.",
        fullDescription: "A comprehensive e-commerce solution built with modern web technologies. This platform provides a complete shopping experience with user authentication, product catalog management, shopping cart functionality, secure payment processing through Stripe, and a powerful admin dashboard for managing inventory and orders. The application is fully responsive and optimized for performance.",
        tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        features: [
            "User authentication and authorization with JWT",
            "Product catalog with advanced search and filtering",
            "Shopping cart with persistent storage",
            "Secure payment processing with Stripe",
            "Admin dashboard for product and order management",
            "Email notifications for orders",
            "Responsive design optimized for all devices"
        ],
        timeline: "3 months",
        role: "Full-Stack Developer",
        github: "https://github.com/harshithpathipaka",
        demo: "https://example.com"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration.",
        fullDescription: "A modern task management application designed for team collaboration. Built with React and Firebase, it offers real-time synchronization, intuitive drag-and-drop interface for organizing tasks, team member assignments, deadline tracking, and progress monitoring. Perfect for agile teams and project coordination.",
        tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "React DnD"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        features: [
            "Real-time task updates across all users",
            "Drag-and-drop kanban board interface",
            "Team collaboration with member assignments",
            "Deadline tracking and notifications",
            "Project progress visualization",
            "File attachments and comments"
        ],
        timeline: "2 months",
        role: "Frontend Developer",
        github: "https://github.com/harshithpathipaka",
        demo: "https://example.com"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather monitoring application with location-based forecasts and interactive maps.",
        fullDescription: "An advanced weather dashboard that provides comprehensive weather information including current conditions, hourly forecasts, and 7-day predictions. Features interactive maps showing weather patterns, temperature trends, and precipitation forecasts. Built using OpenWeather API and Chart.js for data visualization.",
        tech: ["JavaScript", "OpenWeather API", "Chart.js", "Leaflet", "HTML5", "CSS3"],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
        features: [
            "Current weather conditions for any location",
            "Hourly and 7-day weather forecasts",
            "Interactive weather maps",
            "Temperature and precipitation charts",
            "Location-based weather alerts",
            "Favorite locations management"
        ],
        timeline: "1 month",
        role: "Solo Developer",
        github: "https://github.com/harshithpathipaka",
        demo: "https://example.com"
    }
];

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
    } else if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScroll) {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Project modal
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const project = projects[index];
        showProjectModal(project);
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

function showProjectModal(project) {
    modalBody.innerHTML = `
        <h2 style="font-size: 2rem; margin-bottom: 1rem;">${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 8px; margin-bottom: 1.5rem;">
        
        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">About</h3>
            <p style="color: var(--text-light); line-height: 1.8;">${project.fullDescription}</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Technologies</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Key Features</h3>
            <ul style="color: var(--text-light); line-height: 1.8; padding-left: 1.5rem;">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
            <div>
                <h4 style="font-size: 1rem; margin-bottom: 0.3rem;">Timeline</h4>
                <p style="color: var(--text-light);">${project.timeline}</p>
            </div>
            <div>
                <h4 style="font-size: 1rem; margin-bottom: 0.3rem;">Role</h4>
                <p style="color: var(--text-light);">${project.role}</p>
            </div>
        </div>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${project.github}" target="_blank" class="btn btn-primary" style="flex: 1; text-align: center;">View on GitHub</a>
            <a href="${project.demo}" target="_blank" class="btn btn-outline" style="flex: 1; text-align: center; color: var(--primary-color); border-color: var(--primary-color);">Live Demo</a>
        </div>
    `;
    
    modal.classList.add('active');
}

// Contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-category, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
