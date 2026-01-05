// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Toggle icon
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar')) {
      navMenu?.classList.remove('active');
      const icon = mobileToggle?.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    }
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Close mobile menu after navigation
          navMenu?.classList.remove('active');
        }
      }
    });
  });

  // Header Shadow on Scroll
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Intersection Observer for Fade-in Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  const animateElements = document.querySelectorAll('.feature-card, .course-card, .blog-card, .testimonial-card, .resource-type-card');
  animateElements.forEach(el => observer.observe(el));

  // Search Functionality
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const cards = document.querySelectorAll('.course-card, .blog-card, .resource-type-card');
      
      cards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';
        const category = card.querySelector('.course-category, .blog-category')?.textContent.toLowerCase() || '';
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Newsletter Form Submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      
      if (emailInput && emailInput.value) {
        // Show success message (you can replace this with actual form submission logic)
        alert('Thank you for subscribing! We\'ll keep you updated with the latest UPSC preparation resources.');
        emailInput.value = '';
      }
    });
  }

  // Contact Form Validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[name="name"]');
      const email = this.querySelector('input[name="email"]');
      const message = this.querySelector('textarea[name="message"]');
      
      let isValid = true;

      // Basic validation
      if (!name?.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
      }

      if (!email?.value.trim() || !isValidEmail(email.value)) {
        showError(email, 'Valid email is required');
        isValid = false;
      }

      if (!message?.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
      }

      if (isValid) {
        // Show success message (replace with actual form submission)
        alert('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset();
      }
    });
  }

  // Form Validation Helpers
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const error = formGroup.querySelector('.error-message') || document.createElement('span');
    error.className = 'error-message';
    error.style.color = '#EF4444';
    error.style.fontSize = '0.875rem';
    error.style.marginTop = '0.25rem';
    error.style.display = 'block';
    error.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
      formGroup.appendChild(error);
    }

    input.style.borderColor = '#EF4444';

    // Remove error on input
    input.addEventListener('input', function() {
      error.remove();
      input.style.borderColor = '';
    }, { once: true });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Category Filter for Blog
  const categoryButtons = document.querySelectorAll('.category-filter-btn');
  if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter blog cards
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
          const cardCategory = card.querySelector('.blog-category')?.textContent;
          
          if (category === 'all' || cardCategory === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Course Filter
  const courseFilterButtons = document.querySelectorAll('.course-filter-btn');
  if (courseFilterButtons.length > 0) {
    courseFilterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update active button
        courseFilterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter course cards
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach(card => {
          const cardCategory = card.querySelector('.course-category')?.textContent;
          
          if (category === 'all' || cardCategory === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Lazy Loading Images
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });

  // Back to Top Button
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTop.className = 'back-to-top';
  backToTop.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-blue);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;
  
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.style.opacity = '1';
    } else {
      backToTop.style.opacity = '0';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  backToTop.addEventListener('mouseenter', () => {
    backToTop.style.transform = 'translateY(-5px)';
  });

  backToTop.addEventListener('mouseleave', () => {
    backToTop.style.transform = 'translateY(0)';
  });

  // Active Navigation Link
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
      link.classList.add('active');
    }
  });

  // Console Welcome Message
  console.log('%c UPSC Vision Prep ', 'background: #2B7FFF; color: white; font-size: 20px; padding: 10px;');
  console.log('%c Master the Art of Civil Services ', 'color: #1a1f3a; font-size: 14px;');
});

// Resource Type Cards Click Handler
document.addEventListener('click', function(e) {
  const resourceCard = e.target.closest('.resource-type-card');
  if (resourceCard) {
    const resourceType = resourceCard.querySelector('h3')?.textContent;
    console.log('Clicked resource type:', resourceType);
    // You can add navigation logic here
  }
});

// Course Enrollment Handler
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn-enroll')) {
    e.preventDefault();
    const courseName = e.target.closest('.course-card')?.querySelector('h3')?.textContent;
    alert(`Enrollment process for "${courseName}" will be available soon!`);
  }
});
