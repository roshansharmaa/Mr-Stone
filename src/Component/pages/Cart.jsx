import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import stones from "../Data/Data.js";
import styled from "styled-components";
import { RemoveItem } from "../Redux/cartSlice.js";
function Cart() {
  let item = useSelector((state) => state);
  console.log(item.cart, "ff");
  // let [demo, setdemo] = useState([]);
  let dispach = useDispatch();
  const totalPrice = item.cart.length
    ? item.cart.reduce((sum, e) => sum + e.price,0)
    : 0;
  console.clear();

  return (
    <Final>
      {item.cart.length ? (
        item.cart.map((e) => (
          <>
            {/* <Card /> */}
            <MainCart className="main" key={e.id}>
              {" "}
              <img
                src={
                  "https://png.pngtree.com/png-vector/20241118/ourmid/pngtree-3d-render-of-textured-cracked-stone-block-transparent-baxkgrond-png-image_14479715.png"
                }
                alt=""
              />
              <div className="details">
                <div className="title">{e.name}</div>
                <div className="dec">{e.dec}</div>
                <div className="price">{e.price}₹</div>
                <div className="btns"></div>
              </div>
              <button
                onClick={() => {
                  dispach(RemoveItem(e.id));
                }}
              >
                Delet
              </button>
            </MainCart>
          </>
        ))
      ) : (
        <Errorcart className="demo">Cart is empty</Errorcart>
      )}

      <Pricebox>
        <h1>Total Price</h1>
        <h1>{totalPrice ? totalPrice :0} ₹</h1>
      </Pricebox>
    </Final>
  );
}

const Final = styled.div`
  height: 100vh;
`;
const Pricebox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
  color: white;
  padding: 0 2rem;
`;
const Errorcart = styled.div`
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainCart = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  justify-content: space-between;
  margin: 0.5rem auto;
  background: #035da8;
  /* border-bottom: 2px solid #0f0094a8; */
  align-items: center;

  .details {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: white;
    .title {
      font-size: 2rem;
    }
    .price {
      font-size: 1.5rem;
    }
  }
  border-radius: 20px;
  padding: 0 2rem;
  img {
    width: 200px;
    aspect-ratio: 1;
    object-fit: contain;
  }

  button {
    padding: 0.3rem 0.8rem;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 2rem 1rem;
    img {
      /* width: 200px; */
      aspect-ratio: 1;
      object-fit: contain;
    }
  }
`;

export default Cart;
