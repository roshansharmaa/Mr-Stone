import React from "react";
import styled from "styled-components";
import hero from "../../assets/home.png";
import Category from "./Category";

function Home() {
  return (
    <>
    <Herosection>
      {/* <img src={hero} alt="" /> */}
      <div className="cont">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          obcaecati acc
        </p>
      </div>
    </Herosection>
    <Category/>
    </>
  );
}

const Herosection = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  height: 100vh;
  .cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 1024px;
    border-radius: 20px;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export default Home;
