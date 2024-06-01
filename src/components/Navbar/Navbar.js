import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {
      itemName: "فروشگاه",
      itemLink: "/",
    },
    {
      itemName: "درباره ما",
      itemLink: "/aboutus",
    },
    {
      itemName: "جستجو",
      itemLink: "/",
    },
    {
      itemName: "حساب کاربری",
      itemLink: "/",
    },
    {
      itemName: "سبد خرید",
      itemLink: "/",
    },
  ];
  navItems.map((item, index) => {
    console.log(item);
  });
  return (
    <div className="background">
      <div className="headercontainer">
        <div className="items">
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={item.itemLink}
                  >
                    {item.itemName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="logo">Logo</div>
      </div>
    </div>
  );
}
