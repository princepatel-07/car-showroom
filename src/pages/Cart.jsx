import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [paid, setPaid] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setSubtotal(total);
  }, [cart]);

  const payNow = () => {
    if (cart.length === 0) return;
    localStorage.removeItem("cart");
    setCart([]);
    setPaid(true);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000); // toast disappears after 3s
  };

  const goToProduct = (id) => {
    navigate(`/cars/${id}`);
  };

  return (
    <div className="cart-page dark-theme">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p></p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Car</th>
                <th>Fuel</th>
                <th>Mileage</th>
                <th>Top Speed</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="cart-row">
                  <td
                    className="cart-car clickable"
                    onClick={() => goToProduct(item.id)}
                  >
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>{item.fuel}</td>
                  <td>{item.km}</td>
                  <td>{item.speed}</td>
                  <td>₹{item.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p>
              <strong>Subtotal:</strong> ₹{subtotal.toLocaleString()}
            </p>
            <button className="btn btn-cta" onClick={payNow}>
              Pay Now
            </button>
          </div>
        </>
      )}

      {/* FLOATING TOAST */}
      {showToast && (
        <div className="toast">
          <h3>Payment Successful 🎉</h3>
          <p>Your luxury car purchase is confirmed!</p>
        </div>
      )}

      {/* FULL SCREEN PAYMENT SUCCESS */}
      {paid && cart.length === 0 && !showToast && (
        <div className="success-overlay">
          <h1>Payment Completed ✅</h1>
          <p>Thank you! Your order is confirmed.</p>
        </div>
      )}
    </div>
  );
}
