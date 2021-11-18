import React, { Component } from "react";
import "../Navbar/Navbar.css";
import IcecreamImg from "../../images/IcecreamBanner.png";
import DonutImg from "../../images/DonutsBanner.png";
import FamilyCorporateImg from "../../images/FamilyCorporateBanner.png";

function Cards() {
  return (
    <div className="wrapper">
      <Card
        img={IcecreamImg}
        title="Icecream and gelato"
        button="Explore Options"
      />

      <Card img={DonutImg} title="Delicious Donuts" button="Explore Options" />

      <Card
        img={FamilyCorporateImg}
        title="Family / Corporate"
        description="Explore Options"
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
      </div>
      <button className="card__btn">Explore Options</button>
    </div>
  );
}

export default Cards;
