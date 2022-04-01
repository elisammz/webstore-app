import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/cart";
import { useNavigate } from "react-router-dom";
//icons
import { FiArrowUpCircle } from "react-icons/fi";
import { FiArrowDownCircle } from "react-icons/fi";
//Components
import BrandButton from "../components/styles/BrandButton.styled";
import { color } from "@mui/system";

const StyledCart = styled.section`
  height: 100vh;
  align-items: center;

  p {
    margin: 0 auto;
  }
`;

const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  if (!cart.length) {
    return <h3>Empty Cart</h3>;
  }
  return (
    <>
      <StyledCart>
        <div className="flex-row p-5">
          <h1>My Cart</h1>
          {cart.map(({ id, title, price, image, amount }) => (
            <div key={id} className="row justify-content-evenly ">
              <div className="col-md-auto">
                <img src={image} width="100" alt="cart item" />
                <p>{title}</p>
                <p>$ {price}</p>
              </div>

              <div className="col-md-auto">
                <BrandButton cuaternary onClick={() => increaseAmount(id)}>
                  <FiArrowUpCircle />
                </BrandButton>
                <p className="text-center">{amount}</p>
                <BrandButton
                  cuaternary
                  onClick={() => decreaseAmount(id, amount)}
                >
                  <FiArrowDownCircle />
                </BrandButton>
              </div>
            </div>
          ))}
          <div className="text-center">
            <h1>Total: $ {total}</h1>
            <BrandButton secondary onClick={() => navigate("/checkout")}>
              Checkout
            </BrandButton>
          </div>
        </div>
      </StyledCart>
    </>
  );
};

export default Cart;
