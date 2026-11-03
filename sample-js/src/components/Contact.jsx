export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="contact-page">
      {/* Hero Header */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any question you might have</p>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Have questions about our products or services? Fill out the form and our team will get back to you within 24 hours.
              </p>

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
                  <p>support@culagbang.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+63 917 123 4567</p>
                  <p>+63 918 765 4321</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#facebook" className="social-icon">📘 Facebook</a>
                  <a href="#instagram" className="social-icon">📷 Instagram</a>
                  <a href="#twitter" className="social-icon">🐦 Twitter</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group-contact">
                    <label>First Name *</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group-contact">
                    <label>Last Name *</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group-contact">
                    <label>Email *</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group-contact">
                    <label>Phone</label>
                    <input type="tel" placeholder="+63 917 123 4567" />
                  </div>
                </div>
                
                <div className="form-group-contact">
                  <label>Subject *</label>
                  <input type="text" placeholder="How can we help you?" required />
                </div>
                
                <div className="form-group-contact">
                  <label>Message *</label>
                  <textarea rows="6" placeholder="Tell us more about your inquiry..." required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <h2>Find Us Here</h2>
          <div className="map-placeholder">
            <p>📍 123 Sneaker Street, Manila, Philippines</p>
            <p className="map-note">Visit our physical store for exclusive in-store deals!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
