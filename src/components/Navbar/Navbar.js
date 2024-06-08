import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar({ scrollVar }) {
  const navItems = [
    {
      itemName: "فروشگاه",
      itemLink: "/shop",
    },
    {
      itemName: "درباره ما",
      itemLink: "/aboutus",
    },
    {
      itemName: "جستجو",
      itemLink: "/search",
    },
    {
      itemName: "حساب کاربری",
      itemLink: "/account",
    },
    {
      itemName: "سبد خرید",
      itemLink: "/cart",
    },
  ];
  // console.log(scrollVar.scrolled)
  // const [navscrolled, setNavScrolled] = useState(false);
  // const handleScroll = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY > 5) {
  //     setNavScrolled(true);
  //     setScrolled(true);
  //   } else {
  //     setNavScrolled(false);
  //     setScrolled(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className={scrollVar ? "background" : ""}>
      <div className={scrollVar ? "headercontainerfixed" : "headercontainer"}>
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
        <div className="logo">
          <a href="/">Logo</a>
        </div>
      </div>
    </div>
  );
}
