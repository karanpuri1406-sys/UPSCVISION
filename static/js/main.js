// ===================================================
// UPSC Vision Prep - Interactive JavaScript
// Enhanced User Experience & Animations
// ===================================================

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initStickyHeader();
  initSmoothScroll();
  initAnimateOnScroll();
  initCounters();
  initFormValidation();
  initTooltips();
  initBackToTop();
  initLazyLoading();
  initSearchFeature();
});

// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');
  const body = document.body;
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    // Toggle icon
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });
  
  // Close menu when clicking on a link
  const navLinks = menu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });
}

// ===== STICKY HEADER =====
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only process if it's an internal anchor
      if (href === '#' || href.length <= 1) return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const targetPosition = target.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// ===== ANIMATE ON SCROLL =====
function initAnimateOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Elements to animate
  const animatedElements = document.querySelectorAll(`
    .feature-card,
    .course-card,
    .testimonial-card,
    .why-choose-card,
    .metric-card,
    .program-card,
    .blog-card,
    .team-member
  `);
  
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });
  
  // Add animated class styles
  const style = document.createElement('style');
  style.textContent = `
    .aos-animate {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

// ===== ANIMATED COUNTERS =====
function initCounters() {
  const counters = document.querySelectorAll('.stat-item h3, .metric-number');
  if (counters.length === 0) return;
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const text = element.textContent;
  const match = text.match(/(\d+[\d,]*)/);
  
  if (!match) return;
  
  const numberStr = match[1].replace(/,/g, '');
  const target = parseInt(numberStr);
  const suffix = text.replace(match[1], '').trim();
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(function() {
    current += increment;
    
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    const formatted = Math.floor(current).toLocaleString();
    element.textContent = formatted + (suffix ? ' ' + suffix : '');
  }, 16);
}

// ===== FORM VALIDATION =====
function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validateForm(form)) {
        e.preventDefault();
      }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });
      
      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateField(this);
        }
      });
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let message = '';
  
  // Remove previous error
  removeError(field);
  
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    message = 'This field is required';
  } else if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      message = 'Please enter a valid email address';
    }
  } else if (field.type === 'tel' && value) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(value) || value.length < 10) {
      isValid = false;
      message = 'Please enter a valid phone number';
    }
  }
  
  if (!isValid) {
    showError(field, message);
  }
  
  return isValid;
}

function showError(field, message) {
  field.classList.add('error');
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  errorDiv.style.color = '#ef4444';
  errorDiv.style.fontSize = '0.875rem';
  errorDiv.style.marginTop = '0.25rem';
  
  field.parentNode.appendChild(errorDiv);
  
  // Add error styles to field
  field.style.borderColor = '#ef4444';
}

function removeError(field) {
  field.classList.remove('error');
  field.style.borderColor = '';
  
  const errorMessage = field.parentNode.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}

// ===== TOOLTIPS =====
function initTooltips() {
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  
  tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      showTooltip(this);
    });
    
    element.addEventListener('mouseleave', function() {
      hideTooltip(this);
    });
  });
}

function showTooltip(element) {
  const text = element.getAttribute('data-tooltip');
  if (!text) return;
  
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  tooltip.style.cssText = `
    position: absolute;
    background: #1f2937;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    white-space: nowrap;
    z-index: 1000;
    pointer-events: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  `;
  
  document.body.appendChild(tooltip);
  
  const rect = element.getBoundingClientRect();
  tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
  tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + window.scrollY + 'px';
  
  element._tooltip = tooltip;
}

function hideTooltip(element) {
  if (element._tooltip) {
    element._tooltip.remove();
    delete element._tooltip;
  }
}

// ===== BACK TO TOP BUTTON =====
function initBackToTop() {
  // Create button
  const button = document.createElement('button');
  button.className = 'back-to-top';
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.setAttribute('aria-label', 'Back to top');
  button.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 999;
  `;
  
  document.body.appendChild(button);
  
  // Show/hide based on scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
      button.style.display = 'flex';
      setTimeout(() => button.style.opacity = '1', 10);
    } else {
      button.style.opacity = '0';
      setTimeout(() => button.style.display = 'none', 300);
    }
  });
  
  // Hover effect
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
  });
  
  // Scroll to top
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===== LAZY LOADING IMAGES =====
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// ===== SEARCH FEATURE =====
function initSearchFeature() {
  const searchInput = document.querySelector('.search-input');
  if (!searchInput) return;
  
  let searchTimeout;
  
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    const query = this.value.trim().toLowerCase();
    
    if (query.length < 2) {
      clearSearchResults();
      return;
    }
    
    searchTimeout = setTimeout(() => performSearch(query), 300);
  });
}

function performSearch(query) {
  // This is a basic client-side search
  // In production, you'd want to implement server-side search
  const searchableElements = document.querySelectorAll('.course-card, .blog-card, .resource-item');
  let results = [];
  
  searchableElements.forEach(element => {
    const text = element.textContent.toLowerCase();
    if (text.includes(query)) {
      results.push({
        title: element.querySelector('h3')?.textContent || '',
        link: element.querySelector('a')?.href || '#'
      });
    }
  });
  
  displaySearchResults(results);
}

function displaySearchResults(results) {
  let resultsContainer = document.querySelector('.search-results');
  
  if (!resultsContainer) {
    resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';
    resultsContainer.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      margin-top: 0.5rem;
      max-height: 400px;
      overflow-y: auto;
      z-index: 100;
    `;
    
    const searchInput = document.querySelector('.search-input');
    searchInput.parentNode.style.position = 'relative';
    searchInput.parentNode.appendChild(resultsContainer);
  }
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<div style="padding: 1rem; text-align: center; color: #6b7280;">No results found</div>';
    return;
  }
  
  resultsContainer.innerHTML = results.map(result => `
    <a href="${result.link}" style="display: block; padding: 1rem; border-bottom: 1px solid #e5e7eb; color: #374151; text-decoration: none;">
      ${result.title}
    </a>
  `).join('');
}

function clearSearchResults() {
  const resultsContainer = document.querySelector('.search-results');
  if (resultsContainer) {
    resultsContainer.remove();
  }
}

// ===== COURSE FILTERS =====
function initCourseFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter;
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter courses
      courseCards.forEach(card => {
        const category = card.dataset.category;
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });
}

// ===== FAQ ACCORDION =====
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (!question || !answer) return;
    
    // Initially hide answers
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.3s ease';
    
    question.style.cursor = 'pointer';
    question.style.position = 'relative';
    question.style.paddingRight = '2rem';
    
    // Add toggle icon
    const icon = document.createElement('i');
    icon.className = 'fas fa-chevron-down';
    icon.style.cssText = `
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: transform 0.3s ease;
    `;
    question.appendChild(icon);
    
    question.addEventListener('click', function() {
      const isOpen = item.classList.contains('open');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.fa-chevron-down');
          if (otherAnswer) otherAnswer.style.maxHeight = '0';
          if (otherIcon) otherIcon.style.transform = 'translateY(-50%) rotate(0deg)';
        }
      });
      
      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
        icon.style.transform = 'translateY(-50%) rotate(0deg)';
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'translateY(-50%) rotate(180deg)';
      }
    });
  });
}

// Initialize FAQ accordion if FAQ items exist
if (document.querySelector('.faq-item')) {
  initFAQAccordion();
}

// Initialize course filters if filter buttons exist
if (document.querySelector('.filter-btn')) {
  initCourseFilters();
}

// ===== LOADING ANIMATION =====
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 300);
  }
});

// ===== CONSOLE MESSAGE =====
console.log('%cUPSC Vision Prep', 'font-size: 24px; font-weight: bold; color: #2563eb;');
console.log('%cYour Journey to Civil Services Starts Here', 'font-size: 14px; color: #6b7280;');
console.log('%cWebsite developed with ❤️', 'font-size: 12px; color: #10b981;');
