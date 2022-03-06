import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  if (!cart.length) {
    return <h3>Empty Cart</h3>;
  }
  return (
    <section>
      <header>
        <h2>My Cart</h2>
      </header>
      <div>
        {cart.map(({ id, title, price, image, amount }) => (
          <article key={id}>
            <div>
              <img src={image} alt="cart item" />
            </div>
            <div>
              <p>{title}</p>
              <p>$ {price}</p>
            </div>
            <div>
              <button onClick={() => increaseAmount(id)}>
                <FiChevronUp />
              </button>
              <p>{amount}</p>
              <button onClick={() => decreaseAmount(id, amount)}>
                <FiChevronDown />
              </button>
            </div>
          </article>
        ))}
      </div>
      <div>
        <h3>Total: $ {total}</h3>
      </div>
      <div>
        <button className="btn" onClick={() => navigate("/checkout")}>
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
