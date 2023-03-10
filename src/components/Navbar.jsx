import React from "react";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
