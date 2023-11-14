import React from "react";
import menu from "./util/menu";
import "./Home.css";

function Home({ userName }) {
  return (
    <div className="menu">
      <h2>Hi {userName}</h2>
      {menu.map((menuItem, index) => {
        return (
          <div key={index} className="menu__wrapper">
            <div className="menu__category">{menuItem.category}</div>
            <ul className="menu__items">
              {menuItem.items.map((singleItem, index2) => {
                return <li key={index2} className="menu__item" >{singleItem.name}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
