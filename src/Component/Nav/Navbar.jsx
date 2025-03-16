import React from "react";
import styled from "styled-components";
import logo from "../../assets/stone.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {

  let item=useSelector(state=>state)
  console.log(item)
  console.clear();

  return (
    <>
      <Navcomp>
     
        <div className="firstnav">
          <Link to={"/"}>
            <div className="one">
              <img src={logo} className="imgg" alt="" />
            </div>
          </Link>
        </div>
        <div className="secondnav">
          <Link to={"/"}>
            <button className="first">
              <h5>Home</h5>
            </button>
          </Link>
          <Link to={"/shop"}>
            <button className="first">
              <h5>Shop</h5>
            </button>
          </Link>
          <Link to={"/cart"}>
            <button className="first">
              <h5><FaShoppingCart/><strong>{item.cart.length}</strong></h5>
            </button>
          </Link>
            <button className="first" disabled>
              <h5>Contect</h5>
            </button>
        </div>

        <div className="thirdtnav">
          <a to={"/PlantCare"}>
            <button className="first">
              <h5>Logout</h5>
            </button>
          </a>
        </div>
      </Navcomp>
    </>
  );
}

// const Secondhome = styled.div`
// const Navcomp =styled
const Navcomp = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 768px;
  border-bottom: 2px solid #0f0094a8;
  margin: 0 auto;
svg{
  font-size: 1rem;
}
  strong{
      background: red;
      padding: .1rem .3rem;
      border-radius: 50%;
    }
  button {
    background: transparent;
    border: 1px solid transparent;
    padding: 0.2rem 0.1rem;
    &:hover {
      transition: all .6s ease-in-out;
      border: 1px solid white;
    }
  }
  .firstnav {
    img {
      height: 40px;
    }

  }
  .secondnav,
  .thirdtnav {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    gap: 1rem;
    .first {
      h5 {
        margin: 0;
        color: white;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default Navbar;
