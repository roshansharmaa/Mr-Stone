import React from "react";
import Card from "../Card/Card";
import stones from "../Data/Data";
import styled from "styled-components";
import Category from "./Category";


function Shop() {
  return (
    <>
      <MainCard>
        <div className="cards">
          {stones.map((e, i) => (
            <Card name={e.name} dec={e.description} price={e.price} key={i} />
          ))}
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

export default Shop;
