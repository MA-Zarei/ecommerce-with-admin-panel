import React, { useEffect, useState } from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 5) {
      setScrolled(true);
      setScrolled(true);
    } else {
      setScrolled(false);
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrolled)

  return (
    <>
      <div className="maincontainer">
        <div className="layoutnav">
          <Navbar scrollVar={scrolled} />
        </div>
        <div className={scrolled ? "contentScrolled" : "content"}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
