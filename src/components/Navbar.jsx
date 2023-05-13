import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {};
  const hide = () => {
    setIsVisible(false);
  };
  const show = () => {
    setIsVisible(true);
  };
  const hidestyle = {
    display: isVisible ? "block" : "none",
  };

  return (
    <>
      <a
        
        onClick={() => {
          window.location.reload(false);
        }}
        style={hidestyle}
      >
        bishwo bista
      </a>

      <NavLink id="hero" to="/" onClick={hide}
        className={({isActive}) =>{
          isActive ? hide: show
        }}
      >
        about
      </NavLink>

      <NavLink to="/projects" onClick={show}>
        projects
      </NavLink>

      <NavLink to="/contact" onClick={show}>
        contact
      </NavLink>
    </>
  );
};

export default Navbar;
