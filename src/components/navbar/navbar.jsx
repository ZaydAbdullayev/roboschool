import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">robo.scool</Link>
      <ul>
        <Link to="/">О школе</Link>
        <Link to="/">Тренеры</Link>
        <Link to="/">Стоимость</Link>
      </ul>
      <a href="tel:+78000001122">+7 800 000 11 22</a>
    </div>
  );
};
