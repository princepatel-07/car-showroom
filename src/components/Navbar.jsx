// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <h2>CAR SHOWROOM</h2>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/cars">Cars</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/cart">Cart</Link>
//       </div>
//     </nav>
//   );
// }
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Navbar.css";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="nav">
//       <h2 className="logo">CAR SHOWROOM</h2>

//       <div
//         className={`nav-links ${menuOpen ? "active" : ""}`}
//         onClick={() => setMenuOpen(false)}
//       >
//         <Link to="/">Home</Link>
//         <Link to="/cars">Cars</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/cart">Cart</Link>
//       </div>

//       <div
//         className="menu-icon"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         ☰
//       </div>
//     </nav>
//   );
// }
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <h2>CAR SHOWROOM</h2>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/cars" onClick={() => setMenuOpen(false)}>Cars</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}
