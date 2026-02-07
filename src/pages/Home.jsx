import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Drive Your Dream Car Today</h1>
          <p>
            Explore our exclusive collection of premium cars. High performance,
            modern design, and unmatched comfort – all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/cars" className="btn">
              Explore Cars
            </Link>
            <Link to="/services" className="btn btn-outline">
              Our Services
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/33841216/pexels-photo-33841216.jpeg"
            alt="Luxury Car"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Why Choose CarZone?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Premium Quality</h3>
            <p>Top-notch cars from trusted manufacturers with guaranteed performance.</p>
          </div>
          <div className="feature-card">
            <h3>Affordable Prices</h3>
            <p>Get the best deals without compromising on quality or luxury.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Support</h3>
            <p>24/7 customer support to assist with every query or service need.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "CarZone made my dream of owning a luxury car come true. Excellent
              service and amazing cars!"
            </p>
            <h4>- Rahul S.</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "The car selection is incredible, and the buying process was seamless.
              Highly recommend!"
            </p>
            <h4>- Sneha P.</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "From exploring cars to final payment, everything was smooth and professional."
            </p>
            <h4>- Aman K.</h4>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Drive Your Dream Car?</h2>
        <Link to="/cars" className="btn btn-cta">
          Browse Cars Now
        </Link>
      </section>
    </div>
  );
}
