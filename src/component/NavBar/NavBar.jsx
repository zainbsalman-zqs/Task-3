import React from "react";
import "./NavBar.css";
import menunav from "./../../../public/assets/img/menunav.svg";
import { useState } from "react";
const NavBar = ({ logo, text, items, btn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>{text}</h1>
      </div>
      <div className="c">
        <ul className={`x ${menuOpen ? "open" : ""}`}>
          {items?.map((item, index) => {
            return (
              <li
                key={index}
                className={`z ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                style={{
                  background:
                    activeIndex === index
                      ? "#FFEFE5"
                      : index === 0 && activeIndex === 0
                      ? "#FFEFE5"
                      : "#FFFFFF",
                  padding: "20px  34px",
                }}
              >
                <a href={item?.link}>{item?.content}</a>
              </li>
            );
          })}
        </ul>
        <button className="btnnav">{btn}</button>
      </div>

      <div className="menu">
        <button className="btnmenu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menunav} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
