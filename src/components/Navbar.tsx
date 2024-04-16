import { Navbar as NavbarBs, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
function Navbar() {
  const {openCart,cartQuantity}=useShoppingCart()
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {
          cartQuantity>0&&(

        
        <button
        onClick={openCart}
          style={{
            backgroundColor: "transparent",
            border: "1px solid skyblue",
            borderRadius: "50%",
            width: "3rem",
            height: "3rem",
            position: "relative",
          }}
        >
          <svg
            style={{ width: "1.5rem", height: "1.5rem", color: "blue" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1rem",
              height: "1rem",
              padding:"3px",

              position: "absolute",
              bottom:"2px",
              right: "-5px",
                       
            }}
          >
            {cartQuantity}
          </div>
        </button>
          )
        }
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
