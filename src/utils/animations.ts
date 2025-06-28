// Animation utility functions

/**
 * Add scroll-triggered animations to elements
 */
export const addScrollAnimations = (): void => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));
};

/**
 * Initialize all animations when page loads
 */
export const initializeAnimations = (): void => {
  // Add scroll animations
  addScrollAnimations();
  
  // Add navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
};

/**
 * Smooth scroll to element
 */
export const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * Stagger animation delays for child elements
 */
export const staggerChildren = (parentSelector: string, delay: number = 100): void => {
  const parent = document.querySelector(parentSelector);
  if (parent) {
    const children = parent.children;
    Array.from(children).forEach((child, index) => {
      (child as HTMLElement).style.animationDelay = `${index * delay}ms`;
    });
  }
};