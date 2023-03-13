import React from "react";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import "../styles/navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="navbar_left">
        <img src="public/images/logo.png" alt="logo" />
      </div>
      <div className="navbar_middle">
        <nav ref={navRef}>
          <a href="/#">Accueil</a>
          <a href="/#">A propos</a>
          <a href="/#">Modèles</a>
          <a href="/#">Témoignages</a>
          <a href="/#">Notre équipe</a>
          <a href="/#">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <CloseIcon
              sx={{ stroke: "#ffff", strokeWidth: 1 }}
              style={{ fontSize: 30 }}
            />
          </button>
        </nav>
      </div>
      <div className="navbar_right">
        <button>Mon Espace</button>
        <button>S'inscrire</button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <DensityMediumIcon
          sx={{ stroke: "transparent", strokeWidth: 1 }}
          style={{ fontSize: 30 }}
        />
      </button>
    </header>
  );
}

export default Navbar;
