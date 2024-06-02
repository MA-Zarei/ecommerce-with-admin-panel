import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrolled ? "background" : ""}>
      <div className={scrolled ? "headercontainerfixed" : "headercontainer"}>
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
