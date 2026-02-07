import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page dark-theme">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1>Get in Touch with CarZone</h1>
        <p>Premium support and inquiries for our luxury car collection.</p>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="contact-info">
        <div className="info-card">
          <div className="info-icon">📧</div>
          <h3>Email</h3>
          <p>support@carzone.com</p>
        </div>
        <div className="info-card">
          <div className="info-icon">📞</div>
          <h3>Phone</h3>
          <p>+91 9876543210</p>
        </div>
        <div className="info-card">
          <div className="info-icon">📍</div>
          <h3>Address</h3>
          <p>123 Luxury St, Car City, India</p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-icon">💬</span>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-cta">
            Send Message
          </button>
        </form>
      </section>

      {/* MAP SECTION */}
      <section className="contact-map">
        <h2>Visit Our Showroom</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.751079124116!2d72.63669731537633!3d23.02250598495096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8485c1d47e11%3A0x8b7a99357e3ed5c7!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px", boxShadow: "0 10px 25px rgba(255,152,0,0.4)" }}
          allowFullScreen=""
          loading="lazy"
          title="CarZone Location"
        ></iframe>
      </section>
    </div>
  );
}
