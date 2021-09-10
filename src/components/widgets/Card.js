import React, { useContext } from "react";
import { Link, useCurrentRoute } from "react-navi";
import { GlobalContext } from "../../context/GlobalContext";
import hotel from "../../styles/images/hotel.webp";
import heart from "../../styles/images/heart.svg";
export default function Card(props) {
    console.log(props,"======")
  const { searchApp } = useContext(GlobalContext);
  const [search, setsearch] = searchApp;

  return (
    <div className="card">
      XXXXXXXXXXXX
      <div className="cardImage">
          <img src={props.image}  />
         
          <Link href='/profile' className="heartIcon">
          <img src={heart} width="24" height="24"/>
        </Link>
     
      </div>
      <div className="titlePrice">
        <div className="title">Baoshan, Yunnan</div>
        <div className="Price">£34 / night</div>
      </div>
      <div className="titleSubPrice">
        <div className="titleSub">809 miles away</div>
        <div className="PriceSub">30 Oct – 6 Nov</div>
      </div>
    </div>
  );
}
