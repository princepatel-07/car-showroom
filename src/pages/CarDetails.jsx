import { useParams } from "react-router-dom";
import { cars } from "../data/carsData";
import { useState } from "react";

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(car);
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
  };

  return (
    <div className="details-page">
      <div className="details-container">
        {/* IMAGE SECTION */}
        <div className="details-image">
          <img src={car.image} alt={car.name} />
          <div className="badge">{car.fuel}</div>
        </div>

        {/* INFO SECTION */}
        <div className="details-info">
          <h1>{car.name}</h1>
          <p className="car-description">{car.description}</p>

          <div className="price-rating">
            <h2>₹{car.price.toLocaleString()}</h2>
            <div className="rating">
              ★★★★☆
            </div>
          </div>

          {/* SPECIFICATIONS TABLE */}
          <table className="specs-table">
            <tbody>
              <tr>
                <td>Mileage</td>
                <td>{car.km}</td>
              </tr>
              <tr>
                <td>Top Speed</td>
                <td>{car.speed}</td>
              </tr>
              <tr>
                <td>Fuel Type</td>
                <td>{car.fuel}</td>
              </tr>
            </tbody>
          </table>

          {/* ADD TO CART BUTTON */}
          <button onClick={addToCart} className={added ? "btn added" : "btn"}>
            {added ? "Added to Cart ✅" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
