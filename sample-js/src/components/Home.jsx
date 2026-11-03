import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&h=600&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Step into Style
          </h1>
          <p className="hero-subtitle">
            Discover the latest collection of premium sneakers from top brands
          </p>
          <Link to="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <div className="image-slider">
            {heroImages.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Sneakers ${index + 1}`}
                className={`slider-image ${index === currentImage ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="slider-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid-home">
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>100% Authentic</h3>
            <p>All products are guaranteed authentic from official suppliers</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Free delivery on all orders with fast and secure shipping</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">↩️</div>
            <h3>Easy Returns</h3>
            <p>30-day return policy with hassle-free refunds</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>Safe and secure payment methods for your peace of mind</p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <h2 className="section-title">Featured Brands</h2>
        <div className="brands-container">
          <div className="brand-item">Nike</div>
          <div className="brand-item">Adidas</div>
          <div className="brand-item">Jordan</div>
          <div className="brand-item">Puma</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Find Your Perfect Pair?</h2>
        <p>Browse our collection of premium sneakers</p>
        <Link to="/products" className="cta-btn">
          View All Products
        </Link>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">Have questions? We'd love to hear from you.</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>123 Sneaker Street, Manila, Philippines</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>info@culagbang.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+63 917 123 4567</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group-contact">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" required />
                  </div>
                  <div className="form-group-contact">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                
                <div className="form-group-contact">
                  <label>Subject</label>
                  <input type="text" placeholder="How can we help?" required />
                </div>
                
                <div className="form-group-contact">
                  <label>Message</label>
                  <textarea rows="5" placeholder="Your message..." required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


