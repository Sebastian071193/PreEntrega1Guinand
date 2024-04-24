
import CartWidget from "./CartWidget.jsx";
import "./Navbar.css";

const Navbar = () => {
 
  const itemCount = 5;

  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          style={{ width: "100px" }}
          src="https://www.onlygfx.com/wp-content/uploads/2019/12/electric-guitar-drawing-2.png"
          alt="Guitar"
        />
        <h1 className="logo">GuitarWorld</h1>
      </div>
      <ul>
        <li>
          <a href="#">Guitarras</a>
        </li>
        <li>
          <a href="#">Amplificadores</a>
        </li>
        <li>
          <a href="#">Componentes</a>
        </li>
      </ul>
      <CartWidget itemCount={itemCount} />
    </div>
  );
};

export default Navbar;

