import React from "react";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import stones from "../Data/Data";
import {useDispatch} from 'react-redux';
import { AddItem } from "../Redux/cartSlice";
function Card({ name, dec, price,id}) {
  let dispatch = useDispatch();
  return (
    <>
      <MainCard >
        <div className="cards">
          <div className="crd">
            <img
              src={
                "https://png.pngtree.com/png-vector/20241118/ourmid/pngtree-3d-render-of-textured-cracked-stone-block-transparent-baxkgrond-png-image_14479715.png"
              }
              alt=""
            />
            <div className="details">
              <div className="title">{name}</div>
              <div className="dec">{dec}</div>
              <div className="price">{price}₹</div>
              <div className="btns">
                <button onClick={()=>{dispatch(AddItem({id:id,name:name,dec:dec,price:price}))}}>Add  <FaCartPlus /></button>
              
              </div>
            </div>
          </div>
        </div>
      </MainCard>
    </>
  );
}

const MainCard = styled.div`
  color: white;
  margin: 2rem;
  .cards {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    .crd {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 2px solid #2a1068;
      max-width: 250px;
      padding: 0.5rem;
      img {
        aspect-ratio: 1;
        object-fit: contain;
      }
      button {
        display: flex;
        align-items: center;
        background-color: #2a1068;
        color: white;
        padding: 0.3rem 0.7rem;
      }
    }
  }
  img {
    height: 200px;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .btns {
      display: flex;
      gap: 0.5rem;

      svg {
      }
    }
  }
`;
export default Card;
