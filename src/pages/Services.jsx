import { Link } from "react-router-dom";

export default function Services() {
  const serviceList = [
    {
      title: "Car Servicing",
      description:
        "Comprehensive maintenance, engine check, oil change, and regular servicing to keep your car in top condition.",
      image: "https://i.pinimg.com/736x/e8/e5/aa/e8e5aa98a405dbb0471306ca92497433.jpg"
    },
    {
      title: "Insurance Assistance",
      description:
        "Get guidance for car insurance, renewals, claims, and coverage options to protect your vehicle.",
      image: "https://i.pinimg.com/1200x/c8/13/05/c81305fa08c5c328419f65df3e463d46.jpg"
    },
    {
      title: "Car Accessories",
      description:
        "Premium accessories including seat covers, floor mats, infotainment upgrades, and more.",
      image: "https://i.pinimg.com/1200x/ee/18/cf/ee18cf1c1f93cb7c8a3f9aaf38384494.jpg"
    },
    {
      title: "Premium Support",
      description:
        "24/7 dedicated support team to assist with queries, emergencies, or roadside assistance.",
      image: "https://i.pinimg.com/1200x/ac/e7/24/ace724e731b14c1343e3a4b7fb59581d.jpg"
    },
    {
      title: "Car Detailing",
      description:
        "Professional car cleaning and detailing services to make your car shine like new.",
      image: "https://i.pinimg.com/736x/89/3b/69/893b698ae30b4f8bce99bac096fcf1db.jpg"
    },
    {
      title: "Custom Modifications",
      description:
        "Upgrade your car with performance tuning, body kits, alloy wheels, and custom features.",
      image: "https://i.pinimg.com/1200x/c2/82/85/c28285f40d5116d698387f5dbcadab4e.jpg"
    }
  ];

  return (
    <div className="services-page dark-theme">
      {/* HERO SECTION */}
      <section className="services-hero">
        <h1>Our Premium Services</h1>
        <p>
          At CarZone, we elevate your driving experience with top-notch services,
          maintenance, and customization options.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/contact" className="btn btn-sm">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="services-cta">
        <h2>Ready to Upgrade Your Car?</h2>
        <Link to="/contact" className="btn btn-cta">
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}
