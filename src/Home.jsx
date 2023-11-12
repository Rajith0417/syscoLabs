import React from "react";
import menu from "./util/menu";
import "./Home.css";

function Home({ userName }) {
  return (
    <div className="menu">
      {menu.map((menuItem, index) => {
        return (
          <div className="menu__wrapper">
            <div className="menu__category" key={index}>{menuItem.category}</div>
            <ul className="menu__items">
              {menuItem.items.map((singleItem, index2) => {
                return <li className="menu__item" key={index2}>{singleItem.name}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
