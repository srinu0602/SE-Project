import React from "react";
import "./FoodStalls.css";
import starbucks from "./assets/starbucks.jpg";
import burger352 from "./assets/Burger 352.png";
import pandaExpress from "./assets/Panda.jpg";
import subway from "./assets/subway.jpg";

const stalls = [
    { name: "Starbucks", image: starbucks },
    { name: "Burger 352", image: burger352 },
    { name: "Panda Express", image: pandaExpress },
    { name: "Subway", image: subway }
  ];

  function FoodStalls() {
    return (
      <div className="stalls-container">
        {stalls.map((stall, index) => (
          <div key={index} className="stall-button">
            <img src={stall.image} alt={stall.name} className="stall-image" />
            <p className="stall-name">{stall.name}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default FoodStalls;