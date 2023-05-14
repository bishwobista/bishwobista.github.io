import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hide = () => {
    setIsVisible(false);
  };
  const show = () => {
    setIsVisible(true);
  };
  const hidestyle = {
    display: isVisible ? "block" : "none",
  };
  // use history to keep style of #hero as it was. don't let it disappear on reload



  return (
    <>
      <a
        
        onClick={() => {
          window.location.reload(false); // reload on click
        }}
        style={hidestyle} //adding style i.e. hiding/showing when toggled
      >
        bishwo bista
      </a>

      <NavLink id="hero" to="/" onClick={hide} // if clicked set visible of #hero none
        // className={({isActive}) =>{
        //   isActive ? hide: show
        // }}
      >
        about
      </NavLink>

        {/* // check if the navlink is active and use the style */}
      <NavLink to="/projects" onClick={show}
      className={({isActive}) =>{
          isActive ? show: hide
        }}
      >
        projects
      </NavLink>

      <NavLink to="/contact" onClick={show}>
        contact
      </NavLink>
    </>
  );
};

export default Navbar;
