import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our EPIC Range of Sweets and Savouries!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/coffeeimage-1.jpg"
              text="Explore the best of all variety of Coffee in town"
              label="Coffee"
              path="/services"
            />
            <CardItem
              src="images/teaimage-1.jpg"
              text="Experience the taste of a wide range of Tea like no other"
              label="Tea"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/savouries-1.jpg"
              text="Much options on Savouries for your taste bud"
              label="Savouries"
              path="/services"
            />
            <CardItem
              src="images/dessert-1.jpg"
              text="Catering to your sweet and savouries likings, we have a unique combo of both"
              label="Savouries/Dessert"
              path="/products"
            />
            <CardItem
              src="images/dessert-2.jpg"
              text="Give in to your sweet tooth cravings in a way you truly deserve"
              label="Dessert"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
