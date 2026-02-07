import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>₹{car.price.toLocaleString()}</p>
      <Link to={`/cars/${car.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
