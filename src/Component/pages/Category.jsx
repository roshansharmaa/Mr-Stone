import React, { useState } from "react";
import styled from "styled-components";
import { GiDrippingStone } from "react-icons/gi";
import { GiStoneSphere } from "react-icons/gi";
import { GiStoneSpear } from "react-icons/gi";
import { GiStonePile } from "react-icons/gi";
import { GiSwordInStone } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import stones from "../Data/Data";
import Card from "../Card/Card";

const stonesx = [
  {
    id: 1,
    name: "Amethyst",
    icon: <GiDrippingStone />,
    cat: "a",

    description: "Calming energy",
  },
  {
    id: 2,
    name: "Rose Quartz",
    cat: "b",

    icon: <GiStoneSphere />,
    description: "Symbolizes love",
  },
  {
    id: 3,
    name: "Citrine",
    icon: <GiStoneSpear />,
    cat: "c",

    description: "Prosperity and success",
  },
  {
    id: 4,
    name: "Black Onyx",
    icon: <GiStonePile />,
    cat: "d",

    description: "Protective properties",
  },
  {
    id: 5,
    name: "Lapis Lazuli",
    icon: <GiSwordInStone />,
    cat: "e",

    description: "Prized since ancient times",
  },
];

const Category = () => {
  let [filteris, setfilteris] = useState(stones);
  let handlecat = (cat) => {
    const filterdata = stones.filter((item) => item.cat == cat);
    console.log(filterdata, stonesx, stones);
    setfilteris(filterdata);
  };
  return (
    <>
      <Categorymain>
        {stonesx.map((e) => (
          <div
            key={e.id}
            className="card"
            onClick={() => {
              handlecat(e.cat), console.log(e.cat);
            }}
          >
            {e.icon}
            <h3>{e.name}</h3>
            {/* <p>{stone.description}</p> */}
          </div>
        ))}
      </Categorymain>

      <h1 style={{ textAlign: "center", color: "white" }}>Trending</h1>
      <MainCard>
        <div className="cards">
          {filteris.slice(0, 6).map((e, i) => (
            <Card name={e.name} dec={e.description} price={e.price} key={i} id={e.id} />
          ))}
        </div>
      </MainCard>
    </>
  );
};

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

const Categorymain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  justify-content: center;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    svg {
      background: #330b88a3;
      font-size: 5rem;
      padding: 2rem;
      border-radius: 50%;
      color: white;
    }
    h3 {
      margin: 0;
      color: white;
    }
  }
`;

export default Category;
