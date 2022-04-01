import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/cart";
import { useNavigate } from "react-router-dom";
//icons
import { FiArrowUpCircle } from "react-icons/fi";
import { FiArrowDownCircle } from "react-icons/fi";
//Components
import BrandButton from "../components/styles/BrandButton.styled";

const StyledCart = styled.section`
  min-height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  h1 {
    font-size: 24px;
    padding: 40px;
    margin: 0 auto;
  }

  .amount {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around !important;
    align-items: center;
  }

  p {
    margin: 0 auto;
  }

  @media (max-width: 820px) {
    margin: 0 auto;

    .amount-btn {
      font-size: 12px;
    }

    img {
      display: none;
    }
  }
`;

const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  if (!cart.length) {
    return <h1>Empty Cart</h1>;
  }
  return (
    <>
      <StyledCart>
        <div className="row text-center">
          <h1>My Cart</h1>
          {cart.map(({ id, title, price, image, amount }) => (
            <div key={id} className="row justify-content-around ">
              <div className="col-md-auto">
                <img src={image} width="200" alt="cart item" />
                <p>{title}</p>
                <p>$ {price}</p>
              </div>

              <div className=" amount col-md-auto">
                <BrandButton
                  className="amount-btn"
                  cuaternary
                  onClick={() => increaseAmount(id)}
                >
                  <FiArrowUpCircle />
                </BrandButton>
                <p className="  text-center">{amount}</p>
                <BrandButton
                  className="amount-btn"
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
