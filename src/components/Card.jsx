import React from "react";
import Image1 from "../img/IMG_20220109_104655_774.jpg";
import card from "./Card.css";
import Avata from "./Avata.jsx";
const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avata img={props.img} />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
