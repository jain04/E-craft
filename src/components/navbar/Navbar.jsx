import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
        <div class="container">
            <div class="menu-par">
                <div class="logo-par">
                    <a href="index.html">
                        <h2>!NDIA</h2>
                    </a>
                </div>
                <div class="nav">
                    <ul>
                        <li><a class="menu_hover" href="index.html">Home</a></li>
                        <li><a class="menu_hover" href="#slides_parent">Heritage Sites</a></li>
                        <li><a class="menu_hover" href="#explore-fiji">Travel With us</a></li>
                        <li><a class="menu_hover" href="#gallery">Gallery</a></li>
                        <li><a class="menu_hover" href="#fiji-holyday">Our Pride</a></li>
                        <li><a class="menu_hover" href="#blog">Blog</a></li>
                    </ul>
                </div>
                <div class="toggle-btn">
                    <i class="fa fa-bars"></i>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
