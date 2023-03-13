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
      <img src="public/images/logo.png" alt="logo" />
      <nav ref={navRef}>
        <a href="/#">Accueil</a>
        <a href="/#">A propos</a>
        <a href="/#">Modèles</a>
        <a href="/#">Témoignages</a>
        <a href="/#">Notre équipe</a>
        <a href="/#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <CloseIcon />
        </button>
      </nav>
      <button>sign in</button>
      <button>Register</button>
      <button className="nav-btn" onClick={showNavbar}>
        <DensityMediumIcon />
      </button>
    </header>
  );
}

export default Navbar;
